import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'bǃgǃrǃ Docs',
  description: 'Documents of bǃgǃrǃ For Beautiful Oogiri Life',
  lastUpdated: true,
  lang: 'ja-JP',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: {
      '/user-manual/': [{
        text: 'bǃgǃrǃ ユーザーマニュアル',
        link: '/user-manual/',
        items: generateSidebar(path.resolve(__dirname, '../user-manual'), '/user-manual/')
      }]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/oogiri-org/bigiri-docs' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/bigiri.oogiri.org' },
      { icon: 'twitter', link: 'https://twitter.com/bigirichan' },
    ],
    logo: { src: 'https://github.com/googlefonts/noto-emoji/blob/main/png/512/emoji_u1f984.png?raw=true', alt: 'icon' },
    lastUpdated: {
      formatOptions: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    },
    outlineTitle: '目次',
    returnToTopLabel: '先頭に戻る',
  },
  /*
  base: '/bigiri-docs/',
  */
  head: [
    ['link', { rel: 'shortcut icon', href: 'https://github.com/googlefonts/noto-emoji/blob/main/png/512/emoji_u1f984.png?raw=true' }],
    ['link', { rel: 'apple-touch-icon', href: 'https://github.com/googlefonts/noto-emoji/blob/main/png/512/emoji_u1f984.png?raw=true' }],
    ['link', { rel: 'icon', href: 'https://github.com/googlefonts/noto-emoji/blob/main/png/512/emoji_u1f984.png?raw=true' }],
  ],
  markdown: {
    anchor: {
      // slugify function to remove punctuation, replace spaces with hyphens and convert to lowercase
      slugify: (s) => s.trim().replace(/\p{P}/gu, '').replace(/\s+/g, '-').toLowerCase(),
    }
  },
})

function generateSidebar(dirPath: string, basePath: string) {
  const files = fs.readdirSync(dirPath)
  const items = [] as { text: string; link: string; date: Date }[]

  files.forEach(file => {
    // _で始まらないMarkdownファイルで index.md 以外を対象にする
    if (file.startsWith('_') || !file.endsWith('.md') || file == 'index.md') {
      return
    }

    const fullPath = path.join(dirPath, file)
    const fileContent = fs.readFileSync(fullPath, 'utf-8')

    // gray-matterでフロントマターと本文をパース
    const { data } = matter(fileContent)

    // 拡張子を除いたファイル名をリンク用に使用
    const fileNameWithoutExt = path.basename(file, '.md')

    // フロントマターに title または date がない場合のフォールバック（デフォルト値）
    const text = `${data.title ?? fileNameWithoutExt} by ${data.author ?? 'Unknown Author'}`
    const date = data.date ? new Date(data.date) : new Date(0) // 日付がないものは最古扱い

    items.push({
      text,
      link: `${basePath}${fileNameWithoutExt}`,
      date
    })
  })
  
  return items
    .sort((a, b) => a.date.getTime() - b.date.getTime()) // date（日付）でソート：古い順（昇順）
    .map(({ text, link }) => ({ text, link })) // VitePressが求める形式（textとlinkのみ）に整形
    .reverse() // 逆順にして新しい順（降順）にする
}
