<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          第1楼&nbsp;&nbsp;用户：&nbsp;&nbsp;发表时间：
        </div>
        <div class="cmt-body">

        </div>
      </div>

    </div>

    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>


<script>
export default {
  data(){
    return{

    }
  },
}
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>

