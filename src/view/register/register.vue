<style lang="less">
  @import './register.less';
</style>

<template>
  <div class="login-register">
    <div class="login-con">
      <Card icon="log-in" title="欢迎注册试用" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from './components/index'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: this.$config.homeName
          })
        })
      })
    }
  }
}
</script>

<style tyle="less" lang="less">
  .login-register{
    display: flex;
    justify-content: center;
    align-items: center;
    .login-con{
      // height: 200px;
      // border: 1px solid red;
      width: 40%;
    }
  }
</style>
