<template>
    <div>

       	<ul class="mui-table-view" v-for="item in newsList" :key="item.id">
				<li class="mui-table-view-cell mui-media">
					<router-link :to="'/newsListdetail/'+item.id">
						<img class="mui-media-object mui-pull-left" src="https://avatars1.githubusercontent.com/u/20806395?s=400&v=4">
						<div class="mui-media-body">
						<h1>
              {{item.title}}

            </h1>
							<p class='mui-ellipsis'>
                <span> 发表时间：{{item.add_time | dateFormat}}</span>

                <span>点击次数&nbsp;{{item.click}}</span>
              </p>
						</div>
					</router-link>
				</li>

			</ul>

    </div>
</template>

<script>

import { Toast } from "mint-ui";
import { format } from 'url';
export default {
  data() {
    return {
      newsList: []
    }
  },methods:{
    getNewsList(){
      var that = this;
      this.$ajax.get('api/getnewslist').then(function(result){

       if(result.data.stattus ==0){
         Toast('请求数据失败')
       }else if(result.data.stattus ==1){
         that.newsList = result.data.message;
       }

      })

    }
  },created(){
    this.getNewsList()
  }
}
</script>

<style lang="less" scoped>
  .mui-table-view{
    h1{
      font-size: 14px;
    }
    .mui-ellipsis{
      font-size: 12px;
      color: blue;
      display: flex;
      justify-content: space-between;
    }
  }
</style>


