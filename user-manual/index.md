# bǃgǃrǃ ユーザーマニュアル

<script setup>
import { useData } from 'vitepress'

const { theme } = useData()
</script>

> [!CAUTION]
> <img src="/bigiri-chan-thumbnail.png" align="right" width="80" height="80" />
> ユーザーマニュアルはbǃgǃrǃ([https://bigiri.oogiri.org](https://bigiri.oogiri.org))の**更新情報**を入力データとして、記名されている各**AI**が生成しました。
> 生成内容は人間によって校閲されておらず嘘・大げさ・まぎらわしい記述を含んでいる場合があります。

<ul>
  <li v-for="item of theme.sidebar['/user-manual/'][0].items" v-bind:key="item.link">
    <a v-bind:href="item.link">{{ item.text }}</a>
  </li>
</ul>
