<template>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入新密码">
        <span slot="prepend">
          <!-- <Icon :size="16" type="ios-person"></Icon> -->
            新密码
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password_y">
      <Input type="password" v-model="form.password_y" placeholder="请确认密码">
        <span slot="prepend">
            确认密码
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long >修改密码</Button>
    </FormItem>
  </Form>
</template>
<script>
import axios from '@/api/request'
import md5 from 'js-md5';
export default {
  name: 'LoginForm',
  props: {
    password: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    },
    password_y: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '确认密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      form: {
        // super_admin
        password: '',
        password_y:''
      }
    }
  },
  computed: {
    rules () {
      return {
        password: this.password,
        password_y: this.password_y,
      }
    }
  },
  methods: {
    go(){
      this.$router.push({
        path:`/protal`,
        query:{access_token:'sadsd'}
      })
    },
    handleSubmit(){
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          if(this.form.password === this.form.password_y){
             let newPassword = {
              "access_token":this.$route.query.access_token,
              "new_password":md5(this.form.password),
              "confirm_password":md5(this.form.password_y)
            }
            axios.post('reset_password',
              newPassword).then(res=>{
              if(res.message){
                this.$Message.error(res.message);
              }else{
                this.$Message.success('修改成功');
              }
            })
          }else{
            this.$Message.error('新密码确认密码不一致');
          }
        }
      })
    }
  }
}
</script>
