<script setup lang="ts">
import {ref, onMounted, computed} from "vue";

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

interface Tag {
	tag_name: string;
	parent_id: string;
	filtered: boolean;
}

const channelConfig = {
	lfm: {
		name: "Looking For Members",
		parent_id: "1147471873463033978",
	},
	lfg: {
		name: "Looking For Group",
		parent_id: "1260078528125468743",
	},
	lfs: {
		name: "Looking For Sub",
		parent_id: "1324237133212291093",
	},
};

// Thread names to ignore
const ignoredThreadNames = [
  'How to use this channel!',
];

// Store all threads in one array
const allThreads = ref<Thread[]>([]);

// Active category
const activeCategory = ref('lfm'); // Default category

// Function to toggle a tag's filtered state
const toggleTagFilter = (tagId: string) => {
  if (tags.value[tagId]) {
    tags.value[tagId].filtered = !tags.value[tagId].filtered;
  }
};

// Check if any filters are currently active for the current category
const hasActiveFilters = computed(() => {
  const categoryParentId = channelConfig[activeCategory.value as keyof typeof channelConfig].parent_id;

  // Only consider tags relevant to the current category
  return Object.values(tags.value).some(tag =>
    tag.parent_id === categoryParentId && tag.filtered
  );
});

// Get all unique tags for the current category
const categoryTags = computed(() => {
  const parentId = channelConfig[activeCategory.value as keyof typeof channelConfig].parent_id;
  const tagIds = new Set<string>();

  // Collect all unique tag IDs from threads in current category
  allThreads.value
    .filter(thread => thread.parent_id === parentId)
    .forEach(thread => {
      if (thread.applied_tags) {
        try {
          const threadTags = JSON.parse(thread.applied_tags) as string[];
          threadTags.forEach(tagId => {
            // Only add tags that exist in our tag map
            if (tags.value[tagId]) {
              tagIds.add(tagId);
            }
          });
        } catch (e) {
          // Ignore parse errors
        }
      }
    });

  // Convert to array of tag objects with their filtered status
  return Array.from(tagIds).map(tagId => ({
    id: tagId,
    ...tags.value[tagId]
  })).sort((a, b) => a.tag_name.localeCompare(b.tag_name)); // Sort alphabetically by name
});

// Clear all active filters for the current category
const clearFilters = () => {
  const categoryParentId = channelConfig[activeCategory.value as keyof typeof channelConfig].parent_id;

  Object.keys(tags.value).forEach(tagId => {
    if (tags.value[tagId].parent_id === categoryParentId) {
      tags.value[tagId].filtered = false;
    }
  });
};

// Reference to currently displayed threads based on active category and filters
const displayedThreads = computed(() => {
  const parentId = channelConfig[activeCategory.value as keyof typeof channelConfig].parent_id;

  // First filter by parent_id and remove ignored thread names
  const threadsInCategory = allThreads.value.filter(thread =>
    thread.parent_id === parentId &&
    !ignoredThreadNames.some(ignoreName =>
      thread.thread_name.toLowerCase().includes(ignoreName.toLowerCase())
    )
  );

  // If no filters are active, show all non-ignored threads in category
  if (!hasActiveFilters.value) {
    return threadsInCategory;
  }

  // Otherwise, filter threads based on applied tags
  return threadsInCategory.filter(thread => {
    if (!thread.applied_tags) return false;

    try {
      const threadTags = JSON.parse(thread.applied_tags) as string[];
      // Only show threads that have at least one of the filtered tags
      return threadTags.some(tagId => tags.value[tagId]?.filtered);
    } catch (e) {
      return false;
    }
  });
});
const loading = ref(true);
const error = ref<string | null>(null);
const baseApiUrl = "https://discord-thread-tracker-api.ingramscloud.workers.dev";
const tags = ref<{[key: string]: Tag}>({});

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
			const tagMap: {[key: string]: Tag} = {};
			tagData.data.forEach((tag: any) => {
				tagMap[tag.tag_id] = {
					tag_name: tag.tag_name,
					parent_id: tag.parent_id,
					filtered: false // Add filtered property, default to false
				};
			});
			tags.value = tagMap;
		}
	} catch (err) {
		console.error("Error fetching tags:", err);
	}
};

// Parse the thread_metadata JSON string in each thread
const parseThreadMetadata = (threads: Thread[]) => {
	return threads.map((thread) => {
		try {
			const parsedMetadata = JSON.parse(thread.thread_metadata) as ThreadMetadata;
			return {
				...thread,
				parsedMetadata,
			};
		} catch (e) {
			return thread;
		}
	});
};

// Format date to a more readable format
const formatDate = (dateString: string) => {
	if (!dateString) return "";
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
};

// Fetch all threads from the /threads endpoint
const fetchThreads = async () => {
	loading.value = true;
	error.value = null;

	try {
		const url = `${baseApiUrl}/threads`;
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Failed to fetch data: ${response.status}`);
		}
		const data: ThreadResponse = await response.json();

		if (data.success && Array.isArray(data.data)) {
			allThreads.value = parseThreadMetadata(data.data);
		} else {
			throw new Error("Invalid data format received");
		}
	} catch (err) {
		error.value = err instanceof Error ? err.message : "An unknown error occurred";
		console.error("Error fetching threads:", err);
	} finally {
		loading.value = false;
	}
};

// Switch between categories
const switchCategory = (category: string) => {
	activeCategory.value = category;
};

// Get tag information by ID
const getTagInfo = (tagId: string) => {
	const tag = tags.value[tagId];

	if (tag) {
		return {
			name: tag.tag_name,
			icon: `/images/tags/${tag.tag_name.toLowerCase().replace("/", "-")}.webp`,
		};
	}

	return {icon: null, name: tagId};
};

// Generate Discord thread URL
const getDiscordThreadUrl = (threadId: string) => {
	return `https://discordapp.com/channels/895516967543390249/${threadId}`;
};

onMounted(async () => {
	await fetchTags();
	fetchThreads();
});
</script>

<template>
	<div class="party-finder">
		<div class="tabs">
			<button
				v-for="(config, category) in channelConfig"
				:key="category"
				:class="{ active: activeCategory === category }"
				@click="switchCategory(category)">
				{{ config.name }}
			</button>
		</div>

		<div class="filter-section" v-if="!loading && categoryTags.length > 0">
			<h3 class="filter-title">Filter by tags:</h3>
			<div class="filter-buttons">
				<button
					v-for="tag in categoryTags"
					:key="tag.id"
					:class="{ active: tag.filtered }"
					@click="toggleTagFilter(tag.id)"
					class="filter-tag">
					<img
						v-if="getTagInfo(tag.id).icon"
						:src="getTagInfo(tag.id).icon"
						class="tag-icon"
						:alt="tag.tag_name" />
					<span>{{ tag.tag_name }}</span>
				</button>
				<button
					v-if="hasActiveFilters"
					class="clear-filters"
					@click="clearFilters">
					Clear Filters
				</button>
			</div>
		</div>

		<div class="content">
			<div v-if="loading" class="loading">Loading threads...</div>

			<div v-else-if="error" class="error">
				{{ error }}
			</div>

			<div v-else-if="displayedThreads.length === 0" class="empty">No threads found.</div>

			<div v-else class="thread-list">
				<a
					v-for="thread in displayedThreads"
					:key="thread.thread_id"
					class="thread-item"
					:href="getDiscordThreadUrl(thread.thread_id)"
					target="_blank"
					rel="noopener noreferrer">
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
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
									fill="currentColor" />
								<path
									d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
									fill="currentColor" />
							</svg>
							<div class="thread-owner-name">{{ thread.owner_nickname || "Unknown" }}</div>
						</div>

						<div v-if="thread.parsedMetadata" class="thread-date">
							Posted: {{ formatDate(thread.parsedMetadata.create_timestamp) }}
						</div>
					</div>

					<div v-if="thread.applied_tags" class="thread-tags">
						<span class="tag" v-for="(tagId, index) in JSON.parse(thread.applied_tags)" :key="index">
							<img
								v-if="getTagInfo(tagId).icon"
								:src="getTagInfo(tagId).icon"
								class="tag-icon"
								:alt="getTagInfo(tagId).name" />
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
	min-height: 100vh;
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
	transition: color 0.2s ease;
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
	border: 2px solid var(--vp-c-divider);
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
	transition: color 0.2s ease;
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
	font-weight: 600;
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

.filter-section {
	margin-bottom: 20px;
	padding: 10px;
	background-color: var(--vp-c-bg-alt);
	border-radius: 8px;
	border: 2px solid var(--vp-c-divider);
}

.filter-title {
	font-size: 16px;
	margin-top: 0;
	margin-bottom: 5px;
	color: var(--vp-c-text-1);
}

.filter-buttons {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.filter-tag {
	display: flex;
	align-items: center;
	padding: 5px 10px;
	font-weight: 500;
	background-color: var(--vp-c-bg-elv);
	border: 1px solid var(--vp-c-divider);
	border-radius: 4px;
	font-size: 15px;
	color: var(--vp-c-text-2);
	cursor: pointer;
	transition: all 0.2s ease;
}

.filter-tag:hover {
	background-color: var(--vp-c-bg-soft);
}

.filter-tag.active {
	background-color: var(--vp-c-brand);
	color: var(--vp-c-text-1);
	border-color: var(--vp-c-text-1);
}

.clear-filters {
	padding: 6px 12px;
	color: var(--vp-c-text-2);
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 14px;
	transition: background-color 0.2s ease;
	font-weight: 500;
}

.clear-filters:hover {
	background-color: var(--vp-c-danger-dark);
}
</style>
