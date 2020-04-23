<template>
    <div class="integration">
        <Row class="int-content">
            <Col span="5">
                <Menu :active-name="activename" theme="light" width="auto" ref="child" :open-names="opennames" @on-select="changeItem">
                    <Submenu name="1">
                        <template slot="title">
                        全部文档
                        </template>
                        <Submenu name="2">
                            <template slot="title">平台简介</template>
                            <menu-item name="2-1">入门指南</menu-item>
                            <menu-item name="2-2">控制台介绍</menu-item>
                            <menu-item name="2-3">AccessToken使用</menu-item>
                        </Submenu>
                        <!-- <menu-item name="2-1">平台简介</menu-item> -->
                        <Submenu name="3">
                            <template slot="title">OTP</template>
                            <menu-item name="3-1">集成说明</menu-item>
                            <menu-item name="3-2">服务端接口</menu-item>
                            <menu-item name="3-3">客户端接口</menu-item>
                        </Submenu>
                        <Submenu name="4">
                            <template slot="title">PUSH</template>
                            <menu-item name="4-1">集成说明</menu-item>
                            <menu-item name="4-2">服务端接口</menu-item>
                            <menu-item name="4-3">客户端接口</menu-item>
                        </Submenu>
                        <Submenu name="5">
                            <template slot="title">Webauthn</template>
                            <menu-item name="5-1">集成说明</menu-item>
                            <menu-item name="5-2">服务端接口</menu-item>
                            <menu-item name="5-3">客户端接口</menu-item>
                        </Submenu>
                        <Submenu name="6">
                            <template slot="title">FIDO UAF</template>
                            <menu-item name="6-1">集成说明</menu-item>
                            <menu-item name="6-2">服务端接口</menu-item>
                            <menu-item name="6-3">客户端接口</menu-item>
                        </Submenu>
                    </Submenu>
                </Menu>
                </Menu>
            </Col>
            <Col span="18" class="int-ringht">
                <pageJjOne v-if="show === 'one'" @changepage = "changepage"/>
                <pageJjTwo v-else-if="show === 'two'"/>
                <pageJjThree v-else-if="show === 'three'"/>
                <!-- <pageOne v-show="show === 'one'" @changepage = "changepage"/> -->
                <pageOtpOne v-else-if="show === 'otp_one'"/>
                <pageOtpTwo v-else-if="show === 'otp_two'"/>
                <pageOtpThree v-else-if="show === 'otp_three'"/>
                <pagePushOne v-else-if="show === 'push_one'"/>
                <pagePushTwo v-else-if="show === 'push_two'"/>
                <pagePushThree v-else-if="show === 'push_three'"/>
                <pageWebOne v-else-if="show === 'web_one'"/>
                <pageWebTwo v-else-if="show === 'web_two'"/>
                <pageWebThree v-else-if="show === 'web_three'"/>
                <pageFidoOne v-else-if="show === 'fido_one'"/>
                <pageFidoTwo v-else-if="show === 'fido_two'"/>
                <pageFidoThree v-else-if="show === 'fido_three'"/>
            </Col>
        </Row>
    </div>
                <!-- <Menu class="list-menu" :theme="theme2" @on-select="changeItem">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-paper" />
                            全部文档
                        </template>
                        <MenuItem v-for="(item,index) in menuItem" :key="index" :name="item.name">
                            {{item.title}}
                        </MenuItem>
                    </Submenu>
                </Menu> -->
</template>
<script>
import pageOne from './page1.vue'
import pageOtpOne from './page2.vue'
import pageOtpTwo from './page3.vue'
import pageOtpThree from './page4.vue'
import pagePushOne from './page5.vue'
import pagePushTwo from './page6.vue'
import pagePushThree from './page7.vue'
import pageWebOne from './page8.vue'
import pageWebTwo from './page9.vue'
import pageWebThree from './page10.vue'
import pageFidoOne from './page11.vue'
import pageFidoTwo from './page12.vue'
import pageFidoThree from './page13.vue'
import pageJjOne from './page14.vue'
import pageJjTwo from './page15.vue'
import pageJjThree from './page16.vue'
export default {
    computed: {
        menuitemClasses: function () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        }
    },
    components: {
        pageJjOne,
        pageJjTwo,
        pageJjThree,
        pageOne,
        pageOtpOne,
        pageOtpTwo,
        pageOtpThree,
        pagePushOne,
        pagePushTwo,
        pagePushThree,
        pageWebOne,
        pageWebTwo,
        pageWebThree,
        pageFidoOne,
        pageFidoTwo,
        pageFidoThree,

    },
    data(){
        return{
            activename:'2-1',
            opennames:['1','2'],
            isCollapsed: false,
            show:"one",
            theme2: 'light',
            itemText:'',
            menuItem:{
                "2-1":'one',
                "2-2":'two',
                "2-3":'three',
                "3-1":'otp_one',
                "3-2":'otp_two',
                "3-3":'otp_three',
                "4-1":'push_one',
                "4-2":'push_two',
                "4-3":'push_three',
                "5-1":'web_one',
                "5-2":'web_two',
                "5-3":'web_three',
                "6-1":'fido_one',
                "6-2":'fido_two',
                "6-3":'fido_three',
            },
        }
    },
    created(){
    },
    mounted() {
    },
    methods:{
        changepage(name){
            if(name==="page1"){
                this.activename = '3-1'
                this.opennames = ['1','3']
                this.show = 'otp_one'
            }else if(name === 'page2'){
                this.activename = '4-1'
                this.opennames = ['1','4']
                this.show = 'push_one'
            }else if(name === 'page3'){
                this.activename = '5-1'
                this.opennames = ['1','5']
                this.show = 'web_one'
            }else if(name === 'page4'){
                this.activename = '6-1'
                this.opennames = ['1','6']
                this.show = 'fido_one'
            }else if(name === 'page'){
                this.activename = '2-3'
                this.opennames = ['1','2']
                this.show = 'three'
            }
            // this.activename = name
            this.$nextTick(() => {
                this.$refs.child.updateOpened()
                this.$refs.child.updateActiveName()
            })
        },
        changeItem(name){
            this.show=this.menuItem[name]
        }
    }
}
</script>
<style tyle="less" lang="less">
.integration{
    height: 70vh;
    margin-top: 80px;
    padding: 0 200px 0;
    .int-content{
        
    }
    .int-ringht{
        padding: 0 4% 0;
    }
    .ivu-layout{
        padding: 0;
    }
    .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
    .top{
        margin-top:200px;
        font-size: 20px;
    }
    .list-menu{
        height: 100%;
    }
    .right{
        // padding:0 2% 0;
    }
}
</style>