<template>
	<div class="elementui">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="1">处理中心</el-menu-item>
		  <el-submenu index="2">
		    <template slot="title">我的工作台</template>
		    <el-menu-item index="2-1">选项1</el-menu-item>
		    <el-menu-item index="2-2">选项2</el-menu-item>
		    <el-menu-item index="2-3">选项3</el-menu-item>
		    <el-submenu index="2-4">
		      <template slot="title">选项4</template>
		      <el-menu-item index="2-4-1">选项1</el-menu-item>
		      <el-menu-item index="2-4-2">选项2</el-menu-item>
		      <el-menu-item index="2-4-3">选项3</el-menu-item>
		    </el-submenu>
		  </el-submenu>
		  <el-menu-item index="3" disabled>消息中心</el-menu-item>
		  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
		</el-menu>
		<div class="line"></div>
		<el-menu
		  :default-active="activeIndex2"
		  class="el-menu-demo"
		  mode="horizontal"
		  @select="handleSelect"
		  background-color="#545c64"
		  text-color="#fff"
		  active-text-color="#ffd04b">
		  <el-menu-item index="1">处理中心</el-menu-item>
		  <el-submenu index="2">
		    <template slot="title">我的工作台</template>
		    <el-menu-item index="2-1">选项1</el-menu-item>
		    <el-menu-item index="2-2">选项2</el-menu-item>
		    <el-menu-item index="2-3">选项3</el-menu-item>
		    <el-submenu index="2-4">
		      <template slot="title">选项4</template>
		      <el-menu-item index="2-4-1">选项1</el-menu-item>
		      <el-menu-item index="2-4-2">选项2</el-menu-item>
		      <el-menu-item index="2-4-3">选项3</el-menu-item>
		    </el-submenu>
		  </el-submenu>
		  <el-menu-item index="3">消息中心</el-menu-item>
		  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
		</el-menu>
		<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
		<el-dialog
        title="修改密码"
        :visible.sync ='dialogVisible'
        width = 40%
        center>
        <el-form :inline = 'false' ref = 'ruleForm' :label-position="'left'" label-width="120px" >
            <el-form-item class = 'is-required' label="原始密码" prop = 'pass_word' >
                <el-input type="password"  class = 'pswIpt'  placeholder = '请输入原始密码' maxlength = '50' ></el-input>
            </el-form-item>
            <el-form-item class = 'is-required' prop = 'new_pass_word' >
                <span slot='label'>新&ensp;密&ensp;码</span>
                <el-input type="password" class = 'pswIpt'  placeholder = '请输入新密码' maxlength = '50'  ></el-input>
            </el-form-item>
                <el-form-item class = 'is-required' label="确认密码" prop = 'new_pass_word_again' >
                <el-input type="password" class = 'pswIpt'  placeholder = '请输入确认密码' maxlength = '50'  ></el-input>
            </el-form-item>
        </el-form>
        <p class="pswTxt pswTxtP">密码要求<span style="margin-left:4em">1、密码必须由字母、数字、特殊符号组成，区分大小写</span></p>
        <p class="pswTxt">2、特殊符号包含（. _ & * @ # ! ~ $ ^）</p>
        <p class="pswTxt">3、密码长度不少于8位，不超过20位</p>
        <p class="pswTxt">4、每<span class="time">三个月</span>至少改一次密码</p>
        <p class="pswTxt">5、新密码不能为初始密码</p>
        <span slot="footer" class="dialog-footer">
            <el-button class="small-btn empty-btn"  @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" class="small-btn solid-btn" @click="dialogVisible = false">保存</el-button>
        </span>
    </el-dialog>
    <div>
      <el-button type="text" @click="dialogBtn = true">点击打开 Dialog1</el-button>
      <el-dialog :visible.sync='dialogBtn' center class='small-dialog' title='提示'>
        <span style="text-align:center">是否确认取消当前编辑？</span>
        <span class='dialog-footer' slot='footer'>
          <el-button class='small-btn empty-btn'>取消</el-button>
          <el-button class='small-btn solid-btn' type='primary'>确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <br> <br> <br>
    <el-button :plain="true" @click="open2">成功</el-button>
    <el-button :plain="true" @click="open3">警告</el-button>
    <el-button :plain="true" @click="open1">消息</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
    <br> <br> <br>
    <!-- 单选框 -->
    <el-radio-group v-model="radio">
      <el-radio v-for="item in item" :label="item.label" v-bind:key="item.lalel">{{item.data1}}</el-radio>
    </el-radio-group>
    <br> <br> <br>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
    <br> <br> <br>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <p>{{input}}</p>
    <br> <br> <br>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
    <br><br><br>
    <div style="margin:20px 0;">
      <i class="el-icon-edit"></i>
      <i class="el-icon-star-on"></i>
    </div>
    <div style="margin:20px 0;">
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择日期" format="yyyy-MM-dd hh:mm:ss">
      </el-date-picker>
    </div>
	</div>
</template>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        activeIndex: '1',
        activeIndex2: '1',
        dialogVisible: false,
        dialogBtn:false,
        radio: "3",
        item:[{data1:"备选项1",label:"3"},{data1:"备选项2",label:"6"},{data1:"备选项3",label:"9"}],
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        input:"初始值",
        tableData: Array(20).fill(item),
        value1: ''
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      open1() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      },
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  }
</script>
<style scoped lang="scss">
  .pswTxt{
    margin-left: 25%;
    .time{
      color: #409EFF;
    }
  }
  .pswTxtP{
    margin-left: 2%;
  }
  .el-header {
    background-color: #999;
    // color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
    // background-color: #409EFF !important;
    ul li{
      // background-color: #409EFF !important;
      // color:#fff;
    }
  }
  i{
    font-size: 1.5rem;
  }
</style>