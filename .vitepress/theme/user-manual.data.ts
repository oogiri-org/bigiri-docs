import { createContentLoader } from 'vitepress'

export interface UserManual {
  title: string
  url: string
  date: string
  excerpt: string
  author: string
}

declare const data: UserManual[]
export { data }

const EXCERPT_LENGTH = 160

// Returns the first paragraph of the body (skipping headings, images, lists, etc.) as plain text
function makeExcerpt(src: string) {
  const lines = [] as string[]
  // src from includeSrc still contains the frontmatter
  for (const line of src.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').split('\n')) {
    const trimmed = line.trim()
    if (trimmed === '') {
      if (lines.length > 0) {
        break
      }
      continue
    }
    if (/^([#!*\-+>|`]|\d+\.)/.test(trimmed) || /^https?:\/\//.test(trimmed)) {
      if (lines.length > 0) {
        break
      }
      continue
    }
    lines.push(trimmed)
  }

  const text = lines
    .join(' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // [text](url) -> text
    .replace(/[*_`]/g, '')
  return text.length > EXCERPT_LENGTH ? `${text.slice(0, EXCERPT_LENGTH).trimEnd()}…` : text
}

export default createContentLoader(['user-manual/*.md'], {
  includeSrc: true,
  render: false,
  excerpt: false,
  transform(raw) {
    return raw
      // index.md is the list page itself
      .filter(({ url }) => !/\/user-manual\/$/.test(url))
      .map(({ url, frontmatter, src }) => ({
        title: `${frontmatter.title ?? url}`,
        url,
        // a post without a date in its frontmatter is treated as the oldest
        date: new Date(frontmatter.date ?? 0).toISOString().slice(0, 10),
        excerpt: makeExcerpt(src ?? ''),
        author: `${frontmatter.author ?? 'Unknown'}`,
      }))
      // newest first; posts with the same date go by URL descending (same order as generateSidebar)
      .sort((a, b) => b.date.localeCompare(a.date) || b.url.localeCompare(a.url))
  },
})
