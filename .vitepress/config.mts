import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'bǃgǃrǃ Docs',
  description: 'Documents of bǃgǃrǃ For Beautiful Oogiri Life',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Documents',
        items: [
          { text: 'bǃgǃrǃ ユーザーマニュアル (by Anthropic Claude)', link: '/user-manual' },
          { text: 'bǃgǃrǃ ユーザーマニュアル (by OpenAI GPT-5)', link: '/user-manual-by-gpt-5' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/oogiri-org/bigiri-docs' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/bigiri.oogiri.org' },
      { icon: 'twitter', link: 'https://twitter.com/bigirichan' },
    ],
    logo: { src: 'https://github.com/googlefonts/noto-emoji/blob/main/png/512/emoji_u1f984.png?raw=true', alt: 'icon' },
  },
  /*
  base: '/bigiri-docs/',
  */
  head: [
    ['link', { rel: 'shortcut icon', href: 'https://github.com/googlefonts/noto-emoji/blob/main/png/512/emoji_u1f984.png?raw=true' }],
    ['link', { rel: 'apple-touch-icon', href: 'https://github.com/googlefonts/noto-emoji/blob/main/png/512/emoji_u1f984.png?raw=true' }],
    ['link', { rel: 'icon', href: 'https://github.com/googlefonts/noto-emoji/blob/main/png/512/emoji_u1f984.png?raw=true' }],
  ],
})
