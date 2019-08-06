<!-- ProductListTwo.vue -->
<template>
    <div id="product-list-two">
        <h2>Product List Two</h2>
        <el-button @click="backHome">push方法-跳转到helloworld页面</el-button>
       <!--  <el-button @click="backHome1">replace方法-返回Home菜单</el-button> -->
        <ul>
            <li v-for="product in products">
                <span class="name">{{ product.name }}</span>
                <span class="price">${{ product.price }}</span>
            </li>
        </ul>
        <table>
            <tr v-for="product in productsGetters">
                <td class="name">{{ product.name }}</td>
                <td class="price">${{ product.price }}</td>
            </tr>
        </table>
        <el-button @click="minusPriceAsync">异步减少价格</el-button>
        <el-button @click="addPriceAsync">异步增加价格-Actions1</el-button>
        <el-button @click="addPriceAsync11">异步增加价格1-Actions2</el-button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data () {
        return {
            products :  this.$store.state.products,
            productsGetters:this.$store.getters.saleProducts
        }
    },
    methods:{
        minusPriceAsync(){
            this.$store.dispatch('minusPriceAsync', 4); 
            //分发actions中的minusPriceAsync这个异步函数
        },
        addPriceAsync(){
            this.$store.dispatch('addPriceAsync', 4); 
            //分发actions中的addPriceAsync这个异步函数
        },
        // 获取到addPriceAsync1（冒号后是路径)
        // addPriceAsync11是此actions动作的别名，
        // 即将此addPriceAsync1指向addPriceAsync11
        ...mapActions({
            addPriceAsync11:"addPriceAsync1"
        }),
        backHome(){
            // 路由跳转
            this.$router.push({
                name:"Helloworld",
                params:{itemTwo:"product2"}
            });
        }
        // backHome1(){
        //     this.$router.replace({
        //         name:"home",
        //         params:{itemTwo:"product2-1"}
        //     });
        // }
    }
}
</script>

<style scoped>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
table{
    border-collapse:collapse;
}
table tr td{
    width: 200px;
    height: 40px;
    border: 1px solid;
}
</style>