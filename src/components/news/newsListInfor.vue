<template>

    <div>

      content{{this.$route.params.id}}
    </div>
</template>


<script>
export default {
  data() {
    return {
      newsListDetail: []
    }
  },methods:{
    getNewsListDetail(){
      this.$ajax.get('/').then(function(result){

      }).catch(function(error){

      })
    }
  }
}
</script>



<style scoped>

</style>

