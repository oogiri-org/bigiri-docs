# bǃgǃrǃ ユーザーマニュアル

<script setup>
import { data } from './index.data.ts'
</script>

> [!CAUTION]
> <img src="/bigiri-chan-thumbnail.png" align="right" width="80" height="80" />
> ユーザーマニュアルはbǃgǃrǃ([https://bigiri.oogiri.org](https://bigiri.oogiri.org))の**更新情報**を入力データとして、記名されている各**AI**が生成しました。
> 生成内容は人間によって校閲されておらず嘘・大げさ・まぎらわしい記述を含んでいる場合があります。

<ul>
  <li v-for="post of data">
    <a v-bind:href="post.url">{{ post.frontmatter.title }} by {{ post.frontmatter.author }}</a> [{{ new Date(post.frontmatter.date).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }) }}]
  </li>
</ul>
