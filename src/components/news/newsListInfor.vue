<template>

    <div>
        <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newsListDetail.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsListDetail.add_time | dateFormat }}</span>
      <span>点击：{{ newsListDetail.click }}次</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    <div class="content" v-html="newsListDetail.content"></div>

    <!-- 评论子组件区域 -->
    <comment-box>111</comment-box>
  </div>

    </div>
</template>


<script>
import pinglun from '../pinglun/comment.vue'
export default {
  data() {
    return {
      newsListDetail: []
    }
  },methods:{
    getNewsListDetail(){
      var that = this;
      this.$ajax.get('/api/getNewsListDetail',{
        params:{
          id:this.$route.params.id
        }
      }).then((result)=>{
        this.newsListDetail = result.data.message;
      }).catch(function(error){

      })
    }
  },created(){
    this.getNewsListDetail()
  },  components: {
    // 用来注册子组件的节点
    "comment-box": pinglun
  }
}
</script>


<style lang="less" scoped>


.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>

