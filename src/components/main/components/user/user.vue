<template>
  <div class="user-avatar-dropdown">
    <Dropdown @on-click="handleClick">
      <Badge :dot="!!messageUnreadCount">
        <!-- <Avatar :src="userAvatar"/> -->
      </Badge>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem ><div style="width:150px;height: 24px;font-size: 18px" @click="openPage">账号信息</div></DropdownItem>
        <DropdownItem >
          <div style="width:150px;height: 24px;font-size: 18px" @click="backlogin">注销</div>
        </DropdownItem>
        <!-- <DropdownItem name="logout">退出登录</DropdownItem> -->
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import axios from '@/api/request'
import './user.less'
import { mapActions } from 'vuex'
export default {
  name: 'User',
  props: {
    userAvatar: {
      type: String,
      default: ''
    },
    messageUnreadCount: {
      type: Number,
      default: 0
    }
  },
  methods: {
    ...mapActions([
      'handleLogOut'
    ]),
    openPage () {
      this.$router.push({
        name: 'account_information_page'
      })
    },
    backlogin(){
      console.log(111)
      axios.post('logout').then(res=>{
        console.log(res)
        localStorage.removeItem('user')
        this.$router.push({
          name: 'login'
        })
      })
    },
    logout () {
      this.handleLogOut().then(() => {
        this.$router.push({
          name: 'login'
        })
      })
    },
    message () {
      this.$router.push({
        name: 'message_page'
      })
    },
    handleClick (name) {
      switch (name) {
        case 'logout': this.logout()
          break
        case 'message': this.message()
          break
      }
    }
  }
}
</script>
