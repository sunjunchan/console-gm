<template>
    <div class="home-page">
        <div class="home-top">
            <Carousel autoplay v-model="value1" loop :height="500">
                <CarouselItem>
                    <div class="demo-carousel demo1">
                        <!-- <img src="http://www.gmrz-bj.com/data/upload/image/201605/ada91538481e8e6503b0cad17a1cd975.png" alt=""> -->
                        <!-- <p class="item1">Example headline.</p>
                        <p class="item2">
                            Note: If you're viewing this page via a
                            <span class="item3">file:// </span>
                            URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.
                        </p>
                        <div class="but">Sign up today</div> -->
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel demo2">
                        <!-- <img src="http://www.gmrz-bj.com/data/upload/image/201605/e7f332e19c36a725539f391f896b80e8.jpg" alt=""> -->
                        <!-- <p class="item1">Another example headline.</p>
                        <p class="item2">
                            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida
                        at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </p>
                        <div class="but">Learn more</div> -->
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel demo3">
                        <!-- <img src="http://www.gmrz-bj.com/data/upload/image/201605/117843153010ceff4a3eb5147bd6f3de.jpg" alt=""> -->
                        <!-- <p class="item1">One more for good measure.</p>
                        <p class="item2">
                            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida
                        at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </p>
                        <div class="but">Browse gallery</div> -->
                    </div>
                </CarouselItem>
            </Carousel>
        </div>
        <div class="content">
            <p>解决方案</p>
            <div class="content-items">
                <img class="content-item" src="../img/s_img1.png" alt="">
                <img class="content-item" src="../img/s_img2.png" alt="">
                <img class="content-item" src="../img/远程人脸认证.png" alt="">
                <!-- <img class="content-item" src="http://192.168.6.132/mas-portal/static/img/s_remote_voice.png" alt="">
                <img class="content-item" src="http://192.168.6.132/mas-portal/static/img/s_remote_ocr.png" alt="">
                <img class="content-item" src="http://192.168.6.132/mas-portal/static/img/s_real_name.png" alt=""> -->
            </div>
        </div>
        <div class="content2">
            <p>新闻动态</p>
            <div class="content2-items-one">
                <div class="items-one-item">
                    <img src="../img/WechatIMG14.png" alt="">
                    <div class="one-item3">
                        <p class="one-item-title">国民认证为华为Mate20打造3D安全人脸支付解决方案</p>
                        <p class="one-item-p">在上周五刚刚召开的华为Mate系列国行手机发布会上， 备受瞩目的华为年度最强Mate20系列旗舰手机正式问世。</p>
                        <p class="one-item-btn" @click="showAll('page1')">查看更多</p>
                    </div>
                </div>
                <div class="items-one-item">
                    <img src="../img/02@2x.png" alt="">
                    <div class="one-item3">
                        <p class="one-item-title">生物识别身份鉴别将有统一国家标准，国民认证参与研制，助推产业化</p>
                        <p class="one-item-p">昨日，《信息安全技术基于可信环境的生物特征识别身份鉴别协议框架》等6项信息安全领域的国家标准正式发布，并将于2019年5月1日正式实施。</p>
                        <p class="one-item-btn" @click="showAll('page2')" >查看更多</p>
                    </div>
                </div>
                <div class="items-one-item">
                    <img src="../img/03@2x.png" alt="">
                    <div class="one-item3">
                        <p class="one-item-title">多模生物识别身份认证解决方案，跨平台提升银行现有认证系统安全性和易用性</p>
                        <p class="one-item-p">当前数据泄露和口令密码被盗用等问题日益严重，其中对口令密码的依赖是最薄弱的环节之一。</p>
                        <p class="one-item-btn" @click="showAll('page3')">查看更多</p>
                    </div>
                </div>
            </div>
            <!-- <div class="content2-items-two">更多</div> -->
            <div class="content2-items-three">服务客户</div>
            <div class="content2-items-fore">
                <img src="../img/c_icon1.png" alt="">
                <img src="../img/c_icon2.png" alt="">
                <img src="../img/c_icon3.png" alt="">
                <img src="../img/c_icon4.png" alt="">
                <img src="../img/c_icon5.png" alt="">
                <img src="../img/c_icon6.png" alt="">
                <img src="../img/c_icon7.png" alt="">
                <img src="../img/c_icon8.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value1: 0
        }
    },
    components: {
    },
    methods: {
        showAll(page){
            this.$emit('changePage', page)
        },
        goLogin(){
            this.$router.push({
                path:`/login`
            })
        },
        goRegister(){
            this.$router.push({
                path:`/register`
            })
        }
    }
}
</script>

<style tyle="less" lang="less">
    .home-page{
        .home-top{
            margin-top: 80px;
        }
        .float-top{
            position: fixed;
            z-index: 999;
            top: 0px;
            left: 0px;
            padding: 0 200px 0;
            width: 100%;
            min-width: 1500px;
            height: 60px;
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
            color: #75777d;
            font-size: 20px;
            margin-right: 20px;
        }
        .top-right{
            color: #fff;
            display: flex;
            flex-direction: row;
        }
        .demo-carousel{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .demo1{
            // img{
            //     width: 100%;
            //     // height: 100%;
            // }
            background: url("../img/lb1.jpg") center top no-repeat;
        }
        .demo2{
            // img{
            //     width: 100%;
            //     // height: 100%;
            // }
            background: url("../img/lb2.png") center top no-repeat;
        }
        .demo3{
            // img{
            //     width: 100%;
            //     // height: 100%;
            // }
            background: url("../img/lb3.jpg") center top no-repeat;
        }
        .item1{
            font-size: 36px;
            color: #fff;
        }
        .item2{
            font-size: 20px;
            color: #fff;
            width: 80%;
        }
        .item3{
            font-size: 20px;
            color: red;
            text-shadow: 0 1px 2px rgba(0,0,0,.6);
            width: 80px;
            height: 20px;
            padding: 2px;
            border-radius: 2px;
            background: #fff;
        }
        .but{
            padding: 5px;
            height: 50px;
            background: #337ab7;
            font-size: 25px;
            color: #fff;
            border-radius: 5px;
            margin-top: 10px;
        }
        // 中间部分1
        .content{
            background: #f6f6f6;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding-bottom: 50px;
            p{
                font-size: 30px;
                margin: 24px 0 24px;
                color:#000;
            }
            .content-items{
                width: 74%;
                display: flex;
                flex-wrap: wrap;
            }
            .content-item{
                background: #fff;
                margin:0 1% 2% 1%;
                border-radius: 5px;
                width: 31.33%;
                height: 40%;
                border: 1px solid #b7b7b7;
            }
        }
        // 中间部分2
        .content2{
            padding: 10px 15% 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            p{
                font-size: 30px;
                margin: 24px 0 24px;
                color:#000;
            }
            .content2-items-one{
                width: 94%;
                img{
                    margin: 0 24px 0 0;
                    height: 160px
                }
            }
            .items-one-item{
                display: flex;
                flex-direction: row;
                margin-bottom: 24px;
                img{
                    width: 300px;
                    height: 150px;
                }
            }
            .one-item-title{
                font-size: 20px;
                margin-bottom: 30px;
                color: #333;
            }
            .one-item-p{
                font-size: 12px;
                margin-bottom: 20px;
                color: #999;
            }
            .one-item-btn{
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px;
                font-size: 18px;
                border-radius: 10px;
                width: 150px;
                border: 1px solid #e6e6e6;
            }
            .content2-items-two{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px;
                font-size: 18px;
                border-radius: 5px;
                width: 150px;
                border: 1px solid #e6e6e6;
                margin: 24px 0 24px;
            }
            .content2-items-three{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px;
                font-size: 30px;
                margin: 24px 0 24px;
                color:#000;
                width: 150px;
            }
            .content2-items-fore{
                width: 100%;
                img{
                    margin: 0 .5% 0;
                    display: inline-block;
                    border: 1px solid #fefefe;
                    height: 30%;
                    width: 23.5%;
                }
            }
        }
    }
</style>
