<template>
  <div class="register-page">
    <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
      <FormItem prop="name">
        <Input v-model="form.name" placeholder="请输入用户名">
          <span slot="prepend">
            <!-- <Icon :size="16" type="ios-person"></Icon> -->
            用户名
          </span>
        </Input>
      </FormItem>
      <FormItem prop="email">
        <Input v-model="form.email" placeholder="请输入邮箱">
          <span slot="prepend">
            <!-- <Icon :size="16" type="ios-person"></Icon> -->
              email
          </span>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="form.password" placeholder="请输入密码">
          <span slot="prepend">
              密码
            <!-- <Icon :size="14" type="md-lock"></Icon> -->
          </span>
        </Input>
      </FormItem>
      <FormItem prop="contact">
        <Input v-model="form.contact" placeholder="请输入联系人">
          <span slot="prepend">
              联系人
          </span>
        </Input>
      </FormItem>
      <FormItem prop="mobile">
        <Input v-model="form.mobile" placeholder="请输入电话">
          <span slot="prepend">
              手机号
          </span>
        </Input>
      </FormItem>
      <FormItem prop="company">
        <Input v-model="form.company" placeholder="请输入公司名称">
          <span slot="prepend">
              公司
          </span>
        </Input>
      </FormItem>
      <FormItem prop="address">
        <Input v-model="form.address" placeholder="请输入地址">
          <span slot="prepend">
              地址
          </span>
        </Input>
      </FormItem>
      <FormItem>
        <Button @click="handleSubmit" type="primary" long >注册</Button>
      </FormItem>
    </Form>
    <Modal
      v-model="modal1"
      title=""
      @on-ok="ok">
        <p>您申请已提交成功，后台审核通过后将发送开通邮件，请关注邮箱</p>
    </Modal>
  </div>
</template>
<script>
import axios from '@/api/request'
import md5 from 'js-md5';
export default {
  name: 'LoginForm',
  data () {
    const validatepass = (rule, value, callback) => {
      let reg =/^[1-9a-z]{0,8}$/; // 检验规则为正则，可自行百度。
      if(reg.test(value)){
          callback();
      }else {
          return callback(new Error("请输入小于八位数字或字母"));
      }
    }
    return {
      modal1: false,
      rules: {
        name: [
              { required: true, message: '用户名不能为空', trigger: 'blur' },
              { validator: validatepass, trigger: 'blur' }
            ],
        email: [
              { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
              { required: true, message: '邮箱不能为空', trigger: 'blur' }
            ],
        contact: [
              { required: true, message: '联系人不能为空', trigger: 'blur' }
            ],
        mobile: [
              { required: true, message: '手机号不能为空', trigger: 'blur' }
            ],
        company: [
              { required: true, message: '公司名称不能为空', trigger: 'blur' }
            ],
        address: [
              { required: true, message: '地址不能为空', trigger: 'blur' }
            ],
        password:[
              { required: true, message: '密码不能为空', trigger: 'blur' }
            ]
      },
      form: {
        // super_admin
        name: '',
        password: '',
        contact: '',
        mobile: '',
        company:'',
        address:'',
        email:''
      }
    }
  },
  computed: {
    // rules () {
    //   return {
    //     name: this.userNameRules,
    //     password: this.passwordRules,
    //     email: this.emailRules,
    //     contact: this.contactRules,
    //     mobile: this.mobileRules,
    //     company: this.companyRules,
    //     address: this.addressRules
    //   }
    // }
  },
  methods: {
    validatepass(rule, value, callback){
      console.log(value)
      // if (value === '') {
      //     callback(new Error('Please enter your password'));
      // } else {
      //     if (this.formCustom.passwdCheck !== '') {
      //         // 对第二个密码框单独验证
      //         this.$refs.formCustom.validateField('passwdCheck');
      //     }
      //     callback();
      // }
    },
    ok(){
      this.$router.push({
        path:`/login`
      })
    },
    handleSubmit(){
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          let user = {...this.form}
          user.password = md5(this.form.password)
          user.email = this.form.email.toLowerCase()
          axios.login('account/create',user).then(res=>{
            if(res.message){
              this.$Message.error(res.message);
            }else{
              // this.$Message.success('注册成功');
              this.modal1 = true
            }
          })
        }
      })
    }
  }
}
</script>
<style tyle="less" lang="less">
  .login-register{
 
  }
</style>