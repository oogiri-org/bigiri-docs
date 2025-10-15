import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'bǃgǃrǃ Docs',
  description: 'Documents of bǃgǃrǃ For Beautiful Oogiri Life',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Documents',
        items: [
          { text: 'bǃgǃrǃ ユーザーマニュアル (by Anthropic Claude)', link: '/user-manual/user-manual-by-claude' },
          { text: 'bǃgǃrǃ ユーザーマニュアル (by OpenAI Codex with GPT-5-Codex)', link: '/user-manual/user-manual-by-gpt-5' },
          { text: 'bǃgǃrǃ ユーザーマニュアル (by GitHub Copilot with Claude Sonnet 4.5)', link: '/user-manual/user-manual-by-copilot' }, 
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
