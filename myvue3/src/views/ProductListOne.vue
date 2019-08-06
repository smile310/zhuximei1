<!-- ProductListOne.vue -->
<template>
    <div id="product-list-one">
        <h2>Product List One</h2>
        <ul>
            <li v-for="product in products">
                <span class="name">{{ product.name }}</span>
                <span class="price">${{ product.price }}</span>
            </li>
        </ul>
        <br>
        <el-button @click="minusPrice">点击减少价格</el-button>
        <el-button @click="addPrice">点击增加价格</el-button>
    </div>
</template>

<script>
export default {
    data () {
        return {
             products :  this.$store.state.products 
        }
    },
    methods:{
        minusPrice() {
            // 注意:调用mutaions中回调函数, 只能使用store.commit(type, payload)
            this.$store.commit('minusPrice', 2); //提交`minusPrice,payload为2
        },
        addPrice(){
            this.$store.commit('addPrice', 2); //
        }
    }
}
</script>

<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>

