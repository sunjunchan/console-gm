<template>
    <div class="page16">
        <div class=WordSection1 style='layout-grid:15.6pt'>

        <h1><span style='font-family:宋体;color:#2E74B5'>平台鉴权</span></h1>

        <p class=MsoNormal><span lang=EN-US style='font-size:11.5pt;font-family:宋体;
        color:#333333;letter-spacing:.4pt;background:white'>accessToken</span><span
        style='font-size:11.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt;
        background:white'>是平台鉴权机制，当进行<span lang=EN-US>RESTFUL API</span>操作时，需要在调用接口传入此参数。<span
        lang=EN-US>token</span>由服务器计算，应用可以通过<span lang=EN-US>accessToken</span>接口进行获取。</span></p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span style='font-size:15.0pt;
        font-family:宋体;color:#1B75BB;letter-spacing:.4pt'>接口地址</span></b></p>

        <p class=MsoNormal style='background:white'><span lang=EN-US style='font-size:
        11.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>https://api.nationauth.cn/access/token/get</span></p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span style='font-size:15.0pt;
        font-family:宋体;color:#1B75BB;letter-spacing:.4pt'>参数</span></b></p>

        <table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width="100%"
        style='width:100.0%;background:white;border-collapse:collapse'>
        <tr style='height:34.5pt'>
        <td width="21%" valign=top style='width:21.96%;border:solid #DDDDDD 1.0pt;
        background:#F3F4F6;padding:6.0pt 6.0pt 6.0pt 6.0pt;height:34.5pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><b><span style='font-size:
        10.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>关键字</span></b></p>
        </td>
        <td width="17%" valign=top style='width:17.2%;border:solid #DDDDDD 1.0pt;
        border-left:none;background:#F3F4F6;padding:6.0pt 6.0pt 6.0pt 6.0pt;
        height:34.5pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><b><span style='font-size:
        10.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>选项</span></b></p>
        </td>
        <td width="60%" valign=top style='width:60.84%;border:solid #DDDDDD 1.0pt;
        border-left:none;background:#F3F4F6;padding:6.0pt 6.0pt 6.0pt 6.0pt;
        height:34.5pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><b><span style='font-size:
        10.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>含义</span></b></p>
        </td>
        </tr>
        <tr style='height:30.0pt'>
        <td width="21%" valign=top style='width:21.96%;border:solid #DDDDDD 1.0pt;
        border-top:none;padding:6.0pt 6.0pt 6.0pt 6.0pt;height:30.0pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><span lang=EN-US
        style='font-size:10.5pt;font-family:"Helvetica Neue";color:#333333;
        letter-spacing:.4pt'>clientTime</span></p>
        </td>
        <td width="17%" valign=top style='width:17.2%;border-top:none;border-left:
        none;border-bottom:solid #DDDDDD 1.0pt;border-right:solid #DDDDDD 1.0pt;
        padding:6.0pt 6.0pt 6.0pt 6.0pt;height:30.0pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><span style='font-size:10.5pt;
        font-family:宋体;color:#333333;letter-spacing:.4pt'>必填</span></p>
        </td>
        <td width="60%" valign=top style='width:60.84%;border-top:none;border-left:
        none;border-bottom:solid #DDDDDD 1.0pt;border-right:solid #DDDDDD 1.0pt;
        padding:6.0pt 6.0pt 6.0pt 6.0pt;height:30.0pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><span style='font-size:10.5pt;
        font-family:宋体;color:#333333;letter-spacing:.4pt'>当前时间</span></p>
        </td>
        </tr>
        <tr style='height:30.0pt'>
        <td width="21%" valign=top style='width:21.96%;border:solid #DDDDDD 1.0pt;
        border-top:none;background:#F9F9F9;padding:6.0pt 6.0pt 6.0pt 6.0pt;
        height:30.0pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><span lang=EN-US
        style='font-size:10.5pt;font-family:"Helvetica Neue";color:#333333;
        letter-spacing:.4pt'>userKey</span></p>
        </td>
        <td width="17%" valign=top style='width:17.2%;border-top:none;border-left:
        none;border-bottom:solid #DDDDDD 1.0pt;border-right:solid #DDDDDD 1.0pt;
        background:#F9F9F9;padding:6.0pt 6.0pt 6.0pt 6.0pt;height:30.0pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><span style='font-size:10.5pt;
        font-family:宋体;color:#333333;letter-spacing:.4pt'>必填</span></p>
        </td>
        <td width="60%" valign=top style='width:60.84%;border-top:none;border-left:
        none;border-bottom:solid #DDDDDD 1.0pt;border-right:solid #DDDDDD 1.0pt;
        background:#F9F9F9;padding:6.0pt 6.0pt 6.0pt 6.0pt;height:30.0pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><span lang=EN-US
        style='font-size:10.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>userKey</span><span
        style='font-size:10.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>，可在控制台中查询</span></p>
        </td>
        </tr>
        <tr style='height:30.0pt'>
        <td width="21%" valign=top style='width:21.96%;border:solid #DDDDDD 1.0pt;
        border-top:none;padding:6.0pt 6.0pt 6.0pt 6.0pt;height:30.0pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><span lang=EN-US
        style='font-size:10.5pt;font-family:"Helvetica Neue";color:#333333;
        letter-spacing:.4pt'>sign</span></p>
        </td>
        <td width="17%" valign=top style='width:17.2%;border-top:none;border-left:
        none;border-bottom:solid #DDDDDD 1.0pt;border-right:solid #DDDDDD 1.0pt;
        padding:6.0pt 6.0pt 6.0pt 6.0pt;height:30.0pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><span style='font-size:10.5pt;
        font-family:等线;color:#333333;letter-spacing:.4pt'>必填</span></p>
        </td>
        <td width="60%" valign=top style='width:60.84%;border-top:none;border-left:
        none;border-bottom:solid #DDDDDD 1.0pt;border-right:solid #DDDDDD 1.0pt;
        padding:6.0pt 6.0pt 6.0pt 6.0pt;height:30.0pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><span lang=EN-US
        style='font-size:10.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>userKey</span><span
        style='font-size:10.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>由<span
        lang=EN-US>secert</span>做<span lang=EN-US>mac</span>处理后结果，<span lang=EN-US>secert</span>可在控制台中查询</span></p>
        <p class=MsoNormal style='margin-bottom:15.0pt'><span lang=EN-US
        style='font-size:11.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>sign</span><span
        style='font-size:11.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>为<span
        lang=EN-US>secret+clientTime+userKey</span>的<span lang=EN-US>md5(32)</span>值，<span
        lang=EN-US>interval</span>暂为<span lang=EN-US>2</span>小时，过期失效，需要定时刷新。</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span style='font-size:15.0pt;
        font-family:宋体;color:#1B75BB;letter-spacing:.4pt'>返回</span></b></p>

        <table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width="100%"
        style='width:100.0%;background:white;border-collapse:collapse'>
        <tr style='height:34.5pt'>
        <td width="21%" valign=top style='width:21.96%;border:solid #DDDDDD 1.0pt;
        background:#F3F4F6;padding:6.0pt 6.0pt 6.0pt 6.0pt;height:34.5pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><b><span style='font-size:
        10.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>关键字</span></b></p>
        </td>
        <td width="17%" valign=top style='width:17.2%;border:solid #DDDDDD 1.0pt;
        border-left:none;background:#F3F4F6;padding:6.0pt 6.0pt 6.0pt 6.0pt;
        height:34.5pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><b><span style='font-size:
        10.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>选项</span></b></p>
        </td>
        <td width="60%" valign=top style='width:60.84%;border:solid #DDDDDD 1.0pt;
        border-left:none;background:#F3F4F6;padding:6.0pt 6.0pt 6.0pt 6.0pt;
        height:34.5pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><b><span style='font-size:
        10.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>含义</span></b></p>
        </td>
        </tr>
        <tr style='height:30.0pt'>
        <td width="21%" valign=top style='width:21.96%;border:solid #DDDDDD 1.0pt;
        border-top:none;padding:6.0pt 6.0pt 6.0pt 6.0pt;height:30.0pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><span lang=EN-US
        style='font-size:10.5pt;font-family:"Helvetica Neue";color:#333333;
        letter-spacing:.4pt'>accessToken</span></p>
        </td>
        <td width="17%" valign=top style='width:17.2%;border-top:none;border-left:
        none;border-bottom:solid #DDDDDD 1.0pt;border-right:solid #DDDDDD 1.0pt;
        padding:6.0pt 6.0pt 6.0pt 6.0pt;height:30.0pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><span style='font-size:10.5pt;
        font-family:宋体;color:#333333;letter-spacing:.4pt'>必有</span></p>
        </td>
        <td width="60%" valign=top style='width:60.84%;border-top:none;border-left:
        none;border-bottom:solid #DDDDDD 1.0pt;border-right:solid #DDDDDD 1.0pt;
        padding:6.0pt 6.0pt 6.0pt 6.0pt;height:30.0pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><span style='font-size:10.5pt;
        font-family:宋体;color:#333333;letter-spacing:.4pt'>平台校验后颁发<span lang=EN-US>accessToken</span></span></p>
        </td>
        </tr>
        <tr style='height:30.0pt'>
        <td width="21%" valign=top style='width:21.96%;border:solid #DDDDDD 1.0pt;
        border-top:none;background:#F9F9F9;padding:6.0pt 6.0pt 6.0pt 6.0pt;
        height:30.0pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><span lang=EN-US
        style='font-size:10.5pt;font-family:"Helvetica Neue";color:#333333;
        letter-spacing:.4pt'>interval</span></p>
        </td>
        <td width="17%" valign=top style='width:17.2%;border-top:none;border-left:
        none;border-bottom:solid #DDDDDD 1.0pt;border-right:solid #DDDDDD 1.0pt;
        background:#F9F9F9;padding:6.0pt 6.0pt 6.0pt 6.0pt;height:30.0pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><span style='font-size:10.5pt;
        font-family:宋体;color:#333333;letter-spacing:.4pt'>必有</span></p>
        </td>
        <td width="60%" valign=top style='width:60.84%;border-top:none;border-left:
        none;border-bottom:solid #DDDDDD 1.0pt;border-right:solid #DDDDDD 1.0pt;
        background:#F9F9F9;padding:6.0pt 6.0pt 6.0pt 6.0pt;height:30.0pt'>
        <p class=MsoNormal style='margin-bottom:15.0pt'><span lang=EN-US
        style='font-size:10.5pt;font-family:"Helvetica Neue";color:#333333;
        letter-spacing:.4pt'>token</span><span style='font-size:10.5pt;font-family:
        宋体;color:#333333;letter-spacing:.4pt'>过期时长，单位为秒</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal style='background:white'><span lang=EN-US style='font-size:
        11.5pt;font-family:"Helvetica Neue";color:#333333;letter-spacing:.4pt'> </span></p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><a name="rich_push"></a><b><span
        style='font-size:15.0pt;font-family:宋体;color:#1B75BB;letter-spacing:.4pt'>使用<span
        lang=EN-US>accessToken</span></span></b></p>

        <p class=MsoNormal style='background:white'><span style='font-size:11.5pt;
        font-family:宋体;color:#333333;letter-spacing:.4pt'>获取后，在请求接口参数中，填入<span
        lang=EN-US>accessToken</span>字段。</span></p>

        <p class=MsoNormal style='background:white'><span lang=EN-US style='font-size:
        11.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>accessToken</span><span
        style='font-size:11.5pt;font-family:宋体;color:#333333;letter-spacing:.4pt'>有超时逻辑，需要定期刷新。</span></p>

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
    .page16{
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