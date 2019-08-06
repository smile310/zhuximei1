<template>
    <div class="dialog">
        <broadcast :on-msg = 'onMsg' />
        <el-dialog
        :title="'提示'"
        :visible.sync="centerDialogVisible"
        :close-on-click-modal = 'false'
        :close-on-press-escape = 'false'
        width="480px"
        :show-close = 'false'
        center>
        <div class="messCenter">
            <span v-html="message"></span>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button class="small-btn empty-btn" @click="close">取 消</el-button>
            <el-button class="small-btn solid-btn" type="primary" @click="sure">确 定</el-button>
        </div>
        </el-dialog>
    </div>
</template>

<script>
import broadcast from './broadcast.vue'
export default {
    data() {
      return {
            centerDialogVisible: false,
            cbSure: null,
            cbClose: null,
            title:'提示',
            message:'',
      }
    },
    components: {
        broadcast
    },
    methods: {
        onMsg(msg){
            if(msg.type === 'dialogOpen'){
                this.init()
                this.cbSure = msg.msg.cbSure
                this.cbClose = msg.msg.cbCancel
                this.title = msg.msg.tit
                this.message = msg.msg.msg
                this.centerDialogVisible = true
            }else if(msg.type === 'dialogClose'){
                this.centerDialogVisible = false
            }
        },
        init(){
            this.cbSure = null
            this.cbClose = null
            this.title = ''
            this.message = ''
        },
        sure(){
            this.cbSure&&this.cbSure()
            this.centerDialogVisible = false
            this.init()
        },
        close(){
            this.cbClose&&this.cbClose()
            this.centerDialogVisible = false
            this.init()
        }
    }
}
</script>

<style scoped lang="scss">
.messCenter{
    height:50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    span{
        text-align:center;
    }
}
.dialog-footer{
    height: 59px;
    line-height: 60px;
    text-align: center;
    // border-top:1px solid #ccc;
    cursor: pointer;
}
</style>
