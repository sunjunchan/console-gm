<template>
    <div class="page2">
        <h1 style="font-size:28px;margin:10px 0 10px;color:#1B75BB">OTP集成说明</h1>
        <p>
        <span style="color:#333333">OTP</span>
        <span style="color:#333333">由服务端API和客户端SDK两部分组成：</span></p>
        <ul>
        <li>
            <span style="color:#333333">OTP</span>
            <span style="color:#333333">服务</span>
            <span style="color:#333333">主要功能：生成OTP种子、验证OTP、管理OTP</span></li>
        <li>
            <span style="color:#333333">OTP</span>
            <span style="color:#333333">客户端</span>
            <span style="color:#333333">SDK</span>
            <span style="color:#333333">主要功能：安全存储OTP种子、生成OTP</span></li>
        </ul>
        <p>
        <span style="color:#1B75BB">
            <strong>整体结构</strong></span>
        </p>
        <p>
        <span class="pydocx-center">
            <span style="color:#333333">
            <img height="177px" src="../img/img1.png"
            width="482px" />
            </span>
        </span>
        </p>
        <p>
        <span style="color:#333333">OTP</span>
        <span style="color:#333333">SDK集成于应用程序客户端中，作为安全组件，管理手机端OTP种子。</span></p>
        <p>
        <span style="color:#333333">OTP</span>
        <span style="color:#333333">服务通过RESTFUL</span>
        <span style="color:#333333">API方式由应用服务端调用。</span></p>
        <p>
        <span style="color:#333333">我们以常见的</span>
        <span style="color:#333333">WEB</span>
        <span style="color:#333333">浏览器使用</span>
        <span style="color:#333333">OTP</span>
        <span style="color:#333333">为例。</span></p>
        <p>
        <span style="color:#1B75BB">
            <strong>注册流程</strong></span>
        </p>
        <p>
        <span style="color:#333333">常见的</span>
        <span style="color:#333333">两种形式：</span></p>
        <ul>
        <li>
            <span style="color:#333333">手机端直接链接服务端进行注册</span></li>
        <li>
            <span style="color:#333333">由</span>
            <span style="color:#333333">web</span>
            <span style="color:#333333">端显示二维码，手机端扫码注册</span></li>
        </ul>
        <p>
        <span style="color:#333333">
            <img height="577px" src="../img/img2.png"
            width="553px" />
        </span>
        </p>
        <p>
        <span style="color:#1B75BB">
            <strong>认证</strong></span>
        <span style="color:#1B75BB">
            <strong>流程</strong></span>
        </p>
        <p>
        <span style="color:#333333">用户在</span>
        <span style="color:#333333">Web</span>
        <span style="color:#333333">端登录，输入手机上</span>
        <span style="color:#333333">OTP</span></p>
        <p>
        <span style="color:#333333">
            <img height="297px" src="../img/img3.png"
            width="553px" />
        </span>
        </p>
    </div>
</template>
<script>
export default {
    created(){
        scrollTo(0,0);
    }
}
</script>
<style tyle="less" lang="less">
.page2{
    padding-right: 24px;
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
  .pydocx-hidden {visibility:hidden}
  .pydocx-insert {color:green}
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
  .pydocx-right {text-align:right}.pydocx-small-caps {font-variant:small-caps}
  .pydocx-strike {text-decoration:line-through}
  .pydocx-tab {display:inline-block;width:4em}
  .pydocx-underline {text-decoration:underline}
  body {margin:0px auto;width:49.58em}
}
  </style>