<template>
    <div class="page1">
        <h1 style="font-size:28px;margin:10px 0 10px;color:#1B75BB">多因素CMAS认证产品简介</h1>
        <p>
            <span style="color:#333333">CMAS</span>
            <span style="color:#333333">是经过考验的企业级线上认证平台，每天完成认证次数上亿。开发者集成</span>
            <span style="color:#333333">SDK</span>
            <span style="color:#333333">后，可以使用指纹、人脸、</span>
            <span style="color:#333333">OTP</span>
            <span style="color:#333333">、</span>
            <span style="color:#333333">PUSH</span>
            <span style="color:#333333">等认证能力，提升用户体验和系统安全。同时，</span>
            <span style="color:#333333">CMAS</span>
            <span style="color:#333333">提供可视化的</span>
            <span style="color:#333333">web</span>
            <span style="color:#333333">端控制台，提供用户管理、统计分析认证效果。</span>
            <span style="color:#333333">CMAS</span>
            <span style="color:#333333">全面支持</span>
            <span style="color:#333333">Android</span>
            <span style="color:#333333">、</span>
            <span style="color:#333333">iOS</span>
            <span style="color:#333333">、</span>
            <span style="color:#333333">Windows</span>
            <span style="color:#333333">三大硬件平台和</span>
            <span style="color:#333333">Web</span>
            <span style="color:#333333">端。</span></p>
        <p>
        <span style="color:#666666">
            <strong>认证方式</strong></span>
        </p>
        <p>
            <span style="color:#333333">CMAS</span>
            <span style="color:#333333">提供四种认证方式：生物特征认</span>
            <span style="color:#333333">证，</span>
            <span style="color:#333333">OTP</span>
            <span style="color:#333333">一次性验证码，手机</span>
            <span style="color:#333333">PUSH</span>
            <span style="color:#333333">认证和硬件</span>
            <span style="color:#333333">Key</span>
            <span style="color:#333333">。</span></p>
        <p class="cur" @click="change('page4')">
        <span style="color:#1B75BB">
            <strong>UAF免密认证</strong></span>
        </p>
        <p>
            <span style="color:#333333">指使用硬件设备的指纹传感器、人脸摄像头，对用户进行验证，最终由线上服务授权。这种认证方式支持</span>
            <span style="color:#333333">Native</span>
            <span style="color:#333333">应用和</span>
            <span style="color:#333333">Web</span>
            <span style="color:#333333">应用，安全性高、体验佳，主要用于高频场景的登录、支付、签章等多种场景。</span></p>
        <p>
        <span style="color:#333333">开发者参考文档：</span>
        <a href="https://docs.jiguang.cn/jpush/server/push/rest_api_v3_push/#notification">
            <span style="color:#337AB7">Bio API v1</span></a>
        </p>
        <p class="cur" @click="change('page1')">
        <span style="color:#1B75BB">
            <strong>OTP</strong></span>
        <span style="color:#1B75BB">
            <strong>认证</strong></span>
        </p>
        <p>
            <span style="color:#333333">OTP</span>
            <span style="color:#333333">认证即一次</span>
            <span style="color:#333333">性验证码，验证码依赖用户种子数据、当前时间。</span>
            <span style="color:#333333">自定义消息主要用于应用的内部业务逻辑。一条自定义消息推送过来，有可能没有任何界面显示。</span></p>
        <p>
        <span style="color:#333333">开发者参考文档：</span>
        <a href="https://docs.jiguang.cn/jpush/server/push/rest_api_v3_push/#message">
            <span style="color:#337AB7">OTP API v1 message</span></a>
        </p>
        <p>
        <span style="color:#1B75BB" class="cur" @click="change('page2')">
            <strong>PUSH</strong></span>
        <span style="color:#1B75BB">
            <strong>认证</strong></span>
        </p>
        <p>
        <span style="color:#333333">PUSH</span>
        <span style="color:#333333">认证，基于用户手机存储种子数据。当用户在其它平台进行登录认证时，可以通过推送告知用户，再进行确认。</span></p>
        <p>
        <span style="color:#333333">开发者参考文档：</span>
        <a href="https://docs.jiguang.cn/jpush/server/push/rest_api_v3_push/#message">
            <span style="color:#337AB7">Push API v1 message</span></a>
        </p>
        <p @click="change('page3')" class="cur">
        <span style="color:#1B75BB">
            <strong>硬件</strong></span>
        <span style="color:#1B75BB">
            <strong>key</strong></span>
        <span style="color:#1B75BB">
            <strong>认证</strong></span>
        </p>
        <p>
            <span style="color:#333333">硬件</span>
            <span style="color:#333333">key</span>
            <span style="color:#333333">认证，基于</span>
            <span style="color:#333333">key</span>
            <span style="color:#333333">中存储的用户密钥信息。可以支持浏览器、</span>
            <span style="color:#333333">Native</span>
            <span style="color:#333333">应用。</span></p>
        <p>
            <span style="color:#333333">开发者参考文档：</span>
            <span style="color:#337AB7">Webauthn</span>
            <span style="color:#337AB7">API v1 message</span></p>
        <p>
        <span style="color:#666666">
            <strong>统计分析</strong></span>
        </p>
        <p>
            <span style="color:#333333">支持认证次数、注册次数的统计。</span>
            <span style="color:#333333">Android</span>
            <span style="color:#333333">开发者需要实现了相关的统计</span>
            <span style="color:#333333">API</span>
            <span style="color:#333333">，才可以进行用户相关的统计。</span>
            <span style="color:#333333">iOS</span>
            <span style="color:#333333">开发者不需要实现统计</span>
            <span style="color:#333333">API</span>
            <span style="color:#333333">，可以直接在【控制台】</span>
            <span style="color:#333333">-</span>
            <span style="color:#333333">【统计】页面查看相关数据。</span></p>
        <p>
        <span style="color:#333333">Android</span>
        <span style="color:#333333">开发者参考文档：</span>
        <a href="https://docs.jiguang.cn/jpush/client/Android/android_api/#api_4">
            <span style="color:#337AB7">统计分析</span>
            <span style="color:#337AB7">API</span></a>
        </p>
        <p>
        <span style="color:#666666">
            <strong>快速开始</strong></span>
        </p>
        <ul>
        <li>
            <span style="color:#333333">到认证平台官方网站</span>
            <a href="https://www.jiguang.cn/accounts/register">
            <span style="color:#337AB7">注册开发者帐号</span></a>
            <span style="color:#333333">；</span></li>
        <li>
            <a href="https://www.jiguang.cn/accounts/login/form">
            <span style="color:#337AB7">登录</span></a>
            <span style="color:#333333">进入管理控制台，创建应用程序，得到</span>
            <span style="color:#333333">Appkey</span>
            <span style="color:#333333">（</span>
            <span style="color:#333333">SDK</span>
            <span style="color:#333333">与服务器端通过</span>
            <span style="color:#333333">Appkey</span>
            <span style="color:#333333">互相识别）；</span></li>
        <li>
            <span style="color:#333333">在设置中给</span>
            <span style="color:#333333">Android</span>
            <span style="color:#333333">设置包名、给</span>
            <span style="color:#333333">iOS</span>
            <span style="color:#333333">上传证书，根据你的需求进行选择；</span></li>
        <li>
            <a href="https://docs.jiguang.cn/jpush/resources/">
            <span style="color:#337AB7">下载</span>
            <span style="color:#337AB7">SDK</span></a> 
            <span style="color:#333333">集成到</span>
            <span style="color:#333333">App</span>
            <span style="color:#333333">里。</span></li>
        </ul>
        <p>
        <span style="color:#666666">
            <strong>技术支持</strong></span>
        </p>
        <p>
        <span style="color:#333333">当出现问题时：</span></p>
        <ul>
        <li>
            <span style="color:#333333">请仔细阅读文档，查看是否有遗漏。</span> 
            <a href="https://docs.jiguang.cn/jpush/client/Android/android_faq/">
            <span style="color:#337AB7">Android FAQ</span></a> 
            <span style="color:#333333">、</span> 
            <a href="https://docs.jiguang.cn/jpush/client/iOS/ios_faq/">
            <span style="color:#337AB7">iOS FAQ</span></a>
        </li>
        <li>
            <span style="color:#333333">你可以到社区搜索类似问题</span></li>
        <li>
            <span style="color:#333333">给我们的</span>
            <span style="color:#333333">support</span>
            <span style="color:#333333">发邮件</span>
            <span style="color:#333333">business@gmrz-bj.com</span></li>
        </ul>
    </div>
</template>
<script>
export default {
    created(){
        scrollTo(0,0);
    },
    methods:{
        change(name){
            this.$emit("changepage",name)
        }
    }
}
</script>
<style tyle="less" lang="less">
.page1{
    .cur{
        cursor: pointer;
    }
    // padding-right: 24px;
    // height: 1000px;
    display: block;
    line-height: 300%;
    strong{
        font-size: 28px;
    }
    span{
        font-size: 15px;
    }
    .pydocx-caps {text-transform:uppercase}
    .pydocx-center {text-align:center}
    .pydocx-comment {color:blue}
    .pydocx-delete {color:red;text-decoration:line-through}
    .pydocx-hidden {visibility:hidden}.pydocx-insert {color:green}
    .pydocx-left {text-align:left}
    .pydocx-list-style-type-cardinalText {list-style-type:decimal}
    .pydocx-list-style-type-decimal {list-style-type:decimal}
    .pydocx-list-style-type-decimalEnclosedCircle {list-style-type:decimal}
    .pydocx-list-style-type-decimalEnclosedFullstop {list-style-type:decimal}
    .pydocx-list-style-type-decimalEnclosedParen {list-style-type:decimal}
    .pydocx-list-style-type-decimalZero {list-style-type:decimal-leading-zero}
    .pydocx-list-style-type-lowerLetter {list-style-type:lower-alpha}
    .pydocx-list-style-type-lowerRoman {list-style-type:lower-roman}
    .pydocx-list-style-type-none {list-style-type:none}
    .pydocx-list-style-type-ordinalText {list-style-type:decimal}
    .pydocx-list-style-type-upperLetter {list-style-type:upper-alpha}
    .pydocx-list-style-type-upperRoman {list-style-type:upper-roman}
    .pydocx-right {text-align:right}
    .pydocx-small-caps {font-variant:small-caps}
    .pydocx-strike {text-decoration:line-through}
    .pydocx-tab {display:inline-block;width:4em}
    .pydocx-underline {text-decoration:underline}
    body {margin:0px auto;width:49.58em}
}
</style>