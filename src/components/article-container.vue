<template>
  <div :class="['article-container', full ? 'full-width' : '']">
    <p class="title">{{article.name}}</p>
    <p class="info">
      <span>作者：{{article.author}}</span><span>时间：{{article.time}}</span>
    </p>
    <div class="article-content" v-html="article.content"></div>
  </div>
</template>
<script>
export default {
  name: 'article-container',
  props: ['fullWidth', 'articleId'],
  data () {
    return {
      full: true,
      article: {}
    }
  },
  created () {
    this.article = {
      id: 1,
      name: 'span标签的运用之图标字体',
      author: 'vary',
      time: '2018-3-8 16:16:20',
      description: 'span标签的运用之图标字体span标签的运用之图标字体span标签的运用之图标字体span标签的运用之图标字体span标签的运用之图标字体span标签的运用之图标字体span标签的运用之图标字体span标签的运用之图标字体',
      content: '<div>哈哈哈span标签的运用之图标字体span标签的运用之图标字体span标签的运用之图标字体span标签的运用之图标字体span标签的运用之图标字体span标签的运用之图标字体span标签的运用之图标字体span标签的运用之图标字体</div>'
    }
  },
  mounted () {
    if (window.innerWidth < 768) {
      this.full = true
    } else {
      this.full = this.fullWidth
    }
  },
  watch: {
    fullWidth (newValue) {
      if (window.innerWidth < 768) {
        newValue = true
      }
      this.full = newValue
    }
  }
}
</script>

<style lang="less">
@import '../assets/my.less';
</style>
<style lang="less" scoped>
@import '../assets/color.less';
.article-container {
  position: fixed;
  top: 52px;
  bottom: 0;
  left: 300px;
  padding: 20px 40px;
  width: calc(~"100% - 300px");
  z-index: 5;
  transition: width .5s, left, .5s;
  &.full-width {
    left: 0;
    width: 100%;
  }
  .title {
    font-size: 40px;
    font-weight: bold;
  }
  .info {
    font-size: 12px;
    span {
      display: inline-block;
      margin-right: 40px;
      color: #888;
    }
  }
}
</style>
