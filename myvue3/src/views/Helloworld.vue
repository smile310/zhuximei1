<template>
  <div class="home">
  	<p>Helloworld</p>
    <p>{{Product2}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	data(){
		return{
			Product2:this.$route.params.itemTwo
		}
	},
	name: 'Helloworld',
	created(){
		console.log(this.$router.currentRoute.name);
	},
	methods:{
	  	getProduct2(){
	  		// this.Product2=this.$route.query.itemTwo
	  	}
	}
}
</script>
