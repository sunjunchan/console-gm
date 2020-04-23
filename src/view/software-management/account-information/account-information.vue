<template>
    <div class="account-information">
        <div class="infor">
            <p>基本信息</p>
            <div class="infor-text">
                <div>姓名：{{user.username}}</div>
                <div>公司：{{user.company}}</div>
                <div>邮箱：{{user.email}}</div>
            </div>
        </div>
        <div class="infor">
            <p>安全设置</p>
            <div class="infor-text">
                <div>登录密码：***<span class="infor-span" @click="changePassword">修改</span></div>
                <div>手机号码：<input tyle="text" v-model="user.mobile"></input><span class="infor-span" @click="changeMobile">修改</span></div>
            </div>
        </div>
        <div class="infor">
            <p>开发者</p>
            <div class="infor-text">
                <div>userKey:{{app_secret}}</div>
                <div>API DevSecret:{{apiDev}}<span class="infor-span2" @click="getinfo">查看</span><span class="infor-span2" @click="modal1 = true" >重置</span></div>
            </div>
        </div>
        <Drawer
            title="修改密码"
            v-model="value3"
            width="320"
            :mask-closable="false"
            :styles="styles"
            class="drawer"
        >
            <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                <FormItem prop="old_password">
                    旧密码
                    <Input type="password" v-model="formInline.old_password" placeholder="旧密码">
                    </Input>
                </FormItem>
                <FormItem prop="new_password">
                    新密码
                    <Input type="password" v-model="formInline.new_password" placeholder="新密码">
                    </Input>
                </FormItem>
                <FormItem prop="confirm_password">
                    确认密码
                    <Input type="password" v-model="formInline.confirm_password" placeholder="确认密码">
                    </Input>
                </FormItem>
                <div class="demo-drawer-footer" style="margin-top:24px">
                    <Button style="margin-right: 8px" @click="value3 = false">取消</Button>
                    <Button type="primary" @click="handleSubmit('formInline')">修改</Button>
                </div>
            </Form>
        </Drawer> 
        <Modal
            v-model="modal1"
            title=""
            @on-ok="ok"
            @on-cancel="cancel">
            <p>是否确认重置</p>
        </Modal>
    </div>
</template>
<script>
import axios from '@/api/request'
import md5 from 'js-md5';
export default {
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user')),
            value3: false,
            modal1: false,
            styles: {
                height: 'calc(100% - 55px)',
                overflow: 'auto',
                paddingBottom: '53px',
                position: 'static'
            },
            formInline: {
                old_password: '',
                new_password: '',
                confirm_password: ''
            },
            ruleInline: {
                old_password: [
                    { required: true, message: '不能为空', trigger: 'blur' }
                ],
                new_password: [
                    { required: true, message: '不能为空', trigger: 'blur' }
                ],
                confirm_password: [
                    { required: true, message: '不能为空', trigger: 'blur' },
                    // { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
            ]},
            apiDev:'',
            app_secret:''
        }
    },
    computed: {
        rules () {
            return {
                old_password: this.old_password,
                new_password: this.new_password,
                confirm_password: this.confirm_password
            }
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            axios.post('account/getinfo').then(res=>{
                this.app_secret = res.data.user_key
            })
        },
        ok () {
            this.newgetinfo()
        },
        cancel () {
        },
        getinfo(){
            axios.post('account/getinfo').then(res=>{
                this.apiDev = res.data.site_secret
                // this.appx_secret = res.data.app_secret
            })
        },
        newgetinfo(){
            axios.post('account/secret/reset').then(res=>{
                this.apiDev = res.data.site_secret
            })
        },
        changePassword(){
            this.value3 = true
        },
        changeMobile(){
            console.log(this.user.mobile)
            let change = {}
            change.mobile = this.user.mobile
            axios.post('account/update',change).then(res=>{
                if(res.message){
                    this.$Message.error(res.message)
                }else{
                    this.$Message.success('修改成功')
                    localStorage.user = JSON.stringify(this.user)
                }
            })
        },
        handleSubmit(){
           this.$refs.formInline.validate((valid) => {
                if (valid) {
                    axios.get('generate/password_salt').then(res=>{
                        let oldpassword = md5(md5(md5(this.formInline.old_password)+this.user.email)+res.data.salt)
                        let newpassword = md5(this.formInline.new_password)
                        let confirmpassword = md5(this.formInline.confirm_password)
                        let user = {
                            old_password :oldpassword,
                            new_password :newpassword,
                            confirm_password :confirmpassword
                        }
                        axios.post('change_self_password',
                            user).then(res=>{
                            if(res.message){
                            this.$Message.error(res.message);
                            }else{
                                this.$Message.success('修改密码成功')
                                this.$router.push({
                                    path:`/login`
                                })
                            console.log(res.data)
                            }
                        }).catch(reason=>{
                        })
                    })
                    // this.$Message.success('Success!');
                } else {
                    // this.$Message.error('Fail!');
                }
            })
        }
    }
}
</script>
<style lang="less">
    .account-information{
        .infor{
            width: 100%;
            margin-bottom: 24px;
            background: #fff;
            padding: 24px;
            border-radius: 5px;
            box-shadow: 2px -2px 4px 4px rgba(150, 150, 150, .1);
            position: relative;
            p{
                font-size: 30px;
            }
            .infor-text{
                padding: 24px 0 0 24px;
                font-size: 18px;
            }
            .infor-span{
                color:blue;
                position:absolute;
                right: 500px;
                cursor:pointer;;
            }
            .infor-span2{
                color:blue;
                margin-left: 50px;
                cursor:pointer;
            }
        }
    }
</style>