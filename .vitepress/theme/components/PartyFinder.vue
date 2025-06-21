<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface ThreadMetadata {
  archived: boolean;
  archive_timestamp: string;
  auto_archive_duration: number;
  locked: boolean;
  create_timestamp: string;
}

interface Thread {
  thread_id: string;
  thread_name: string;
  topic: string | null;
  owner_id: string;
  owner_nickname: string | null;
  parent_id: string;
  member_count: number;
  message_count: number;
  available_tags: string | null;
  applied_tags: string | null;
  thread_metadata: string;
  parsedMetadata?: ThreadMetadata;
}

interface ThreadResponse {
  success: boolean;
  data: Thread[];
}

const threads = ref<Thread[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);
const baseApiUrl = 'https://discord-thread-tracker-api.ingramscloud.workers.dev';
const activeEndpoint = ref('/lfg'); // Default endpoint

const channelTags = {
	'1147498074466422884': { icon: '/images/icons/trial.webp', name: 'TEA' },
	'1147498085929472030': { icon: '/images/icons/trial.webp', name: 'UWU' },
	'1147498245178806322': { icon: '/images/icons/trial.webp', name: 'DSR' },
	'1147551329485594644': { icon: '/images/icons/trial.webp', name: 'UCOB' },
	'1271026958829879309': { icon: '/images/icons/trial.webp', name: 'FRU' },
	'1147498047790665819': { icon: '/images/icons/trial.webp', name: 'TOP' },
	'1147521979402960926': { icon: '/images/icons/trial.webp', name: 'Savage' },
	'1147526116244996246': { icon: '/images/icons/trial.webp', name: 'Midcore' },
};

// Parse the thread_metadata JSON string in each thread
const parseThreadMetadata = (threads: Thread[]) => {
  return threads.map(thread => {
    try {
      const parsedMetadata = JSON.parse(thread.thread_metadata) as ThreadMetadata;
      return {
        ...thread,
        parsedMetadata
      };
    } catch (e) {
      return thread;
    }
  });
};

// Format date to a more readable format
const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Fetch threads from the selected endpoint
const fetchThreads = async (endpoint: string) => {
  loading.value = true;
  error.value = null;
  activeEndpoint.value = endpoint;

  try {
    const url = `${baseApiUrl}${endpoint}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    const data: ThreadResponse = await response.json();

    if (data.success && Array.isArray(data.data)) {
      threads.value = parseThreadMetadata(data.data);
    } else {
      throw new Error('Invalid data format received');
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An unknown error occurred';
    console.error('Error fetching threads:', err);
  } finally {
    loading.value = false;
  }
};

// Switch between endpoints
const switchEndpoint = (endpoint: string) => {
  fetchThreads(endpoint);
};

// Get tag information by ID
const getTagInfo = (tagId: string) => {
  return channelTags[tagId] || { icon: null, name: tagId };
};

// Generate Discord thread URL
const getDiscordThreadUrl = (threadId: string) => {
  return `https://discordapp.com/channels/895516967543390249/${threadId}`;
};

onMounted(() => {
  fetchThreads(activeEndpoint.value);
});
</script>

<template>
  <div class="party-finder">
    <div class="tabs">
      <button
        :class="{ active: activeEndpoint === '/lfg' }"
        @click="switchEndpoint('/lfg')"
      >
        Looking For Group
      </button>
      <button
        :class="{ active: activeEndpoint === '/lfm' }"
        @click="switchEndpoint('/lfm')"
      >
        Looking For Members
      </button>
      <button
        :class="{ active: activeEndpoint === '/lfs' }"
        @click="switchEndpoint('/lfs')"
      >
        Looking For Static
      </button>
    </div>

    <div class="content">
      <div v-if="loading" class="loading">
        Loading threads...
      </div>

      <div v-else-if="error" class="error">
        {{ error }}
      </div>

      <div v-else-if="threads.length === 0" class="empty">
        No threads found.
      </div>

      <div v-else class="thread-list">
        <a
          v-for="thread in threads"
          :key="thread.thread_id"
          class="thread-item"
          :href="getDiscordThreadUrl(thread.thread_id)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="thread-header">
            <h3 class="thread-title">{{ thread.thread_name }}</h3>
          </div>

          <div class="thread-info">
            <span class="thread-owner">Posted by: {{ thread.owner_nickname || 'Unknown' }}</span>

            <div v-if="thread.parsedMetadata" class="thread-date">
              Created: {{ formatDate(thread.parsedMetadata.create_timestamp) }}
            </div>
          </div>

          <div v-if="thread.applied_tags" class="thread-tags">
            <span class="tag" v-for="(tagId, index) in JSON.parse(thread.applied_tags)" :key="index">
              <img v-if="getTagInfo(tagId).icon" :src="getTagInfo(tagId).icon" class="tag-icon" :alt="getTagInfo(tagId).name">
              <span class="tag-name">{{ getTagInfo(tagId).name }}</span>
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.party-finder {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}

.tabs {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
}

.tabs button {
  padding: 10px 20px;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #666;
  transition: all 0.2s ease;
}

.tabs button:hover {
  color: #333;
}

.tabs button.active {
  color: #3498db;
  border-bottom: 2px solid #3498db;
}

.filter-section {
  margin-bottom: 20px;
}

.filter-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
}

.filter-tag {
  padding: 8px 12px;
  background-color: var(--vp-c-bg-elv);
  border-radius: 4px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease;
}

.filter-tag:hover {
  background-color: var(--vp-c-bg);
}

.filter-tag.active {
  background-color: #3498db;
  color: #fff;
}

.clear-filters {
  padding: 8px 16px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease;
}

.clear-filters:hover {
  background-color: #c0392b;
}

.loading,
.error,
.empty {
  padding: 20px;
  text-align: center;
  color: #666;
}

.error {
  color: #e74c3c;
}

.thread-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.thread-item {
  padding: 15px;
  border: 2px solid var(--vp-c-bg-elv);
  border-radius: 8px;
  background-color: var(--vp-c-bg-alt);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
	text-decoration: none;
	display: block;
}

.thread-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.thread-item:hover .thread-title {
  color: var(--vp-c-brand);
}

.thread-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.thread-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.thread-owner {
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.thread-info {
  display: flex;
	gap: 10px;
  margin-bottom: 10px;
  font-size: 14px;
	color: var(--vp-c-text-3);
}

.thread-stats {
  display: flex;
  gap: 15px;
}

.thread-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}

.tag {
  padding: 4px 8px;
  background-color: var(--vp-c-bg-elv);
  border-radius: 4px;
  font-size: 12px;
	color: var(--vp-c-text-2);
  display: flex;
  align-items: center;
}

.tag-icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}

.tag-name {
  display: inline-block;
}

.thread-link {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #3498db;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.thread-link:hover {
  background-color: #2980b9;
}
</style>