<template>
  <div class="main-conitaner">
    <left-sidebar title="HTML+CSS+JavaScript基础" :data="list" v-on:foldChange="changeFoldState"></left-sidebar>
    <article-container :fullWidth="sidebarFoldState"></article-container>
  </div>
</template>
<script>
import leftSidebar from './left-sidebar'
import articleContainer from './article-container'
export default {
  name: 'main-container',
  components: { leftSidebar, articleContainer },
  data () {
    return {
      sidebarFoldState: false,
      list: [
        {
          id: 12,
          parentId: 0,
          name: 'html',
          text: 'HTML基础',
          seriesState: 'Y',
          state: 'Y'
        },
        {
          id: 23,
          parentId: 12,
          name: 'changjianhangnei',
          text: '常见行内元素',
          seriesState: 'Y',
          state: 'Y'
        },
        {
          id: 33,
          parentId: 23,
          name: 'span',
          text: 'span标签',
          seriesState: 'Y',
          state: 'Y'
        },
        {
          id: 34,
          parentId: 23,
          name: 'a',
          text: 'a标签',
          seriesState: 'Y',
          state: 'Y'
        },
        {
          id: 13,
          parentId: 0,
          name: 'css',
          text: 'CSS基础',
          seriesState: 'Y',
          state: 'Y'
        }
      ]
    }
  },
  methods: {
    changeFoldState (state) {
      this.sidebarFoldState = state
    }
  }
}
</script>
<style lang="less">
@import '../assets/my.less';
</style>
<style lang="less" scoped>
@import '../assets/color.less';

</style>
