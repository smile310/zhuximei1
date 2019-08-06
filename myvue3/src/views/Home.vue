<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{Product2}}</p>
    <!-- <button @click="Es6duplicate">点击</button> -->
    <table>
    	<tr v-for = "item in adoptTimeGrp">
    		<td>{{item}}</td>
    	</tr>
    </table>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	data(){
		return{
			Product2:this.$route.params.itemTwo,
			times:[
				{bTime:"12:00:00",eTime:"13:00:00"},
				{bTime:"05:00:00",eTime:"08:00:00"},
				{bTime:"12:00:00",eTime:"13:00:00"}
			],
			dataT:[
			{
				times:[
				{bTime:"12:00:00",eTime:"13:00:00"},
				{bTime:"05:00:00",eTime:"08:00:00"}]
			},
			{
				times:[
				{bTime:"05:00:00",eTime:"08:00:00"}]
			},
			{
				times:[
				{bTime:"08:00:00",eTime:"11:00:00"},
				{bTime:"06:00:00",eTime:"08:00:00"},
				{bTime:"18:00:00",eTime:"19:00:00"}]
			}
			],
			tableData: [
		    {
		      date: '周一',
		      index: 2,
		      passtime: ''
		    },
		    {
		      date: '周二',
		      index: 3,
		      passtime: ''
		    },
		    {
		      date: '周三',
		      index: 4,
		      passtime: ''
		    },
		    {
		      date: '周四',
		      index: 5,
		      passtime: ''
		    },
		    {
		      date: '周五',
		      index: 6,
		      passtime: ''
		    },
		    {
		      date: '周六',
		      index: 7,
		      passtime: ''
		    }],
			"beans": [
			{
			  "equpNos": null,
			  "crtTime": "2019-07-23 10:37:22",
			  "dataDetail": "周一、周日",
			  "pageSize": "",
			  "modfTime": "2019-07-23 10:37:22",
			  "pageNum": "",
			  "suitDateDesc": "1,2",
			  "passTimeGrp7": "",
			  "passTimeGrp5": "",
			  "passTimeGrp6": "",
			  "ruleStsCd": "false",
			  "passTimeGrp3": "",
			  "passTimeGrp4": "",
			  "chnlCode": "HA043",
			  "passTimeGrp1": "[{\"bTime\":\"00:00\",\"eTime\":\"23:59\"}]",
			  "crtUserId": "2018071215261400032",
			  "passTimeGrp2": "[{\"bTime\":\"00:00\",\"eTime\":\"23:59\"}]",
			  "coCode": "HA000001",
			  "modfUserId": "2018071215261400032",
			  "ruleName": "测试一",
			  "ids": "",
			  "id": "2019072310372200009",
			  "prsnTypeCd": "3"
			}],
			adoptTimeGrp:[],
			hours:[],
			minutes:[]
		}
	},
	name: 'home',
	components: {
	    HelloWorld
	},
	created(){
		this.Es6duplicate();
  	},
	methods:{
		// 数组去重排序
	  	Es6duplicate(){
	  		var adoptTimeGrp1 = [];
	  		this.times.forEach((item,index)=>{
	  			var bTime = item.bTime.split(":");
	  			var eTime = item.eTime.split(":");
	  			item.bTime= bTime[0]+":"+bTime[1];
	  			item.eTime = eTime[0]+":"+eTime[1];
	  			
	  			var adoptTimeGrp =item.bTime+ "-" + item.eTime;
	  			adoptTimeGrp1.push(adoptTimeGrp);
	  			
	  		})
	  		let arr = adoptTimeGrp1.sort();//排序
	  		arr = new Set(arr);//去重
	  		arr = Array.from(arr);//转化为数组
	  		this.adoptTimeGrp = arr
	  		return this.adoptTimeGrp;
		},
		getTime(data){
			var str = "passTimeGrp"
			for(let i in data){

				// this.adoptTimeGrp[str+]
			}

		}
	}
}
</script>
