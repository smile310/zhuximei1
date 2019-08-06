<template>
  <div class="about">
    <h1>This is an about page2</h1>
    <p>query传参：{{dataId2}}</p>
  </div>
</template>
<script>
export default{
	data(){
		return{
			dataId2:this.$route.query.id2
		}
	},
	created(){
		console.log(this.dataId2)
	}
}
</script>
