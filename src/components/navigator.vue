<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">导航开关</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">NanShan</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <!-- <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li> -->
          <li :class="current === 'backend' ? 'active' : ''"><a href="/blog/backend">后端</a></li>
          <li :class="current === 'frontend' ? 'active' : ''" class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">前端 <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="/blog/frontend/basic">HTML+CSS+JavaScript基础</a></li>
              <li><a href="/blog/frontend/detail">细节梳理</a></li>
              <li><a href="/blog/frontend/framework">框架相关</a></li>
            </ul>
          </li>
          <li :class="current === 'life' ? 'active' : ''"><a href="/blog/life">日常生活</a></li>
          <li :class="current === 'culart' ? 'active' : ''"><a href="/blog/culart">文化艺术</a></li>
          <!-- <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li> -->
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown" v-if="user">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{user.nickname}} <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">消息</a></li>
              <li><a href="#">我的发言</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">个人资料</a></li>
              <li><a href="#">账号安全</a></li>
            </ul>
          </li>
          <li v-else><a href="#">登录</a></li>
        </ul>
        <form class="navbar-form navbar-right">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="搜索">
          </div>
          <button type="submit" class="btn btn-default">搜索</button>
        </form>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
export default {
  name: 'navigator',
  props: ['current'],
  data () {
    return {
      user: null
    }
  },
  created () {
    this.user = {
      nickname: 'vary'
    }
  }
}
</script>
<style lang="less">
@import '../assets/my.less';
</style>
<style scoped lang="less">
@import '../assets/color.less';
</style>
