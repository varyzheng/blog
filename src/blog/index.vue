<template>
  <div id="blog">
    <navigator></navigator>
    <div class="container-fluid">
      <article-card v-for="article in list" v-bind="article" :key="article.id"></article-card>
    </div>
  </div>
</template>

<script>
import navigator from '../components/navigator'
import articleCard from '../components/article-card'
export default {
  name: 'blog',
  components: { navigator, articleCard },
  data () {
    return {
      list: [
        {
          id: 12,
          title: 'jQuery源码分析001',
          description: 'box-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本',
          read: 25,
          comment: 8,
          collect: 1
        },
        {
          id: 12,
          title: 'jQuery源码分析001',
          description: 'box-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本',
          read: 25,
          comment: 8,
          collect: 1
        },
        {
          id: 12,
          title: 'jQuery源码分析001',
          description: 'box-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本',
          read: 25,
          comment: 8,
          collect: 1
        },
        {
          id: 12,
          title: 'jQuery源码分析001',
          description: 'box-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本',
          read: 25,
          comment: 8,
          collect: 1
        },
        {
          id: 12,
          title: 'jQuery源码分析001',
          description: 'box-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本',
          read: 25,
          comment: 8,
          collect: 1
        },
        {
          id: 12,
          title: 'jQuery源码分析001',
          description: 'box-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本',
          read: 25,
          comment: 8,
          collect: 1
        },
        {
          id: 12,
          title: 'jQuery源码分析001',
          description: 'box-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本-shadow 是一个 CSS3 属性,它让我们几乎能在任意元素上添加阴影效果,就像我们在设计软件中的可添加的下拉阴影(drop shadow)一样。这种阴影效果让我们能在原本',
          read: 25,
          comment: 8,
          collect: 1
        }
      ]
    }
  }
}
</script>
