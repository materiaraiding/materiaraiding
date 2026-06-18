<script setup lang="ts">
import { usePartyFinder } from "../hooks/usePartyFinder";

const {
	channelConfig,
	activeCategory,
	sortLatestFirst,
	loading,
	error,
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

function parsedTags(applied: string | null): string[] {
	if (!applied) return [];
	try { return JSON.parse(applied) as string[]; } catch { return []; }
}
</script>

<template>
	<div class="pf">

		<!-- ── Toolbar ──────────────────────────────────────────── -->
		<div class="pf-toolbar">
			<div class="pf-tabs" role="tablist">
				<button
					v-for="(config, category) in channelConfig"
					:key="category"
					role="tab"
					:aria-selected="activeCategory === category"
					class="pf-tab"
					:class="{ 'pf-tab--active': activeCategory === category }"
					@click="switchCategory(category)">
					{{ config.name }}
				</button>
			</div>

			<div class="pf-actions">
				<button class="pf-sort-btn" @click="toggleSortOrder" :title="sortLatestFirst ? 'Switch to oldest first' : 'Switch to newest first'">
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path d="M3 6h18M7 12h10M11 18h2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
					</svg>
					{{ sortLatestFirst ? 'Newest' : 'Oldest' }}
				</button>
				<a
					v-if="!loading"
					:href="`https://discordapp.com/channels/895516967543390249/${channelConfig[activeCategory].parent_id}`"
					target="_blank"
					rel="noopener noreferrer"
					class="pf-create-btn">
					New Post
				</a>
			</div>
		</div>

		<!-- ── Filter chips ─────────────────────────────────────── -->
		<div v-if="!loading && categoryTags.length > 0" class="pf-filters">
			<button
				v-for="tag in categoryTags"
				:key="tag.id"
				class="pf-chip"
				:class="{ 'pf-chip--active': tag.filtered }"
				@click="toggleTagFilter(tag.id)">
				<img
					v-if="getTagInfo(tag.id).icon"
					:src="getTagInfo(tag.id).icon"
					class="pf-chip-icon"
					:alt="tag.tag_name"
					@error="(e) => ((e.target as HTMLImageElement).style.display = 'none')" />
				{{ tag.tag_name }}
			</button>
			<button v-if="hasActiveFilters" class="pf-chip-clear" @click="clearFilters">
				✕ Clear
			</button>
		</div>

		<!-- ── States ───────────────────────────────────────────── -->
		<div v-if="loading" class="pf-state">Loading threads…</div>
		<div v-else-if="error" class="pf-state pf-state--error">{{ error }}</div>
		<div v-else-if="displayedThreads.length === 0" class="pf-state">No threads found.</div>

		<!-- ── Thread grid ───────────────────────────────────────── -->
		<div v-else class="pf-grid">
			<a
				v-for="thread in displayedThreads"
				:key="thread.thread_id"
				class="pf-card"
				:href="getDiscordThreadUrl(thread.thread_id)"
				target="_blank"
				rel="noopener noreferrer">

				<p class="pf-card-title">{{ thread.thread_name }}</p>

				<div class="pf-card-meta">
					<span class="pf-meta-item">
						<svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/>
							<path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
						</svg>
						{{ thread.owner_nickname || 'Unknown' }}
					</span>
					<span v-if="thread.parsedMetadata" class="pf-meta-item pf-meta-date">
						{{ formatDate(thread.parsedMetadata.create_timestamp) }}
					</span>
				</div>

				<div v-if="parsedTags(thread.applied_tags).length > 0" class="pf-card-tags">
					<span
						v-for="tagId in parsedTags(thread.applied_tags)"
						:key="tagId"
						class="pf-tag">
						<img
							v-if="getTagInfo(tagId).icon"
							:src="getTagInfo(tagId).icon"
							class="pf-tag-icon"
							:alt="getTagInfo(tagId).name"
							@error="(e) => ((e.target as HTMLImageElement).style.display = 'none')" />
						{{ getTagInfo(tagId).name }}
					</span>
				</div>

			</a>
		</div>

	</div>
</template>

<style scoped>
/* ── Shell ───────────────────────────────────────────────────────── */
.pf {
	display: flex;
	flex-direction: column;
	gap: 0;
	min-height: 100vh;
}

/* ── Toolbar ─────────────────────────────────────────────────────── */
.pf-toolbar {
	display: flex;
	align-items: stretch;
	justify-content: space-between;
	gap: 1rem;
	border-bottom: 1px solid var(--vp-c-divider);
	margin-bottom: 1.25rem;
}

/* Tabs */
.pf-tabs {
	display: flex;
	gap: 0;
}

.pf-tab {
	padding: 0.65rem 1.1rem;
	background: transparent;
	border: none;
	border-bottom: 2px solid transparent;
	margin-bottom: -1px;
	cursor: pointer;
	font-size: 0.9rem;
	font-weight: 500;
	color: var(--vp-c-text-2);
	transition: color 0.15s ease, border-color 0.15s ease;
	white-space: nowrap;
}

.pf-tab:hover {
	color: var(--vp-c-text-1);
}

.pf-tab--active {
	color: var(--vp-c-brand-1);
	border-bottom-color: var(--vp-c-brand-1);
}

/* Actions */
.pf-actions {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding-bottom: 0.5rem;
}

.pf-sort-btn {
	display: inline-flex;
	align-items: center;
	gap: 0.35rem;
	padding: 0.35rem 0.75rem;
	font-size: 0.8rem;
	font-weight: 500;
	color: var(--vp-c-text-2);
	background: transparent;
	border: 1px solid var(--vp-c-divider);
	border-radius: 6px;
	cursor: pointer;
	transition: color 0.15s ease, border-color 0.15s ease, background 0.15s ease;
}

.pf-sort-btn:hover {
	color: var(--vp-c-text-1);
	border-color: var(--vp-c-text-3);
	background: var(--vp-c-bg-alt);
}

.pf-create-btn {
	display: inline-flex;
	align-items: center;
	padding: 0.35rem 0.85rem;
	font-size: 0.8rem;
	font-weight: 600;
	color: #fff;
	background: var(--vp-c-brand-1);
	border-radius: 6px;
	text-decoration: none;
	transition: background 0.15s ease;
}

.pf-create-btn:hover {
	background: var(--vp-c-brand-2);
	color: #fff;
}

/* ── Filter chips ────────────────────────────────────────────────── */
.pf-filters {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-bottom: 1.25rem;
}

.pf-chip {
	display: inline-flex;
	align-items: center;
	gap: 0.35rem;
	padding: 0.3rem 0.7rem;
	font-size: 0.82rem;
	font-weight: 500;
	color: var(--vp-c-text-2);
	background: var(--vp-c-bg-alt);
	border: 1px solid var(--vp-c-divider);
	border-radius: 999px;
	cursor: pointer;
	transition: color 0.15s ease, background 0.15s ease, border-color 0.15s ease;
}

.pf-chip:hover {
	color: var(--vp-c-text-1);
	border-color: var(--vp-c-text-3);
}

.pf-chip--active {
	color: #fff;
	background: var(--vp-c-brand-1);
	border-color: var(--vp-c-brand-1);
}

.pf-chip--active:hover {
	color: #fff;
	background: var(--vp-c-brand-2);
	border-color: var(--vp-c-brand-2);
}

.pf-chip-icon {
	width: 16px;
	height: 16px;
	border-radius: 2px;
}

.pf-chip-clear {
	display: inline-flex;
	align-items: center;
	padding: 0.3rem 0.7rem;
	font-size: 0.8rem;
	font-weight: 500;
	color: var(--vp-c-text-3);
	background: transparent;
	border: 1px solid transparent;
	border-radius: 999px;
	cursor: pointer;
	transition: color 0.15s ease, background 0.15s ease;
}

.pf-chip-clear:hover {
	color: var(--vp-c-text-2);
	background: var(--vp-c-bg-alt);
}

/* ── States ──────────────────────────────────────────────────────── */
.pf-state {
	padding: 3rem 1rem;
	text-align: center;
	color: var(--vp-c-text-3);
	font-size: 0.9rem;
}

.pf-state--error {
	color: var(--vp-c-danger-1, #e53e3e);
}

/* ── Thread grid ─────────────────────────────────────────────────── */
.pf-grid {
	display: flex;
	flex-wrap: wrap;
	gap: 0.875rem;
}

/* ── Thread card ─────────────────────────────────────────────────── */
.pf-card {
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	padding: 1rem 1.1rem;
	background: var(--vp-c-bg-alt);
	border: 1px solid var(--vp-c-divider);
	border-radius: 8px;
	text-decoration: none;
	transition: border-color 0.15s ease, box-shadow 0.15s ease;
	flex-grow: 1;
	min-width: 220px;
}

.pf-card:hover {
	border-color: var(--vp-c-brand-1);
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.pf-card-title {
	margin: 0;
	font-size: 0.95rem;
	font-weight: 600;
	color: var(--vp-c-text-1);
	line-height: 1.4;
	transition: color 0.15s ease;
}

.pf-card:hover .pf-card-title {
	color: var(--vp-c-brand-1);
}

/* Meta row */
.pf-card-meta {
	display: flex;
	align-items: center;
	gap: 0.75rem;
	flex-wrap: wrap;
}

.pf-meta-item {
	display: inline-flex;
	align-items: center;
	gap: 0.3rem;
	font-size: 0.78rem;
	color: var(--vp-c-text-3);
}

.pf-meta-item svg {
	flex-shrink: 0;
	opacity: 0.7;
}

.pf-meta-date {
	margin-left: auto;
}

/* Tags */
.pf-card-tags {
	display: flex;
	flex-wrap: wrap;
	gap: 0.35rem;
	margin-top: auto;
	padding-top: 0.25rem;
}

.pf-tag {
	display: inline-flex;
	align-items: center;
	gap: 0.3rem;
	padding: 0.2rem 0.5rem;
	font-size: 0.75rem;
	font-weight: 500;
	color: var(--vp-c-text-2);
	background: var(--vp-c-bg-elv);
	border-radius: 4px;
}

.pf-tag-icon {
	width: 14px;
	height: 14px;
	border-radius: 2px;
}

/* ── Responsive ──────────────────────────────────────────────────── */
@media (max-width: 540px) {
	.pf-tab {
		padding: 0.65rem 0.75rem;
		font-size: 0.82rem;
	}

	.pf-card {
		min-width: 100%;
	}

	.pf-meta-date {
		margin-left: 0;
	}
}
</style>
