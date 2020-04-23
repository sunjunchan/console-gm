<template>
    <div class="jourpage-one" id="top">
        <img src="../img/xw_icon1.jpg" alt="">
        <div class="content">
            <div class="title">国民动态</div>
            <div class="title-s">
                <p>国民认证为华为Mate20打造3D安全人脸支付解决方案</p>
            </div>
            <div class="content-texts">
                <p class="text1">在上周五刚刚召开的华为Mate系列国行手机发布会上， 备受瞩目的华为年度最强Mate20系列旗舰手机正式问世。同时，作为跨里程碑式的产品，Mate 20所搭载的黑科技，也让网友们大开眼界，纷纷感叹Mate 20的“惊艳”。而Mate20让人感动的价格也让网友直呼：iPhone再见!</p>
                <div class="text-img">
                    <img src="../img/xw_icon2.jpg" alt="">
                </div>
                <p class="text2">在发布会上，顶配旗舰华为Mate20 Pro凭借最新的麒麟980芯片以及各种花哨的黑科技一度被众多业内人士和媒体认为是最具实力挑战iPhone XS的安卓旗舰。作为华为Mate系列第一款刘海全面屏手机，其搭载的3D深度感知相机系统，使用户在移动快捷支付时，使用3D面部解锁成为现实。 据悉，该3D人脸识别功能，可支持移动安全支付及登录，3D人脸快速解锁等相关应用场景。这些黑科技的加码更促使Mate20系列手机走在了国内手机行业前端的标志。</p>
                <div class="text-img">
                    <img src="../img/xw_icon3.jpg" alt="">
                </div>
                <p class="text1">而该3D人脸识别功能是由联想创投旗下的国民认证科技提供的研发技术支持，国民认证成立于2015年，是联想集团子公司，由联想创投集团孵化，长期致力于多模生物识别技术和统一身份认证产品的开发，并推动国际FIDO标准联盟200余家企业协同合作，研发和提高符合中国市场及管理规范的统一身份认证系统（UAP）。</p>           
                <p class="text2">据了解，本次新发布的Mate20系列将搭载国民认证推出的基于FIDO标准协议的“3D安全人脸支付解决方案”。通过这一方案，华为Mate 20 Pro实现了安卓手机的“Face ID”功能；同时，该功能也将应用于中国工商银行，民生银行和中信银行等手机客户端，并率先支持刷脸登录和支付，这也成为华为Mate20系列的一大卖点之一。同时，国民认证也将陆续与其他金融及相关领域展开3D人脸识别的相关合作，进一步推动3D人脸识别功能的应用。</p>
                <p class="text1">自2015年开始，国民认证就与华为展开合作，华为目前所有存量Mate/荣耀/P系列机型都已搭载了由国民认证推出的基于FIDO的指纹安全支付解决方案。</p>
                <p class="text2">而本次Mate20搭载的3D人脸解决方案，具有毫秒急速解锁和百万分之一精度的安全支付功能，其突出优势在于：</p>
                <p class="text1">1） 与其他生物识别方式相比，具有精准度更高、环境稳定性更强、防伪稳定性高、实用性强等特点， 应用于登录及支付场景中，可在手机上完成快速、准确、安全的身份鉴别环节。</p>
                <p class="text1">2） 相比于传统的人脸识别，华为Mate20使用的3D结构光技术可应用于安全登录，支付和转账等众多场景。其中最重要的应用是安全支付和转账，也就是“刷脸支付”。这其中对于芯片，算法，摄像头等在内的各个环节均要求极高的技术要求和严格的质量控制。</p>
                <p class="text2"> 国民认证基于FIDO的“3D安全人脸支付解决方案”，借鉴于FIDO兼容性强，扩展度高的特性，能很大程度上降低应用方的接入成本。FIDO联盟（Fast Identity Online）为国际性行业组织，其宗旨为满足市场需求和实现线上快速身份认证，提供首个开放行业标准，以提高安全性、保护隐私及简化用户体验，其技术标准的可扩展性极强，从早期的指纹识别扩展到如今的3D人脸识别，通过连接产业上下游解决了身份鉴别领域的“孤岛”问题及移动互联网时代身份鉴别系统“安全、便捷、隐私保护”的问题。</p>
                <p class="text2">此次国民认证与华为联手打造国内3D人脸识别， 将快速推进3D人脸识别在国内移动互联网的应用与普及，并加速国内移动支付领域的发展与创新。</p>
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
    .jourpage-one{
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
                font-size: 28px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 500;
            }
        }
        .content-texts{
            font-size: 20px;
            .text1{
                text-indent:2em;
                font-weight: 600;
                padding: 0 0 30px;
                color: #000;
            }
            .text2{
                text-indent:2em;
                padding: 0 0 30px;
                color: #000;
            }
        }
    }
</style>

