<template>
    <div class="jourpage-two">
        <img src="../img/xw_icon1.jpg" alt="">
        <div class="content">
            <div class="title">国民动态</div>
            <div class="title-s">
                <p>生物识别身份鉴别将有统一国家标准，国民认证参与研制，助推产业化</p>
            </div>
            <div class="content-texts">
                <p class="text1">昨日，《信息安全技术基于可信环境的生物特征识别身份鉴别协议框架》等6项信息安全领域的国家标准正式发布，并将于2019年5月1日正式实施。</p>
                <p class="text1">本标准由中国科学院数据与通信保护研究教育中心牵头研制，由联想（北京）有限公司、银联、浙江蚂蚁小微金融服务集团有限公司、北京数字认证股份有限公司、国民认证科技（北京）有限公司等参与研制。</p>
                <p class="text1">在即将到来的第49届世界标准日（10月14日）前夕，国家市场监督管理总局、国家标准化管理委员会批准发布了23项国家标准，涉及公共安全等多个领域。至此，指纹、面部识别等生物特征识别身份鉴别技术将有统一的国家标准。据了解，该标准完全兼容国际FIDO标准协议，并充分遵守《中华人民共和国电子签名法》等相关法律规定。</p>
                <p class="text1">生物识别市场高速增长已成共识，但其广泛普及的前提是标准化落地。标准化工作在我国科技经济和社会发展中具有重要的战略地位。在万物互联时代来临之际，生物识别有望成为广泛应用的底层基础设施。因此，推动生物识别身份鉴别国家标准的出台，不仅是企业发展的需要，产业协同发展的需要，更是响应国家战略的选择。</p>
                <p class="text1">国民认证作为国内多模统一生物识别身份认证服务提供商，自创建以来，一直积极联合产业链上下游，促进发挥产学研用的共同作用，基于新型的生物识别身份认证技术，构建便捷、安全、可信赖的网络基础服务，并推动国际FIDO标准在国内市场的落地与应用，通过多种技术创新，研发，提供符合中国市场及管理规范的统一身份认证平台（UAP）。《信息安全技术基于可信环节的生物特征识别身份鉴别协议框架》标准的研制也是国民认证在推动生物识别产业链上下游标准化，促使产业协同发展的重要工作成果。</p>
                <p class="text1">据介绍，新国标规范生物特征识别身份鉴别，适用于生物特征识别身份鉴别服务与产品的开发、测试和评估。标准注重保证算法的安全性、协议的安全性、个人信息的有效保护等。</p>
                <p class="text1">中国电子信息技术标准化研究院信息安全研究中心主任刘贤刚表示，现在指纹识别、面部识别等生物特征识别身份技术和产品越来越多，但安全性参差不齐，有些小厂家的身份鉴别系统甚至缺乏必要的安全保障。从国家层面建立统一的标准，确保基本的安全性和更好的互联互通性能，不仅可以减少用户在防伪防欺骗等方面的消耗，而且提高了网络可信空间的安全性。</p>
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
    .jourpage-two{
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

