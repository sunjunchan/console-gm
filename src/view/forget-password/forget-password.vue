<style lang="less">
  // @import './forget-password.less';
</style>

<template>
  <div class="login-forget">
    <div class="login-con">
      <Card icon="log-in" title="" :bordered="false">
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

<style lang="less">
  .login-forget{
      width: 100%;
      height: 100%;
      background-image: url('../../assets/images/login-bg.baa243d3.png');
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
    .login-con{
      // height: 200px;
      width: 40%;
      min-width: 250px;
    }
  }
</style>
