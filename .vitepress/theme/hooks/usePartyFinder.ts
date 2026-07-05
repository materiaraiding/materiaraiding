import { ref, computed, onMounted } from "vue";

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
		parent_id: "1147471873463033978"
	},
	lfg: {
		name: "Looking For Group",
		parent_id: "1260078528125468743"
	},
	lfs: {
		name: "Looking For Sub",
		parent_id: "1324237133212291093"
	},
};

// Thread names to ignore
const ignoredThreadNames = [
  'How to use this channel!',
];

const baseApiUrl = "https://discord-thread-tracker-api.ingramscloud.workers.dev";

export function usePartyFinder() {
	// Store all threads in one array
	const allThreads = ref<Thread[]>([]);

	// Active category
	const activeCategory = ref('lfm'); // Default category

	// Sort order - true for latest first, false for oldest first
	const sortLatestFirst = ref(true);

	const loading = ref(true);
	const error = ref<string | null>(null);
	const tags = ref<{[key: string]: Tag}>({});

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

	  // Filter threads based on applied tags if filters are active
	  let filteredThreads = threadsInCategory;
	  if (hasActiveFilters.value) {
	    filteredThreads = threadsInCategory.filter(thread => {
	      if (!thread.applied_tags) return false;

	      try {
	        const threadTags = JSON.parse(thread.applied_tags) as string[];
	        // Only show threads that have at least one of the filtered tags
	        return threadTags.some(tagId => tags.value[tagId]?.filtered);
	      } catch (e) {
	        return false;
	      }
	    });
	  }

	  // Sort by creation timestamp
	  return filteredThreads.sort((a, b) => {
	    const dateA = a.parsedMetadata?.create_timestamp ? new Date(a.parsedMetadata.create_timestamp).getTime() : 0;
	    const dateB = b.parsedMetadata?.create_timestamp ? new Date(b.parsedMetadata.create_timestamp).getTime() : 0;

	    // Sort by latest (newest) first or oldest first based on the toggle
	    return sortLatestFirst.value ? dateB - dateA : dateA - dateB;
	  });
	});

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

	// Toggle sort order between latest and oldest first
	const toggleSortOrder = () => {
		sortLatestFirst.value = !sortLatestFirst.value;
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

	return {
		channelConfig,
		activeCategory,
		sortLatestFirst,
		loading,
		error,
		tags,
		hasActiveFilters,
		categoryTags,
		displayedThreads,
		toggleTagFilter,
		clearFilters,
		switchCategory,
		toggleSortOrder,
		getTagInfo,
		getDiscordThreadUrl,
		formatDate,
	};
}
