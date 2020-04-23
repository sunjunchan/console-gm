<template>
    <div class="page14">
        <div class=WordSection1 style='layout-grid:15.6pt'>

        <h1><span lang=EN-US style='color:#2E74B5'>认证平台简介</span></h1>

        <p class=MsoNormal><span lang=EN-US style='font-size:11.5pt;font-family:宋体;
        color:#333333;letter-spacing:.4pt;background:white'>CMAS</span><span
        style='font-size:11.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt;
        background:white'>是经过考验的企业级线上认证平台，每天完成认证次数上亿。开发者集成后，可以使用指纹、人脸、<span lang=EN-US>OTP</span>、<span
        lang=EN-US>PUSH</span>等认证能力，提升用户体验和系统安全。同时，<span lang=EN-US>CMAS</span>提供可视化的<span
        lang=EN-US>web</span>端控制台，提供用户管理、统计分析认证效果。<span lang=EN-US>CMAS</span>全面支持<span
        lang=EN-US>Android</span>、<span lang=EN-US>iOS</span>、<span lang=EN-US>Windows</span>三大硬件平台和<span
        lang=EN-US>Web</span>端。</span></p>

        <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

        <div style='border:none;border-bottom:solid #E5E5E5 1.0pt;padding:0cm 0cm 3.0pt 0cm;
        background:white'>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        18.0pt;margin-left:0cm;background:white;border:none;padding:0cm'><b><span
        style='font-size:18.0pt;font-family:宋体;color:#666666;letter-spacing:.4pt'>认证方式</span></b></p>

        </div>

        <p class=MsoNormal style='background:white'><span lang=EN-US style='font-size:
        11.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>CMAS</span><span
        style='font-size:11.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>提供四种认证方式：生物特征认证、<span
        lang=EN-US>OTP</span>一次性验证码、手机<span lang=EN-US>PUSH</span>认证和硬件<span
        lang=EN-US>Key</span>。</span></p>

        <p class="cur" @click="change('page4')" style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span style='font-size:15.0pt;
        font-family:宋体;color:#1B75BB;letter-spacing:.4pt'>UAF认证</span></b></p>

        <p class=MsoNormal style='background:white'><span style='font-size:11.5pt;
        font-family:宋体;color:#333333;letter-spacing:.4pt'>指使用硬件设备的指纹传感器、人脸摄像头，对用户进行验证，最终由线上服务授权。这种认证方式支持<span
        lang=EN-US>Native</span>应用和<span lang=EN-US>Web</span>应用，安全性高、体验佳，主要用于高频场景的登录、支付、签章等多种场景。</span></p>

        <p class="cur" @click="change('page4')" style='background:white'><span style='font-size:11.5pt;
        font-family:宋体;color:#333333;letter-spacing:.4pt'>开发者参考文档：</span><span
        lang=EN-US style='color:black'><span
        style='font-size:11.5pt;font-family:"Helvetica Neue";color:#337AB7;letter-spacing:
        .4pt;text-decoration:none'>Bio API v1</span></span></p>

        <p class="cur MsoNormal" @click="change('page1')" style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=EN-US style='font-size:
        15.0pt;font-family:宋体;color:#1B75BB;letter-spacing:.4pt'>OTP</span></b><b><span
        style='font-size:15.0pt;font-family:宋体;color:#1B75BB;letter-spacing:.4pt'>认证</span></b></p>

        <p class=MsoNormal style='background:white'><span lang=EN-US style='font-size:
        11.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>OTP</span><span
        style='font-size:11.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>认证即一次性验证码，验证码依赖用户种子数据、当前时间。</span><span
        style='font-size:11.5pt;font-family:"Helvetica Neue";color:#333333;letter-spacing:
        .4pt'> </span><span style='font-size:11.5pt;font-family:宋体;color:#333333;
        letter-spacing:.4pt'>自定义消息主要用于应用的内部业务逻辑。一条自定义消息推送过来，有可能没有任何界面显示。</span></p>

        <p class="cur MsoNormal" @click="change('page1')" style='background:white'><span style='font-size:11.5pt;
        font-family:宋体;color:#333333;letter-spacing:.4pt'>开发者参考文档：</span><span
        lang=EN-US style='color:black'><span
        style='font-size:11.5pt;font-family:"Helvetica Neue";color:#337AB7;letter-spacing:
        .4pt;text-decoration:none'>OTP API v1 message</span></span></p>

        <p class="cur MsoNormal" @click="change('page2')" style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=EN-US style='font-size:
        15.0pt;font-family:宋体;color:#1B75BB;letter-spacing:.4pt'>PUSH</span></b><b><span
        style='font-size:15.0pt;font-family:宋体;color:#1B75BB;letter-spacing:.4pt'>认证</span></b></p>

        <p class=MsoNormal style='background:white'><span lang=EN-US style='font-size:
        11.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>PUSH</span><span
        style='font-size:11.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>认证，基于用户手机存储种子数据。当用户在其它平台进行登录认证时，可以通过推送告知用户，再进行确认。</span></p>

        <p class="cur MsoNormal" @click="change('page2')" style='background:white'><span style='font-size:11.5pt;
        font-family:宋体;color:#333333;letter-spacing:.4pt'>开发者参考文档：</span><span
        lang=EN-US style='color:black'><span
        style='font-size:11.5pt;font-family:"Helvetica Neue";color:#337AB7;letter-spacing:
        .4pt;text-decoration:none'>Push API v1 message</span></span></p>

        <p class="cur MsoNormal" @click="change('page3')" style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span style='font-size:15.0pt;
        font-family:宋体;color:#1B75BB;letter-spacing:.4pt'>FIDO2<span lang=EN-US></span>认证</span></b></p>

        <p class=MsoNormal style='background:white'><span style='font-size:11.5pt;
        font-family:宋体;color:#333333;letter-spacing:.4pt'>硬件<span lang=EN-US>key</span>认证，基于<span
        lang=EN-US>key</span>中存储的用户密钥信息。可以支持浏览器、<span lang=EN-US>Native</span>应用。</span></p>

        <p class="cur MsoNormal" @click="change('page2')" style='background:white'><span style='font-size:11.5pt;
        font-family:宋体;color:#333333;letter-spacing:.4pt'>开发者参考文档：</span><span
        lang=EN-US style='color:black'><span
        style='font-size:11.5pt;font-family:"Helvetica Neue";color:#337AB7;letter-spacing:
        .4pt;text-decoration:none'>Webauthn API v1 message</span></span></p>

        <p class=MsoNormal style='background:white'><span lang=EN-US style='font-size:
        11.5pt;font-family:"Helvetica Neue";color:#333333;letter-spacing:.4pt'>&nbsp;</span></p>

        <div style='border:none;border-bottom:solid #E5E5E5 1.0pt;padding:0cm 0cm 3.0pt 0cm;
        background:white'>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        18.0pt;margin-left:0cm;background:white;border:none;padding:0cm'><a
        name="rich_push"></a><b><span style='font-size:18.0pt;font-family:宋体;
        color:#666666;letter-spacing:.4pt'>快速开始</span></b></p>

        </div>

        <ul type=disc>
        <li class=MsoNormal style='color:#333333;background:white' @click="gozc"><span
            style='font-size:11.5pt;font-family:宋体;letter-spacing:.4pt'>到认证平台官方网站</span><span
            lang=EN-US style='color:black'><a
            ><span lang=EN-US
            style='font-size:11.5pt;font-family:宋体;color:#337AB7;letter-spacing:.4pt;
            text-decoration:none'><span lang=EN-US>申请</span></span><span lang=EN-US
            style='font-size:11.5pt;font-family:宋体;color:#337AB7;letter-spacing:.4pt;
            text-decoration:none'><span lang=EN-US>开发者帐号</span></span></a></span><span
            style='font-size:11.5pt;font-family:宋体;letter-spacing:.4pt'>；</span></li>
        <li class=MsoNormal style='color:#333333;background:white' @click="gologin()"><span lang=EN-US
            style='color:black'><a href=""><span
            lang=EN-US style='font-size:11.5pt;font-family:宋体;color:#337AB7;
            letter-spacing:.4pt;text-decoration:none'><span lang=EN-US>登录</span></span></a></span><span
            style='font-size:11.5pt;font-family:宋体;letter-spacing:.4pt'>进入控制台，获取<span
            lang=EN-US>userKey</span>和<span lang=EN-US>Secret</span>，登记服务和应用；</span></li>
        <li class=MsoNormal style='color:#333333;background:white'><span
            style='font-size:11.5pt;font-family:宋体;letter-spacing:.4pt'>查看</span><span
            class=MsoHyperlink><span class="cur" @click="change('page')" style='font-family:宋体;color:#337AB7;text-decoration:
            none'>平台接口文档</span></span><span style='font-size:11.5pt;font-family:宋体;
            letter-spacing:.4pt'>和对应服务的接口文档，了解平台对接详情；</span></li>
        </ul>

        <div style='border:none;border-bottom:solid #E5E5E5 1.0pt;padding:0cm 0cm 3.0pt 0cm;
        background:white'>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        18.0pt;margin-left:0cm;background:white;border:none;padding:0cm'><b><span
        style='font-size:18.0pt;font-family:宋体;color:#666666;letter-spacing:.4pt'>技术支持</span></b></p>

        </div>

        <p class=MsoNormal style='background:white'><span style='font-size:11.5pt;
        font-family:宋体;color:#333333;letter-spacing:.4pt'>当出现问题时：</span></p>

        <ul type=disc>
        <li class=MsoNormal style='color:#333333;background:white'><span
            style='font-size:11.5pt;font-family:宋体;letter-spacing:.4pt'>请仔细阅读文档，查看是否有遗漏。</span><span
            lang=EN-US style='font-size:11.5pt;font-family:"Helvetica Neue";
            letter-spacing:.4pt'>&nbsp;</span><span lang=EN-US style='color:black'><a
            ><span
            style='font-size:11.5pt;font-family:"Helvetica Neue";color:#337AB7;
            letter-spacing:.4pt;text-decoration:none'></span></a></span><span
            lang=EN-US style='font-size:11.5pt;font-family:"Helvetica Neue";
            letter-spacing:.4pt'>&nbsp;</span><span style='font-size:11.5pt;
            font-family:宋体;letter-spacing:.4pt'>、</span><span lang=EN-US
            style='font-size:11.5pt;font-family:"Helvetica Neue";letter-spacing:.4pt'>&nbsp;</span><span
            lang=EN-US style='color:black'><a
            ><span
            style='font-size:11.5pt;font-family:"Helvetica Neue";color:#337AB7;
            letter-spacing:.4pt;text-decoration:none'></span></a></span></li>
        <li class=MsoNormal style='color:#333333;background:white'><span
            style='font-size:11.5pt;font-family:宋体;letter-spacing:.4pt'>给我们的</span><span
            lang=EN-US style='font-size:11.5pt;font-family:"Helvetica Neue";
            letter-spacing:.4pt'> support </span><span style='font-size:11.5pt;
            font-family:宋体;letter-spacing:.4pt'>发邮件</span><span lang=EN-US
            style='font-size:11.5pt;font-family:"Helvetica Neue";letter-spacing:.4pt'>
            support@gmrz-bj.com</span></li>
        </ul>

        </div>
    </div>
</template>
<script>
export default {
    created(){
        scrollTo(0,0);
    },
    methods:{
        gozc(){
            let routeData = this.$router.resolve({
                path:`/register`   
            });
            window.open(routeData.href, '_blank');
        },
        gologin(){
            let routeData = this.$router.resolve({
                path:`/login`   
            });
            window.open(routeData.href, '_blank');
        },
        change(name){
            this.$emit("changepage",name)
        }
    }
}
</script>
<style lang="less">
    .page14{
        .cur{
            cursor: pointer;
        }
        @font-face
            {font-family:Wingdings;
            panose-1:5 0 0 0 0 0 0 0 0 0;}
        @font-face
            {font-family:宋体;
            panose-1:2 1 6 0 3 1 1 1 1 1;}
        @font-face
            {font-family:"Cambria Math";
            panose-1:2 4 5 3 5 4 6 3 2 4;}
        @font-face
            {font-family:等线;
            panose-1:2 1 6 0 3 1 1 1 1 1;}
        @font-face
            {font-family:Monaco;}
        @font-face
            {font-family:"Helvetica Neue";}
        @font-face
            {font-family:"\@宋体";
            panose-1:2 1 6 0 3 1 1 1 1 1;}
        @font-face
            {font-family:"\@等线";
            panose-1:2 1 6 0 3 1 1 1 1 1;}
        /* Style Definitions */
        p.MsoNormal, li.MsoNormal, div.MsoNormal
            {margin:0cm;
            margin-bottom:.0001pt;
            font-size:12.0pt;
            font-family:"Times New Roman",serif;}
        h1
            {mso-style-link:"标题 1 字符";
            margin-top:17.0pt;
            margin-right:0cm;
            margin-bottom:16.5pt;
            margin-left:0cm;
            text-align:justify;
            text-justify:inter-ideograph;
            line-height:240%;
            page-break-after:avoid;
            font-size:22.0pt;
            font-family:等线;
            font-weight:bold;}
        a:link, span.MsoHyperlink
            {color:blue;
            text-decoration:underline;}
        span.1
            {mso-style-name:"标题 1 字符";
            mso-style-link:"标题 1";
            font-weight:bold;}
        .MsoChpDefault
            {font-size:10.0pt;
            font-family:等线;}
        /* Page Definitions */
        @page WordSection1
            {size:595.0pt 842.0pt;
            margin:72.0pt 90.0pt 72.0pt 90.0pt;
            layout-grid:15.6pt;}
        div.WordSection1
            {page:WordSection1;}
        /* List Definitions */
        ol
            {margin-bottom:0cm;}
        ul
            {margin-bottom:0cm;}
    }
</style>