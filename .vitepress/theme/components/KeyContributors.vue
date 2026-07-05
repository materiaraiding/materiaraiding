<template>
  <section class="gc-section">
    <div class="gc-inner">
      <div class="gc-heading">
        <span class="gc-rule-line" aria-hidden="true" />
        <h2 class="gc-title">Key Contributors</h2>
        <span class="gc-rule-line" aria-hidden="true" />
      </div>

      <div class="gc-credits">
        <div
          v-for="block in credits"
          :key="block.role"
          class="gc-block"
        >
          <p class="gc-role">{{ block.role }}</p>
          <div class="gc-names">
            <span
              v-for="(person, i) in block.members"
              :key="person.name"
              class="gc-name-entry"
            >
              <template v-if="person.href">
                <a :href="person.href" target="_blank" rel="noopener noreferrer" class="gc-name gc-name--link">
                  {{ person.name }}
                </a>
              </template>
              <template v-else>
                <span class="gc-name">{{ person.name }}</span>
              </template>
              <span v-if="i < block.members.length - 1" class="gc-separator" aria-hidden="true">·</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const credits = [
  {
    role: 'Community Servers',
    members: [
      { name: 'Materia Raiding', href: 'https://discord.gg/EySn5dRj65' },
      { name: 'Materia Ultimate Raiding', href: 'https://discord.gg/ArZz3b8PZV' },
    ],
  },
  {
    role: 'Creator & Lead Developer',
    members: [{ name: 'Em' }],
  },
  {
    role: 'Developer',
    members: [{ name: 'Geel' }],
  },
  {
    role: 'Writing',
    members: [
      { name: 'Juno' },
      { name: 'Noz' },
      { name: 'Pod' },
    ],
  },
  {
    role: 'Editing',
    members: [{ name: 'Lumi' }],
  },
  {
    role: 'Content Creation',
    members: [
      { name: 'Kobe' },
      { name: 'Ikuya' },
      { name: 'Pipiro' },
    ],
  },
]
</script>

<style scoped>
/* ─── Section shell ──────────────────────────────────────────────── */
.gc-section {
  padding: 5em 1.5em;
  text-align: center;
}

.gc-inner {
  max-width: 640px;
  margin-inline: auto;
}

/* ─── Heading with side rules ────────────────────────────────────── */
.gc-heading {
  display: flex;
  align-items: center;
  gap: 1.25em;
  margin-bottom: 3.5em;
}

.gc-rule-line {
  flex: 1;
  height: 1px;
  background: var(--vp-c-divider);
}

.gc-title {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
  margin: 0;
  white-space: nowrap;
  /* Override VitePress h2 chrome */
  border-top: none;
  padding-top: 0;
}

/* ─── Credits column ─────────────────────────────────────────────── */
.gc-credits {
  display: flex;
  flex-direction: column;
  gap: 2.5em;
}

/* ─── One credit block ───────────────────────────────────────────── */
.gc-block {
  display: flex;
  flex-direction: column;
  gap: 0.45em;
}

.gc-role {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  margin: 0;
  opacity: 0.9;
}

/* ─── Name row ───────────────────────────────────────────────────── */
.gc-names {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.1em 0.5em;
  line-height: 1.5;
}

.gc-name-entry {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
}

.gc-name {
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  letter-spacing: 0.01em;
  text-decoration: none;
  transition: color 0.18s ease;
}

.gc-name--link:hover {
  color: var(--vp-c-brand-1);
}

.gc-separator {
  color: var(--vp-c-text-3);
  font-weight: 300;
  font-size: 0.9em;
}
</style>
