<template>
    <div class="page6">
        <div class=WordSection1 style='layout-grid:15.6pt'>

        <h1><span style='color:#2E74B5'>PUSH <span lang=ZH-CN>服务端接口</span></span></h1>

        <h1><span lang=ZH-CN style='font-size:18.0pt;line-height:240%;color:#2E74B5'>调用地址</span></h1>

        <p class=MsoNormal><span style='font-size:11.5pt;font-family:SimSun;color:#333333;
        letter-spacing:.4pt;background:white'>https://api.nationauth.cn/push</span></p>

        <h1><span lang=ZH-CN style='font-size:18.0pt;line-height:240%;color:#2E74B5'>开始认证接口</span></h1>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
        style='border-collapse:collapse;border:none'>
        <tr style='height:16.95pt'>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口</span><span style='font-size:10.5pt;color:white'>URI</span></p>
        </td>
        <td width=420 colspan=3 valign=top style='width:314.8pt;border:solid windowtext 1.0pt;
        border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>/auth/init</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口描述</span></p>
        </td>
        <td width=420 colspan=3 valign=top style='width:314.8pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>开始进行认证</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>适用场景</span></p>
        </td>
        <td width=420 colspan=3 valign=top style='width:314.8pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>在</span><span
        style='font-size:10.5pt'>Web</span><span lang=ZH-CN style='font-size:10.5pt;
        font-family:DengXian'>端，进行</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>请求参数</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>约束</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>userKey</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>应用标识，通过控制台获取</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>username</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>用户唯一标识</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>displayInfo</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>可选</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>将在手机端显示的确认信息</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>transInfo</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>操作序列号</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>authType</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>认证类型，现阶段两种类型：</span></p>
        <p class=MsoListParagraph style='margin-left:36.0pt;text-indent:-18.0pt'><span
        style='font-size:10.5pt;font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span><span style='font-size:10.5pt'>yesno</span><span lang=ZH-CN
        style='font-size:10.5pt;font-family:DengXian'>：简单用户确认</span></p>
        <p class=MsoListParagraph style='margin-left:36.0pt;text-indent:-18.0pt'><span
        style='font-size:10.5pt;font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span><span style='font-size:10.5pt'>select</span><span lang=ZH-CN
        style='font-size:10.5pt;font-family:DengXian'>：要求用户选择固定数字</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>specificNum</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>int</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>可选</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>当为</span><span
        style='font-size:10.5pt'>select</span><span lang=ZH-CN style='font-size:10.5pt;
        font-family:DengXian'>类型时，</span><span style='font-size:10.5pt'>specificNum</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>为要求用户选择的数字</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>timeout</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>int</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>可选</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>超时时间，默认</span><span
        style='font-size:10.5pt'>60s</span><span lang=ZH-CN style='font-size:10.5pt;
        font-family:DengXian'>，单位是秒</span></p>
        </td>
        </tr>
        <tr style='height:19.7pt'>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>响应参数</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span style='font-size:10.5pt;color:white'>&nbsp;</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>statusCode</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>int</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>详见错误码</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>description</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>错误描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>verifyCode</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>验证结果</span></p>
        <p class=MsoListParagraph style='margin-left:36.0pt;text-indent:-18.0pt'><span
        style='font-size:10.5pt;font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span><span style='font-size:10.5pt'>AUTH_SUCCESS</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>：用户授权</span></p>
        <p class=MsoListParagraph style='margin-left:36.0pt;text-indent:-18.0pt'><span
        style='font-size:10.5pt;font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span><span style='font-size:10.5pt'>AUTH_FAILED</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>：用户拒绝</span></p>
        <p class=MsoListParagraph style='margin-left:36.0pt;text-indent:-18.0pt'><span
        style='font-size:10.5pt;font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span><span style='font-size:10.5pt'>TIME_OUT</span><span lang=ZH-CN
        style='font-size:10.5pt;font-family:DengXian'>：超时</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal>&nbsp;</p>

        <h1><span style='font-size:18.0pt;line-height:240%;color:#2E74B5'>&nbsp;</span></h1>

        <h1><span lang=ZH-CN style='font-size:18.0pt;line-height:240%;color:#2E74B5'>状态接口</span></h1>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
        style='border-collapse:collapse;border:none'>
        <tr style='height:16.95pt'>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口</span><span style='font-size:10.5pt;color:white'>URI</span></p>
        </td>
        <td width=420 colspan=3 valign=top style='width:314.8pt;border:solid windowtext 1.0pt;
        border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>/status</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口描述</span></p>
        </td>
        <td width=420 colspan=3 valign=top style='width:314.8pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>获取用户</span><span
        style='font-size:10.5pt'>PUSH</span><span lang=ZH-CN style='font-size:10.5pt;
        font-family:DengXian'>状态</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>适用场景</span></p>
        </td>
        <td width=420 colspan=3 valign=top style='width:314.8pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>PUSH</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>开关显示、</span><span
        style='font-size:10.5pt'>Web</span><span lang=ZH-CN style='font-size:10.5pt;
        font-family:DengXian'>端是否进入推送流程</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>请求参数</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>约束</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>userKey</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>应用标识，通过控制台获取</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>username</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>用户标识</span></p>
        </td>
        </tr>
        <tr style='height:19.7pt'>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>响应参数</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span style='font-size:10.5pt;color:white'>&nbsp;</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>statusCode</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>int</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>详见错误码</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>description</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>错误描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>tokens</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String[]</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>当前用户的注册信息</span></p>
        </td>
        </tr>
        </table>

        <h1><span lang=ZH-CN style='font-size:18.0pt;line-height:240%;color:#2E74B5'>注销接口</span></h1>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
        style='border-collapse:collapse;border:none'>
        <tr style='height:16.95pt'>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口</span><span style='font-size:10.5pt;color:white'>URI</span></p>
        </td>
        <td width=420 colspan=3 valign=top style='width:314.8pt;border:solid windowtext 1.0pt;
        border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>/delete</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口描述</span></p>
        </td>
        <td width=420 colspan=3 valign=top style='width:314.8pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>注销</span><span
        style='font-size:10.5pt'>PUSH</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>适用场景</span></p>
        </td>
        <td width=420 colspan=3 valign=top style='width:314.8pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>注销</span><span
        style='font-size:10.5pt'>PUSH</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>请求参数</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>约束</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>accessToken</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>服务授权</span><span
        style='font-size:10.5pt'>token</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>username</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>用户名</span></p>
        </td>
        </tr>
        <tr style='height:19.7pt'>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>响应参数</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span style='font-size:10.5pt;color:white'>&nbsp;</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>statusCode</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>int</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>详见错误码</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>description</span></p>
        </td>
        <td width=77 valign=top style='width:57.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=110 valign=top style='width:82.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=233 valign=top style='width:174.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>错误描述</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal>&nbsp;</p>

        <h1><span lang=ZH-CN style='font-size:18.0pt;line-height:240%;color:#2E74B5'>错误码</span></h1>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=557
        style='width:417.55pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=63 valign=top style='width:47.25pt;border:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>错误码</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border:solid windowtext 1.0pt;
        border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>错误描述</span></p>
        </td>
        <td width=142 valign=top style='width:106.35pt;border:solid windowtext 1.0pt;
        border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>备注</span></p>
        </td>
        </tr>
        <tr>
        <td width=63 valign=top style='width:47.25pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><b><span lang=ZH-CN style='font-size:10.5pt;font-family:
        DengXian'>业务</span></b></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=142 valign=top style='width:106.35pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=63 valign=top style='width:47.25pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>1200</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>成功</span></p>
        </td>
        <td width=142 valign=top style='width:106.35pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=63 valign=top style='width:47.25pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>5000</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>用户名长度限制</span></p>
        </td>
        <td width=142 valign=top style='width:106.35pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=63 valign=top style='width:47.25pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>5001</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>用户名为空</span></p>
        </td>
        <td width=142 valign=top style='width:106.35pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=63 valign=top style='width:47.25pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>5008</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>用户未注册</span></p>
        </td>
        <td width=142 valign=top style='width:106.35pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=63 valign=top style='width:47.25pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>5009</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>用户未注册</span></p>
        </td>
        <td width=142 valign=top style='width:106.35pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=63 valign=top style='width:47.25pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>5012</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>用户已注册</span></p>
        </td>
        <td width=142 valign=top style='width:106.35pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=63 valign=top style='width:47.25pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>5013</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>OTP Code</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>长度错误</span></p>
        </td>
        <td width=142 valign=top style='width:106.35pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=63 valign=top style='width:47.25pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>5014</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>OTP Code</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>为空</span></p>
        </td>
        <td width=142 valign=top style='width:106.35pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=63 valign=top style='width:47.25pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>5020</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>OTP type</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>为空</span></p>
        </td>
        <td width=142 valign=top style='width:106.35pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=63 valign=top style='width:47.25pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>5021</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>id</span><span lang=ZH-CN
        style='font-size:10.5pt;font-family:DengXian'>无效</span></p>
        </td>
        <td width=142 valign=top style='width:106.35pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=63 valign=top style='width:47.25pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>5022</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>id</span><span lang=ZH-CN
        style='font-size:10.5pt;font-family:DengXian'>为空</span></p>
        </td>
        <td width=142 valign=top style='width:106.35pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=63 valign=top style='width:47.25pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>5023</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>trans</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>流水号信息为空</span></p>
        </td>
        <td width=142 valign=top style='width:106.35pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal>&nbsp;</p>

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
    .page6{
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