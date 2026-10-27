import type { Theme } from 'vitepress'

import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import UserManualList from './UserManualList.vue'
import './index.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component('UserManualList', UserManualList)
    if (inBrowser) {
      router.onAfterRouteChange = async () => {
        const mermaid = (await import('mermaid')).default
        mermaid.initialize({ startOnLoad: false })
        await mermaid.run({ querySelector: '.mermaid' })
      }
    }
  },
} satisfies Theme
