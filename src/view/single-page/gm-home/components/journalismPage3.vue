<template>
    <div class="jourpage-three">
        <img src="../img/xw_icon1.jpg" alt="">
        <div class="content">
            <div class="title">多模生物识别身份认证解决方案，跨平台提升银行现有认证系统安全性和易用性</div>
            <!-- <div class="title-s">
                <p>Daon and Digi-Sign partner to provide Hong Kong bank with FIDO mobile solution</p>
            </div> -->
            <div class="content-texts">
                <p class="text1">案例简介</p>
                <p class="text2">当前数据泄露和口令密码被盗用等问题日益严重，其中对口令密码的依赖是最薄弱的环节之一。以用户名口令为核心的身份鉴别机制，天然存在弱口令、撞库、难以确认用户真实身份等安全问题以及难以记忆、不易维护等易用性问题。随着公司业务拓展，各业务信息系统不断增多，口令共用、弱口令、口令忘记等问题尤其突出。为解决上述问题，并防范包括网络钓鱼，中间人攻击等安全风险，充分利用终端安全能力，使用基于FIDO协议的身份认证解决方案，用基于公私钥密码替代原有的口令密码，提升银行现有系统的兼容性、安全性、易用性。</p>
                <p class="text1">客户介绍</p>
                <p class="text2">中国民生银行于1996年1月12日在北京正式成立，是中国第一家主要由民营企业发起设立的全国性股份制商业银行，并立足于根据“民营企业的银行、科技金融的银行、综合服务的银行”三大战略定位，全面推进改革转型落地实施，推动全行高质量发展。</p>
                <p class="text1">业务痛点</p>
                <p class="text2">解决口令密码难于记忆、定期更换等易用性问题，杜绝网络钓鱼，中间人攻击和共用口令等安全风险；实现移动端，PC端包括主要浏览器（IE、Chrome、Edge和Firefox）上指纹、人脸等快捷安全认证能力，并支持跨平台（如手机、指纹鼠标等）认证。</p>
                <p class="text1">解决方案</p>
                <p class="text2">1. 民生手机银行基于指纹和虹膜登录和支付</p>
                <p class="text2">民生银行早在2016年12月就与国民认证达成合作，通过部署国民认证自主研发的统一身份认证平台（UAP），大幅提升了开发效率、降低了开发成本、提升客户体验。UAP基于FIDO国际标准，支持多种生物识别技术，可针对不同行业定制不同特色的身份认证解决方案。其兼容度高、可扩展性强，跨平台支持所有主流智能手机品牌。锐意创新的民生银行，同时还是全球范围内首家真正实现虹膜支付的银行，为移动支付开启了新的时代。</p>
                <p class="text2">2. 民生银行移动数字证书建设</p>
                <p class="text2">2018年，民生银行与国民认证又达成二次合作，国民认证成为民生银行手机盾项目供应商，并为民生银行搭建基于FIDO协议标准的去介质化认证体系，并为其移动终端应用提供更全面、高效、便捷的认证服务。</p>
                <p class="text2">3.PC端身份认证</p>
                <p class="text2">利用FIDO协议在PC端（客户端、Web页面）实现生物识别的认证方式。民生银行通过部署国民认证基于WebAuth的身份认证产品实现手机终端和PC端的联动。</p>
                <p class="text1">用户收益</p>
                <p class="text2">民生银行客户端通过浏览器（包括Windows和Mac两个版本，可支持IE、Edge、Chrome、Firefox等浏览器、移动应用与对应业务系统服务端（包括服务端SDK（或同等功能的接口开发）、后端服务、管理系统）通道实现与后端系统交互，使浏览器、应用具有用户登录、授权等场景下的指纹、人脸等生物识别认证能力，也可通过基于FIDO协议的二维码带外认证，通过手机扫码完成认证；通过跨设备的认证器（如手机、指纹鼠标等），通过蓝牙、USB等方式连接，完成快速认证。</p>
                <p class="text1">项目咨询</p>
                <p class="text2">电话: 010-82157657</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created(){
        scrollTo(0,0);
    }
}
</script>
<style lang="less">
    .jourpage-three{
        .text-img{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 30px;
        }
        margin-top: 60px;
        // display: flex;
        // justify-content: center;
        .content{
            padding: 0 15% 0;
            .title{
                font-size: 24px;
                font-weight: 600;
                margin: 24px 0 24px;
                color: #000
            }
            .title-s{
                width: 100%;
                padding-bottom: 10px;
                font-size: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 500;
            }
        }
        .content-texts{
            
            .text1{
                font-size: 18px;
                text-indent:2em;
                font-weight: 600;
                padding: 0 0 30px;
                color: red;
            }
            .text2{
                font-size: 15px;
                text-indent:2em;
                padding: 0 0 30px;
                // color: #000;
            }
        }
    }
</style>

