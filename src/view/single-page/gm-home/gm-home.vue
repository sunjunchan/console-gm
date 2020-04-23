<template>
    <div class="gm-home">
        <div class="float-top">
            <div class="top-left">
                <div style="color:#fff" class="top-login">
                    <img style="width: 25px;height: 30px;margin-right:5px;" src="./img/logo.gif" alt="">
                    <div>国民认证</div>
                    </div>
                <div class="change-page" :class="show==='content'?'action':''" @click="changePage('content')">首页</div>
                <div class="change-page" :class="show==='integration'?'action':''" @click="changePage('integration')">集成说明</div>
                <!-- <div class="change-page" @click="changePage('sdk')">SDK下载</div>
                <div class="change-page" @click="changePage('faq')">FAQ</div>
                <div class="change-page" @click="changePage('technical')">技术支持</div> -->
            </div>   
            <div class="top-right"> 
               <div class="top-btn" @click="goRegister">申请试用</div>
               <div class="top-btn" @click="goLogin"><Icon type="md-laptop" size= "25px" />&nbsp;控制台</div>
            </div>
        </div>
        <Content v-if="show === 'content'" @changePage="changePage"/>
        <Integration v-else-if="show === 'integration'"/>
        <Sdk v-else-if="show === 'sdk'"/>
        <Faq v-else-if="show === 'faq'"/>
        <Technical v-else-if="show === 'technical'"/>
        <pageOne v-else-if="show === 'page1'"/>
        <pageTwo v-else-if="show === 'page2'"/>
        <pageThree v-else-if="show === 'page3'"/>
        <div class="foot">
            <div class="foot-item1">
                <div class="foot-item-title">联系我们</div>
                <div class="foot-con">
                    <p>地址：北京市海淀区上地十街联想北研G栋8层</p>
                    <p>邮箱：business@gmrz-bj.com</p>
                    <p>电话：010-56726170 010-56726171</p>
                </div>
            </div>
            <div class="foot-item1">
                <div class="foot-item-title">相关链接</div>
                <div class="foot-con">
                    <p><a style="color:#8790b2" href="https://fidoalliance.org/?lang=zh-hans">FIDO官网</a></p>
                    <p><a style="color:#8790b2" href="http://gmrz-bj.com">国民认证官网</a></p>
                    <!-- <p>SDK下载</p>
                    <p>FAQ</p>
                    <p>技术支持</p> -->
                </div>
            </div>
            <div class="foot-item1">
                <div class="foot-item-title">热线电话</div>
                <div class="foot-con">
                    <p><Icon type="ios-call" />010-56726170</p>
                </div>
            </div>
        </div>
        <div class="foot-bottom">
            <a href="http://www.beian.miit.gov.cn">备案号：京ICP备16019402号-4</a>
        </div>
    </div>
</template>

<script>
import Sdk from './components/Sdk.vue'
import Faq from './components/Faq.vue'
import Technical from './components/technical-support.vue'
import Integration from './components/Integration-specification.vue'
import Content from './components/home-page.vue'
import pageOne from './components/journalismPage1'
import pageTwo from './components/journalismPage2'
import pageThree from './components/journalismPage3'
export default {
    data(){
        return{
            value1: 0,
            show:'content',
            shows:['content','integration']
        }
    },
    components: {
        Content,
        Integration,
        Sdk,
        Faq,
        Technical,
        pageOne,
        pageTwo,
        pageThree
    },
    methods: {
        changePage(page){
            this.show = page
        },
        goLogin(){
            let routeData = this.$router.resolve({
                path:`/login`   
            });
            window.open(routeData.href, '_blank');
            // this.$router.push({
            //     path:`/login`
            // })
        },
        goRegister(){
            let routeData = this.$router.resolve({
                path:`/register`   
            });
            window.open(routeData.href, '_blank');
            // this.$router.push({
            //     path:`/register`
            // })
        }
    }
}
</script>

<style tyle="less" lang="less">
    .gm-home{
        .action{
            color: #fff;
            background: #1f2a55;
        }
        // overflow: scroll;
        // width:100%;
        .top-login{
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        .float-top{
            position: fixed;
            z-index: 999;
            top: 0px;
            left: 0px;
            padding: 0 200px 0;
            width: 100%;
            // min-width: 1200px;
            height: 80px;
            background: #0e142b;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 1px solid #000;
        }
        .top-left{
            color: #75777d;
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 16px;
            .change-page{
                cursor: pointer;
                font-size: 14px;
                color: #fff;
                height:32px;
                width: 80px;
                line-height:32px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
            }
        }
        .top-left div{
            font-size: 20px;
            margin-right: 20px;
        }
        .icon-img{
            width: 50px;
            height: 50px;
        }
        .top-right{
            color: #75777d;
            display: flex;
            flex-direction: row;
            align-items: center;
            .top-btn{
                cursor:pointer;
            }
        }
        .top-right div{
            color: #fff;
            font-size: 14px;
            margin-right: 20px;
        }
        .top-right{
            color: #fff;
            display: flex;
            flex-direction: row;
        }
        .foot{
            display: flex;
            flex-direction: row;
            background: #0e142b;
            justify-content: space-between;
            width: 100%;
            height: 440px;
            padding: 100px 15% 0;
            .foot-item1{
                .foot-item-title{
                    font-size: 18px;
                    color: #fff;
                    margin-bottom: 18px;
                }
                .foot-con{
                    font-size: 12px;
                    color: #8790b2;
                    margin: 0 0 20px 10px;
                    p{
                      margin: 0 0 20px 10px;  
                    }
                }
            }
        }
        .foot-bottom{
            width: 100%;
            height:30px;
            background: #666;
            display: flex;
            justify-content: center;
            align-items: center;
            a{
                font-size: 16px;
                color: #fff;
            }
        }
    }
</style>
