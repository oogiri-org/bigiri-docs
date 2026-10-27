<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { data } from './user-manual.data'

const { lang, localeIndex } = useData()

const prefix = computed(() => localeIndex.value === 'root' ? '/user-manual/' : `/${localeIndex.value}/user-manual/`)
const posts = computed(() => data.filter((post) => post.url.startsWith(prefix.value)))

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(lang.value, { dateStyle: 'long', timeZone: 'UTC' })
}
</script>

<template>
  <ul class="post-list">
    <li v-for="post of posts" :key="post.url" class="post-card">
      <a :href="withBase(post.url)" class="post-card-link">
        <div class="post-card-body">
          <time :datetime="post.date" class="post-card-date">{{ formatDate(post.date) }}</time>
          <h2 class="post-card-title">{{ post.title }} by {{ post.author }}</h2>
          <p class="post-card-excerpt">{{ post.excerpt }}</p>
        </div>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
}

.post-card {
  margin: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  overflow: hidden;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.post-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: var(--vp-shadow-3);
}

.post-card-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.post-card-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px 20px 20px;
}

.post-card-date {
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.post-card-title {
  margin: 4px 0 8px;
  border-top: none;
  padding-top: 0;
  color: var(--vp-c-text-1);
  font-size: 18px;
  line-height: 1.4;
}

.post-card-excerpt {
  display: -webkit-box;
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.6;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
