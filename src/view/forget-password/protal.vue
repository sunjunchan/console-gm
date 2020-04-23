<style lang="less">
  @import './forget-password.less';
</style>

<template>
  <div class="login">
    <div class="login-content">
      <Card icon="log-in" title="" :bordered="false">
        <div class="form-content">
          <login-form @on-success-valid="handleSubmit"></login-form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from './components/protal-index.vue'
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
  .login{
    display: flex;
    justify-content: center;
    align-items: center;
    .login-content{
      // height: 200px;
      width: 40%;
      min-width: 250px;
    }
  }
</style>
