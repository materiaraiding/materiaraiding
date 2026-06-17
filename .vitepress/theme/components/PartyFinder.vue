<script setup lang="ts">
import { usePartyFinder } from "../hooks/usePartyFinder";

const {
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
} = usePartyFinder();
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
			<div class="filter-header">
				<h3 class="filter-title">Filter by tags:</h3>
				<div class="filter-controls">
					<button
						class="sort-toggle"
						:class="{ active: sortLatestFirst }"
						@click="toggleSortOrder">
						Sort: {{ sortLatestFirst ? 'Latest First' : 'Oldest First' }}
					</button>
					<a
						v-bind:href="`https://discordapp.com/channels/895516967543390249/${channelConfig[activeCategory].parent_id}`"
						target="_blank"
						rel="noopener noreferrer"
						class="create-post-button">
						Create New Post
					</a>
				</div>
			</div>
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
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	min-height: 100vh;
	gap: 15px;
}

.tabs {
	display: flex;
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
	flex-direction: row;
	flex-wrap: wrap;
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
	flex-grow: 1;
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
	margin-bottom: 6px;
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
	margin-top: 6px;
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

.filter-section {
	padding: 10px;
	background-color: var(--vp-c-bg-alt);
	border-radius: 8px;
	border: 2px solid var(--vp-c-divider);
}

.filter-header {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	margin-bottom: 10px;
}

.filter-title {
	font-size: 14px;
	margin-top: 0;
	margin-bottom: 5px;
	color: var(--vp-c-text-2);
}

.sort-toggle {
	padding: 6px 12px;
	color: var(--vp-c-text-2);
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 14px;
	transition: background-color 0.2s ease;
	font-weight: 500;
	background-color: transparent;
}

.sort-toggle:hover {
	background-color: var(--vp-c-bg-soft);
}

.filter-controls {
	display: flex;
	gap: 10px;
	align-items: center;
}

.create-post-button {
	padding: 6px 12px;
	color: var(--vp-c-text-1);
	background-color: var(--vp-c-brand);
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 14px;
	transition: background-color 0.2s ease;
	font-weight: 500;
	text-decoration: none;
	text-align: center;
}

.create-post-button:hover {
	color: var(--vp-c-text-1);
	background-color: var(--vp-c-brand-3);
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
}

.clear-filters {
	padding: 0px 12px;
	color: var(--vp-c-text-2);
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 14px;
	transition: background-color 0.2s ease;
	font-weight: 500;
}

.clear-filters:hover {
	background-color: var(--vp-c-bg-soft);
}
</style>
