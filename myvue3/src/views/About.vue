<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>params传参但配置路由（刷新页面id不会消失）：{{dataId}}</p>
  </div>
</template>
<script>
export default{
	data(){
		return{
			dataId:this.$route.params.id
		}
	},
	created(){
		console.log(this.dataId)
	}
}
</script>
