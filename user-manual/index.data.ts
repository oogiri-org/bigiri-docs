import { createContentLoader } from 'vitepress'

export default createContentLoader('user-manual/[^_]*.md', {
  transform(raw) {
    return raw
      .filter(({ url }) => url != '/user-manual/')
      .sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date))
  }
})
