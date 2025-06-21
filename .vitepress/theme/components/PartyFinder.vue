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
const activeEndpoint = ref('/lfm'); // Default endpoint
const tags = ref<{[key: string]: {tag_name: string, parent_id: string}}>({});

// Fetch tags from the /tags endpoint
const fetchTags = async () => {
  try {
    const url = `${baseApiUrl}/tags`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch tags: ${response.status}`);
    }
    const tagData = await response.json();

    if (tagData.success && Array.isArray(tagData.data)) {
      // Convert array to lookup object by tag_id
      const tagMap: {[key: string]: {tag_name: string, parent_id: string}} = {};
      tagData.data.forEach(tag => {
        tagMap[tag.tag_id] = {
          tag_name: tag.tag_name,
          parent_id: tag.parent_id
        };
      });
      tags.value = tagMap;
    }
  } catch (err) {
    console.error('Error fetching tags:', err);
  }
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
  const tag = tags.value[tagId];

  if (tag) {
    return {
      name: tag.tag_name,
      icon: `/images/tags/${tag.tag_name.toLowerCase().replace("/", "-")}.webp`
    };
  }

  return { icon: null, name: tagId };
};

// Generate Discord thread URL
const getDiscordThreadUrl = (threadId: string) => {
  return `https://discordapp.com/channels/895516967543390249/${threadId}`;
};

onMounted(async () => {
  await fetchTags();
  fetchThreads(activeEndpoint.value);
});
</script>

<template>
  <div class="party-finder">
    <div class="tabs">
		<button
			:class="{ active: activeEndpoint === '/lfm' }"
			@click="switchEndpoint('/lfm')"
		>
			Looking For Members
		</button>
      <button
        :class="{ active: activeEndpoint === '/lfg' }"
        @click="switchEndpoint('/lfg')"
      >
        Looking For Group
      </button>
      <button
        :class="{ active: activeEndpoint === '/lfs' }"
        @click="switchEndpoint('/lfs')"
      >
        Looking For Sub
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
            <div class="thread-owner">
				<svg
					width="16px"
					height="16px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
										fill="currentColor"
									/>
									<path
										d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
										fill="currentColor"
									/>
								</svg>
				<div class="thread-owner-name">{{ thread.owner_nickname || 'Unknown' }}</div></div>

            <div v-if="thread.parsedMetadata" class="thread-date">
              Posted: {{ formatDate(thread.parsedMetadata.create_timestamp) }}
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
	min-height:  100vh;
}

.tabs {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 2px solid var(--vp-c-text-2);
}

.tabs button {
  padding: 10px 20px;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
	  color: var(--vp-c-text-2);
  transition: all 0.2s ease;
}

.tabs button:hover {
  color: var(--vp-c-text-3);
}

.tabs button.active {
  color: var(--vp-c-brand);
  border-bottom: 3px solid var(--vp-c-brand);
}

.loading,
.error,
.empty {
  padding: 20px;
  text-align: center;
  color: var(--vp-c-text-2);
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
	display: flex;
	  align-items: center;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.thread-owner svg {
  width: 20px;
  height: 20px;
  margin-right: 4px;
  fill: var(--vp-c-text-2);
}

.thread-info {
  display: flex;
	gap: 10px;
  margin-bottom: 10px;
  font-size: 14px;
	color: var(--vp-c-text-3);
	font-weight: 600;
}

.thread-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}

.tag {
  padding: 4px 6px;
  background-color: var(--vp-c-bg-elv);
  border-radius: 4px;
  font-size: 14px;
	color: var(--vp-c-text-2);
  display: flex;
  align-items: center;
	font-weight: 600
}

.tag-icon {
  width: 20px;
  height: 20px;
  margin-right: 6px;
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