<template>
  <div id="basic">
    <navigator current="frontend"></navigator>
    <main-container></main-container>
  </div>
</template>

<script>
import navigator from '../../components/navigator'
import mainContainer from '../../components/main-container'
export default {
  name: 'blog',
  components: { navigator, mainContainer },
  data () {
    return {
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
  }
}
</script>
