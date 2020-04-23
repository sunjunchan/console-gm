<template>
    <div class="page5">
        <div class=WordSection1 style='layout-grid:15.6pt'>

        <h1><span style='color:#2E74B5'>PUSH<span lang=ZH-CN>集成说明</span></span></h1>

        <p class=MsoNormal><span style='font-size:11.5pt;font-family:SimSun;color:#333333;
        letter-spacing:.4pt;background:white'>PUSH<span lang=ZH-CN>由服务端</span>API<span
        lang=ZH-CN>和客户端</span>SDK<span lang=ZH-CN>两部分组成：</span></span></p>

        <p class=MsoListParagraph style='margin-left:36.0pt;text-indent:-18.0pt'><span
        style='font-size:11.5pt;font-family:Symbol;color:#333333;letter-spacing:.4pt'>·<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
        style='font-size:11.5pt;font-family:SimSun;color:#333333;letter-spacing:.4pt;
        background:white'>PUSH<span lang=ZH-CN>服务主要功能：管理推送信息、管理用户公钥信息</span></span></p>

        <p class=MsoListParagraph style='margin-left:36.0pt;text-indent:-18.0pt'><span
        style='font-size:11.5pt;font-family:Symbol;color:#333333;letter-spacing:.4pt'>·<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
        style='font-size:11.5pt;font-family:SimSun;color:#333333;letter-spacing:.4pt;
        background:white'>PUSH<span lang=ZH-CN>客户端</span>SDK<span lang=ZH-CN>主要功能：建立推送通道、安全存储用户私钥、界面</span>UI<span
        lang=ZH-CN>供用户确认</span></span></p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>整体结构</span></b></p>

        <p class=MsoNormal align=center style='text-align:center;background:white'><span
        style='font-size:11.5pt;font-family:SimSun;color:#333333;letter-spacing:.4pt'><img
        width=377 height=138 id="Picture 4" src="../img/cloudpush架构.png"></span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:11.5pt;
        font-family:SimSun;color:#333333;letter-spacing:.4pt'>PUSH SDK<span lang=ZH-CN>集成于应用程序客户端中，同</span>PUSH<span
        lang=ZH-CN>服务采用直连模式。</span></span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:11.5pt;
        font-family:SimSun;color:#333333;letter-spacing:.4pt'>PUSH <span lang=ZH-CN>服务通过</span>RESTFUL
        API<span lang=ZH-CN>方式供应用服务端、</span>PUSH SDK<span lang=ZH-CN>调用。</span></span></p>

        <p class=MsoNormal style='background:white'><b><span style='font-size:18.0pt;
        font-family:SimSun;color:#666666;letter-spacing:.4pt'>&nbsp;</span></b></p>

        <p class=MsoNormal style='background:white'><span lang=ZH-CN style='font-size:
        11.5pt;font-family:DengXian;color:#333333;letter-spacing:.4pt'>我们以常见的</span><span
        style='font-size:11.5pt;font-family:"Helvetica Neue";color:#333333;letter-spacing:
        .4pt'>WEB</span><span lang=ZH-CN style='font-size:11.5pt;font-family:DengXian;
        color:#333333;letter-spacing:.4pt'>浏览器登录为例，介绍注册、认证流程。</span></p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>注册流程</span></b></p>

        <p class=MsoNormal style='background:white'><span lang=ZH-CN style='font-size:
        11.5pt;font-family:DengXian;color:#333333;letter-spacing:.4pt'>由客户端完成注册：</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:11.5pt;
        font-family:"Helvetica Neue";color:#333333;letter-spacing:.4pt'><img width=449
        height=326 id="Picture 2" src="../img/Cloudpushreg.png"></span></p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>认证流程</span></b></p>

        <p class=MsoNormal style='background:white'><span lang=ZH-CN style='font-size:
        11.5pt;font-family:DengXian;color:#333333;letter-spacing:.4pt'>用户在</span><span
        style='font-size:11.5pt;font-family:"Helvetica Neue";color:#333333;letter-spacing:
        .4pt'>Web</span><span lang=ZH-CN style='font-size:11.5pt;font-family:DengXian;
        color:#333333;letter-spacing:.4pt'>端登录，在手机侧收到</span><span style='font-size:
        11.5pt;font-family:"Helvetica Neue";color:#333333;letter-spacing:.4pt'>PUSH</span><span
        lang=ZH-CN style='font-size:11.5pt;font-family:DengXian;color:#333333;
        letter-spacing:.4pt'>消息，点击确认后</span><span style='font-size:11.5pt;font-family:
        "Helvetica Neue";color:#333333;letter-spacing:.4pt'>Web</span><span lang=ZH-CN
        style='font-size:11.5pt;font-family:DengXian;color:#333333;letter-spacing:.4pt'>端登录</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:11.5pt;
        font-family:"Helvetica Neue";color:#333333;letter-spacing:.4pt'><img width=453
        height=242 id="Picture 6" src="../img/cloudpushauth.png"></span></p>

        <p class=MsoNormal>&nbsp;</p>

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
    .page5{
        @font-face
            {font-family:Wingdings;
            panose-1:5 0 0 0 0 0 0 0 0 0;}
        @font-face
            {font-family:SimSun;
            panose-1:2 1 6 0 3 1 1 1 1 1;}
        @font-face
            {font-family:"Cambria Math";
            panose-1:2 4 5 3 5 4 6 3 2 4;}
        @font-face
            {font-family:DengXian;
            panose-1:2 1 6 0 3 1 1 1 1 1;}
        @font-face
            {font-family:Monaco;
            panose-1:0 0 0 0 0 0 0 0 0 0;}
        @font-face
            {font-family:"Helvetica Neue";
            panose-1:2 0 5 3 0 0 0 2 0 4;}
        @font-face
            {font-family:"\@DengXian";
            panose-1:2 1 6 0 3 1 1 1 1 1;}
        @font-face
            {font-family:"\@SimSun";
            panose-1:2 1 6 0 3 1 1 1 1 1;}
        /* Style Definitions */
        p.MsoNormal, li.MsoNormal, div.MsoNormal
            {margin:0cm;
            margin-bottom:.0001pt;
            font-size:12.0pt;
            font-family:"Times New Roman",serif;}
        h1
            {mso-style-link:"Heading 1 Char";
            margin-top:17.0pt;
            margin-right:0cm;
            margin-bottom:16.5pt;
            margin-left:0cm;
            text-align:justify;
            text-justify:inter-ideograph;
            line-height:240%;
            page-break-after:avoid;
            font-size:22.0pt;
            font-family:DengXian;}
        h2
            {mso-style-link:"Heading 2 Char";
            margin-top:13.0pt;
            margin-right:0cm;
            margin-bottom:13.0pt;
            margin-left:0cm;
            text-align:justify;
            text-justify:inter-ideograph;
            line-height:173%;
            page-break-after:avoid;
            font-size:16.0pt;
            font-family:"DengXian Light";}
        p.MsoCommentText, li.MsoCommentText, div.MsoCommentText
            {mso-style-link:"Comment Text Char";
            margin:0cm;
            margin-bottom:.0001pt;
            font-size:12.0pt;
            font-family:"Times New Roman",serif;}
        p.MsoHeader, li.MsoHeader, div.MsoHeader
            {mso-style-link:"Header Char";
            margin:0cm;
            margin-bottom:.0001pt;
            text-align:center;
            layout-grid-mode:char;
            border:none;
            padding:0cm;
            font-size:9.0pt;
            font-family:DengXian;}
        p.MsoFooter, li.MsoFooter, div.MsoFooter
            {mso-style-link:"Footer Char";
            margin:0cm;
            margin-bottom:.0001pt;
            layout-grid-mode:char;
            font-size:9.0pt;
            font-family:DengXian;}
        a:link, span.MsoHyperlink
            {color:blue;
            text-decoration:underline;}
        a:visited, span.MsoHyperlinkFollowed
            {color:#954F72;
            text-decoration:underline;}
        p.MsoDocumentMap, li.MsoDocumentMap, div.MsoDocumentMap
            {mso-style-link:"Document Map Char";
            margin:0cm;
            margin-bottom:.0001pt;
            text-align:justify;
            text-justify:inter-ideograph;
            font-size:12.0pt;
            font-family:SimSun;}
        pre
            {mso-style-link:"HTML Preformatted Char";
            margin:0cm;
            margin-bottom:.0001pt;
            font-size:10.0pt;
            font-family:"Courier New";}
        p.MsoCommentSubject, li.MsoCommentSubject, div.MsoCommentSubject
            {mso-style-link:"Comment Subject Char";
            margin:0cm;
            margin-bottom:.0001pt;
            font-size:12.0pt;
            font-family:"Times New Roman",serif;
            font-weight:bold;}
        p.MsoAcetate, li.MsoAcetate, div.MsoAcetate
            {mso-style-link:"Balloon Text Char";
            margin:0cm;
            margin-bottom:.0001pt;
            font-size:9.0pt;
            font-family:SimSun;}
        p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph
            {margin:0cm;
            margin-bottom:.0001pt;
            text-indent:21.0pt;
            font-size:12.0pt;
            font-family:"Times New Roman",serif;}
        span.Heading1Char
            {mso-style-name:"Heading 1 Char";
            mso-style-link:"Heading 1";
            font-weight:bold;}
        span.DocumentMapChar
            {mso-style-name:"Document Map Char";
            mso-style-link:"Document Map";
            font-family:SimSun;}
        span.Heading2Char
            {mso-style-name:"Heading 2 Char";
            mso-style-link:"Heading 2";
            font-family:"DengXian Light";
            font-weight:bold;}
        span.HeaderChar
            {mso-style-name:"Header Char";
            mso-style-link:Header;}
        span.FooterChar
            {mso-style-name:"Footer Char";
            mso-style-link:Footer;}
        span.CommentTextChar
            {mso-style-name:"Comment Text Char";
            mso-style-link:"Comment Text";
            font-family:"Times New Roman",serif;}
        span.CommentSubjectChar
            {mso-style-name:"Comment Subject Char";
            mso-style-link:"Comment Subject";
            font-family:"Times New Roman",serif;
            font-weight:bold;}
        span.BalloonTextChar
            {mso-style-name:"Balloon Text Char";
            mso-style-link:"Balloon Text";
            font-family:SimSun;}
        span.HTMLPreformattedChar
            {mso-style-name:"HTML Preformatted Char";
            mso-style-link:"HTML Preformatted";
            font-family:"Courier New";}
        p.p1, li.p1, div.p1
            {mso-style-name:p1;
            margin:0cm;
            margin-bottom:.0001pt;
            font-size:8.5pt;
            font-family:Monaco;
            color:#4E9072;}
        span.opdicttext2
            {mso-style-name:op_dict_text2;}
        .MsoChpDefault
            {font-family:DengXian;}
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