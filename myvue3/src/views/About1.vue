<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>params传参（未配置路由，刷新页面，id会消失）：{{dataId}}</p>
  </div>
</template>
<script>
export default{
	data(){
		return{
			dataId:this.$route.params.id1
		}
	},
	created(){
		console.log(this.dataId)
	}
}
</script>
