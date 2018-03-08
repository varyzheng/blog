<template>
  <div class="left-sidebar-container">
    <div :class="['left-sidebar', fold ? 'fold' : 'unfold']">
      <div class="title">{{title}}</div>
      <ul v-for="node in list" :key="node.id">
        <li :class="[node.children.length ? 'has-children' : '', node.id === level1 ? 'active' : '']">
          <span class="level-1" @click="changeShowState(node.id, 'level1')">{{node.text}}</span>
          <ul v-if="node.children.length" v-for="node2 in node.children" :key="node2.id">
            <li :class="[node2.children.length ? 'has-children' : '', node2.id === level2 ? 'active' : '']">
              <span class="level-2" @click="changeShowState(node2.id, 'level2')">{{node2.text}}</span>
              <ul v-if="node2.children.length">
                <li v-for="node3 in node2.children" :key="node3.id" @click="chooseSeries(node.id, node2.id, node3.id)" :class="node3.id === level3 ? 'choose' : ''">
                  <span class="level-3">{{node3.text}}</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div v-if="fold" class="fold-button unfold" @click="setFold(false)"><span class="glyphicon glyphicon-menu-right"></span></div>
    <div v-else class="fold-button fold" @click="setFold(true)"><span class="glyphicon glyphicon-menu-left"></span></div>
  </div>
</template>

<script>
import transfer from '../util/TransferData'

export default {
  name: 'left-sidebar',
  props: ['title', 'data'],
  data () {
    return {
      fold: true,
      level1: 0,
      level2: 0,
      level3: 0,
      list: []
    }
  },
  created () {
    this.list = transfer.transListToTree(this.data)
    let params = this.$route.params
    this.level1 = parseInt(params.level1)
    this.level2 = parseInt(params.level2)
    this.level3 = parseInt(params.level3)
  },
  mounted () {
    if (window.innerWidth >= 768) {
      this.fold = false
    }
  },
  methods: {
    setFold (value) {
      this.fold = value
      this.$emit('foldChange', value)
    },
    changeShowState (id, level, event) {
      if (id === this[level]) {
        this[level] = 0
      } else {
        this[level] = id
      }
      this.level3 = 0
    },
    chooseSeries (level1, level2, level3) {
      this.level3 = level3
      console.log(level1, level2, level3)
    }
  }
}
</script>
<style lang="less">
@import '../assets/my.less';
</style>
<style scoped lang="less">
@import '../assets/color.less';
@media(max-width: 768px) {
  .fold-button {
    top: 262px;
  }
}
.left-sidebar-container {
  .left-sidebar {
    background-color: @sidebarColor;
    position: fixed;
    top: 52px;
    bottom: 0;
    left: 0;
    padding: 20px 0;
    overflow: hidden;
    transition: width .5s;
    white-space: nowrap;
    text-overflow: ellipsis;
    z-index: 10;
    &.unfold {
      width: 300px;
    }
    &.fold {
      width: 0;
    }
    .title {
      padding: 0 10px;
      font-size: 20px;
      font-weight: bold;
      color: @navFontColor;
      margin-bottom: 20px;
    }
    & ul {
      padding-left: 0;
      &>li {
        position: relative;
        color: @navFontColor;
        font-size: 14px;
        line-height: 45px;
        max-height: 45px;
        overflow: hidden;
        cursor: pointer;
        &.choose {
          background-color: @bgColor;
        }
        & span {
          display: inline-block;
          width: 100%;
          padding-left: 40px;
          color: @navFontColor;
          &:hover{
            background-color: @bgColor;
          }
          &.level-2 {
            padding-left: 70px;
          }
          &.level-3 {
            padding-left: 100px;
          }
        }
        &.active {
          max-height: 2000px;
          transition: max-height 3s;
        }
        &.has-children:after {
          content: '';
          width: 10px;
          height: 10px;
          border: 5px solid transparent;
          border-top-color: #fff;
          position: absolute;
          right: 20px;
          top: 20px;
        }
      }
    }
  }
  .fold-button {
    position: fixed;
    top: 62px;
    width: 20px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 12px;
    background-color: @bgColor;
    transition: left .5s;
    z-index: 15;
    span {
      color: @navFontColor;
    }
    &.fold {
      left: 280px;
      border-radius: 3px 0 0 3px;
    }
    &.unfold {
      left: 0;
      border-radius: 0 3px 3px 0;
    }
  }
}
@media(max-width: 768px) {
  .left-sidebar-container .fold-button {
    top: 90%;
  }
}
</style>
