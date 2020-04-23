<template>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="email">
      <Input v-model="form.email" placeholder="请输入邮箱">
        <span slot="prepend">
            email
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long >发送邮件</Button>
    </FormItem>
  </Form>
</template>
<script>
import axios from '@/api/request'
import md5 from 'js-md5';
export default {
  name: 'LoginForm',
  props: {
    emailRules: {
      type: Array,
      default: () => {
        return [
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
          { required: true, message: '邮箱不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      form: {
        password: '',
        email:''
      }
    }
  },
  computed: {
    rules () {
      return {
        password: this.passwordRules,
        email: this.emailRules,
      }
    }
  },
  methods: {
    go(){
      this.$router.push({
        path:`/protal`,
        query:{access_token:'6b16480b6eb54b1faeb6ae2f9c2b48df'}
      })
    },
    handleSubmit(){
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          let user = {"email":this.form.email}
          axios.post('reset_password_r',user).then(res=>{
            if(res.message){
              this.$Message.error(res.message);
            }else{
              this.$Message.success('发送成功');
            }
          })
        }
      })
    }
  }
}
</script>
