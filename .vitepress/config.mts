import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'bǃgǃrǃ Docs',
  description: 'Documents of bǃgǃrǃ For Beautiful Oogiri Life',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    /*
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
    */
    logo: 'https://github.com/googlefonts/noto-emoji/blob/main/png/512/emoji_u1f984.png?raw=true',
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
