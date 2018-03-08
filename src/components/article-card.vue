<template>
  <div class="article-card col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <router-link :to="`/article/${id}`">
      <span class="title">{{title}}</span>
      <span class="description">{{description}}</span>
      <span class="info">
        <span class="glyphicon glyphicon-eye-open"></span>&nbsp;{{read}}
        <span class="glyphicon glyphicon-edit"></span>&nbsp;{{comment}}
        <span class="glyphicon glyphicon-heart-empty"></span>&nbsp;{{collect}}
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'article-card',
  props: ['id', 'title', 'description', 'read', 'comment', 'collect']
}
</script>
<style lang="less">
@import '../assets/my.less';
</style>
<style scoped lang="less">
@import '../assets/color.less';
.article-card {
  padding: 15px;
  a {
    display: inline-block;
    cursor: pointer;
    padding: 15px;
    box-shadow: 2px 2px 3px #d8d8d8;
    border: 1px solid #d8d8d8;
    &:hover {
      border: 1px solid @bgColor;
      box-shadow: 2px 2px 1px @bgColor;
    }
  }
  .title {
    display: inline-block;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
  }
  .description {
    display: inline-block;
    margin-top: 15px;
    width: 100%;
    height: 60px;
    overflow: hidden;
  }
  .info {
    display: inline-block;
    margin-top: 15px;
    width: 100%;
    text-align: right;
    span {
      margin-left: 15px;
    }
  }
}
</style>
