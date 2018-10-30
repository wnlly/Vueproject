<template>
<div>
    <div class="lunbo">
        <mt-swipe :auto="4000" v-for="(item) in lunbotuList" :key="item.id">
            <mt-swipe-item><img :src="item.img_url" alt=""></mt-swipe-item>

        </mt-swipe>
    </div>



    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/news">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/images">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/commodity">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/message">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="video">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/contact">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div>
            </router-link>
        </li>

    </ul>
</div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotuList: [] // 保存轮播图的数组
    };
  },
  created() {
    this.getLunbo();
  },
  methods: {
    // 获取轮播图数据的方法
    getLunbo() {
      var that = this;
      this.$ajax
        .get("/getLunbo")
        .then(function(result) {
          console.log(result.data[1].message);
          that.lunbotuList = result.data[1].message;
        })
        .catch(function(error) {});
    }
  }
};
</script>
<style scoped>
.lunbo {
  width: 100%;
  height: 200px;
}
.mint-swipe {
  width: 100%;
  height: 200px;
}
.mint-swipe-items-wrap {
  background: yellow;
  width: 100%;
  height: 200px;
}

ul img {
  height: 50%;
  width: 50%;
  border-radius: 50%;
}
</style>
