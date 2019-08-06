<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about/1">About</router-link> |
      <router-link :to="{name:'about1',params:{id1:2}}">About1</router-link> |
      <router-link :to="{name:'about2',query:{id2:3}}">About2</router-link> |
      <router-link to="/iview">iView</router-link>|
      <router-link to="/elementui">ElementUI</router-link>|
      <router-link to="/ProductListOne">ProductListOne</router-link>|
      <router-link to="/ProductListTwo">ProductListTwo</router-link>
    </div>
    <router-view/>
    <!-- <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two> -->
  </div>
</template>
<script>
// import ProductListOne from './views/ProductListOne.vue'
// import ProductListTwo from './views/ProductListTwo.vue'
export default {
  name: 'app',
  components: {
    // ProductListOne,
    // ProductListTwo
  },
  data(){
    // 此处最开始一直报错，提示products is not defined,因为没有加return{}
    return{
      products :  this.$store.state.products
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
