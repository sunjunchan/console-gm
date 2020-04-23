<template>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="userName">
      <Input v-model="form.userName" placeholder="请输入邮箱">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" style="width:40%;margin: 0  20% 0 0 ">登录</Button>
      <Button @click="forgetSubmit" type="primary" style="width:40%">忘记密码</Button>
    </FormItem>
  </Form>
</template>
<script>
import axios from '@/api/request'
import md5 from 'js-md5';
export default {
  name: 'LoginForm',
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
          { required: true, message: '邮箱不能为空', trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      form: {
        // super_admin
        userName: '',
        password: ''
      }
    }
  },
  computed: {
    rules () {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    handleSubmit(){
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          axios.get('generate/password_salt').then(res=>{
            let password = md5(md5(md5(this.form.password)+this.form.userName)+res.data.salt)
            let user = {
              "email":this.form.userName.toLowerCase(),
              "password":password
            }
            axios.login('login',
              user).then(res=>{
              if(res.message){
                this.$Message.error(res.message);
              }else{
                localStorage.user = JSON.stringify(res.data)
                this.$router.push({
                  path:`/home`
                })
              }
            })
          })
        }
      })
    },
    forgetSubmit(){
      this.$router.push({
        path:`/forget-password`
      })
    }
  }
}
</script>
<style tyle="less" lang="less">
  .ivu-card-head span{
    font-size: 19px;
  }
</style>