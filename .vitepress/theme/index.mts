import type { Theme } from 'vitepress'

import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import './index.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (inBrowser) {
      router.onAfterRouteChange = async () => {
        const mermaid = (await import('mermaid')).default
        mermaid.initialize({ startOnLoad: false })
        await mermaid.run({ querySelector: '.mermaid' })
      }
    }
  },
} satisfies Theme
