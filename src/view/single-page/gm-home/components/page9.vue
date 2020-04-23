<template>
    <div class="page9">
        <div class=WordSection1 style='layout-grid:15.6pt'>

        <h1><span style='color:#2E74B5'>Webauthn <span lang=ZH-CN>服务端接口</span></span></h1>

        <h1><span lang=ZH-CN style='font-size:18.0pt;line-height:240%;color:#2E74B5'>调用地址</span></h1>

        <p class=MsoNormal><span style='font-size:11.5pt;font-family:SimSun;color:#333333;
        letter-spacing:.4pt;background:white'>https://api.nationauth.cn/webauthn</span></p>

        <h1><span lang=ZH-CN style='font-size:18.0pt;line-height:240%;color:#2E74B5'>注册状态接口</span></h1>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
        style='border-collapse:collapse;border:none'>
        <tr style='height:16.95pt'>
        <td width=116 valign=top style='width:87.2pt;border:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口</span><span style='font-size:10.5pt;color:white'>URI</span></p>
        </td>
        <td width=436 colspan=3 valign=top style='width:327.3pt;border:solid windowtext 1.0pt;
        border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>/reg/status</span></p>
        </td>
        </tr>
        <tr>
        <td width=116 valign=top style='width:87.2pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口描述</span></p>
        </td>
        <td width=436 colspan=3 valign=top style='width:327.3pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>查询客户是否在指定设备上开通了指定认证方式。</span></p>
        </td>
        </tr>
        <tr>
        <td width=116 valign=top style='width:87.2pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>适用场景</span></p>
        </td>
        <td width=436 colspan=3 valign=top style='width:327.3pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>用户在浏览器是否开启了</span><span
        style='font-size:10.5pt'>WinHello</span><span lang=ZH-CN style='font-size:
        10.5pt;font-family:DengXian'>或硬件</span><span style='font-size:10.5pt'>key</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>的登陆或支付功能</span></p>
        </td>
        </tr>
        <tr>
        <td width=116 valign=top style='width:87.2pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>请求参数</span></p>
        </td>
        <td width=166 valign=top style='width:124.15pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=73 valign=top style='width:54.5pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>约束</span></p>
        </td>
        <td width=198 valign=top style='width:148.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=116 valign=top style='width:87.2pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>context:</span></p>
        </td>
        <td width=166 valign=top style='width:124.15pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=73 valign=top style='width:54.5pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=198 valign=top style='width:148.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>业务流水号</span></p>
        </td>
        </tr>
        <tr>
        <td width=116 valign=top style='width:87.2pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> transNo</span></p>
        </td>
        <td width=166 valign=top style='width:124.15pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=73 valign=top style='width:54.5pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=198 valign=top style='width:148.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>业务流水号</span></p>
        </td>
        </tr>
        <tr>
        <td width=116 valign=top style='width:87.2pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> userName</span></p>
        </td>
        <td width=166 valign=top style='width:124.15pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=73 valign=top style='width:54.5pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=198 valign=top style='width:148.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>客户唯一标识</span></p>
        </td>
        </tr>
        <tr>
        <td width=116 valign=top style='width:87.2pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> transType</span></p>
        </td>
        <td width=166 valign=top style='width:124.15pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>JSONArray</span></p>
        </td>
        <td width=73 valign=top style='width:54.5pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=198 valign=top style='width:148.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>业务类型</span></p>
        <p class=MsoNormal><span style='font-size:10.5pt'>[“00”] </span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>登陆</span><span
        lang=ZH-CN style='font-size:10.5pt'> </span></p>
        <p class=MsoNormal><span style='font-size:10.5pt'>[“01”] </span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>支付</span></p>
        <p class=MsoNormal><span style='font-size:10.5pt'>[“00”,”01”] </span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>所有</span><span
        lang=ZH-CN style='font-size:10.5pt'> </span></p>
        </td>
        </tr>
        <tr>
        <td width=116 valign=top style='width:87.2pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> devices</span></p>
        </td>
        <td width=166 valign=top style='width:124.15pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=73 valign=top style='width:54.5pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=198 valign=top style='width:148.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=116 valign=top style='width:87.2pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>    deviceID</span></p>
        </td>
        <td width=166 valign=top style='width:124.15pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=73 valign=top style='width:54.5pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=198 valign=top style='width:148.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>设备</span><span
        style='font-size:10.5pt'>ID</span></p>
        </td>
        </tr>
        <tr style='height:18.35pt'>
        <td width=116 valign=top style='width:87.2pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:18.35pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> authType</span></p>
        </td>
        <td width=166 valign=top style='width:124.15pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:18.35pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>JSONArray</span></p>
        </td>
        <td width=73 valign=top style='width:54.5pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:18.35pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=198 valign=top style='width:148.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:18.35pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>认证方式</span></p>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>固定为</span><span
        lang=ZH-CN style='font-size:10.5pt'> </span><span style='font-size:10.5pt'>[“30”]</span></p>
        </td>
        </tr>
        <tr style='height:18.35pt'>
        <td width=116 valign=top style='width:87.2pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:18.35pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> protocol</span></p>
        </td>
        <td width=166 valign=top style='width:124.15pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:18.35pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=73 valign=top style='width:54.5pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:18.35pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=198 valign=top style='width:148.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:18.35pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>web</span></p>
        </td>
        </tr>
        <tr style='height:18.35pt'>
        <td width=116 valign=top style='width:87.2pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:18.35pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>userKey</span></p>
        </td>
        <td width=166 valign=top style='width:124.15pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:18.35pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=73 valign=top style='width:54.5pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:18.35pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=198 valign=top style='width:148.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:18.35pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>应用标识</span></p>
        </td>
        </tr>
        <tr style='height:19.7pt'>
        <td width=116 valign=top style='width:87.2pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>响应参数</span></p>
        </td>
        <td width=166 valign=top style='width:124.15pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span style='font-size:10.5pt;color:white'>&nbsp;</span></p>
        </td>
        <td width=73 valign=top style='width:54.5pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=198 valign=top style='width:148.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=116 valign=top style='width:87.2pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>statusCode</span></p>
        </td>
        <td width=166 valign=top style='width:124.15pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=73 valign=top style='width:54.5pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>int</span></p>
        </td>
        <td width=198 valign=top style='width:148.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>详见错误码</span></p>
        </td>
        </tr>
        <tr>
        <td width=116 valign=top style='width:87.2pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>description</span></p>
        </td>
        <td width=166 valign=top style='width:124.15pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=73 valign=top style='width:54.5pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=198 valign=top style='width:148.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>错误描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=116 valign=top style='width:87.2pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>regStatus</span></p>
        </td>
        <td width=166 valign=top style='width:124.15pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=73 valign=top style='width:54.5pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String[][]</span></p>
        </td>
        <td width=198 valign=top style='width:148.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>开通状态</span><span
        style='font-size:10.5pt'> 0</span><span lang=ZH-CN style='font-size:10.5pt;
        font-family:DengXian'>未开通，</span><span style='font-size:10.5pt'>1</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>开通</span></p>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>数组外侧为</span><span
        style='font-size:10.5pt'>authType</span></p>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>数组内侧为</span><span
        style='font-size:10.5pt'>transType</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal>&nbsp;</p>

        <h1><span lang=ZH-CN style='font-size:18.0pt;line-height:240%;color:#2E74B5'>注册发起接口</span></h1>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
        style='border-collapse:collapse;border:none'>
        <tr style='height:16.95pt'>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口</span><span style='font-size:10.5pt;color:white'>URI</span></p>
        </td>
        <td width=400 colspan=3 valign=top style='width:299.9pt;border:solid windowtext 1.0pt;
        border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>/reg/receive</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口描述</span></p>
        </td>
        <td width=400 colspan=3 valign=top style='width:299.9pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>注册第一次请求</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>适用场景</span></p>
        </td>
        <td width=400 colspan=3 valign=top style='width:299.9pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>用户在浏览器开启</span><span
        style='font-size:10.5pt'>WinHello</span><span lang=ZH-CN style='font-size:
        10.5pt;font-family:DengXian'>或硬件</span><span style='font-size:10.5pt'>key</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>的登陆或支付功能</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>请求参数</span></p>
        </td>
        <td width=74 valign=top style='width:55.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=104 valign=top style='width:78.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>约束</span></p>
        </td>
        <td width=221 valign=top style='width:165.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>context</span></p>
        </td>
        <td width=74 valign=top style='width:55.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=104 valign=top style='width:78.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=221 valign=top style='width:165.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> transNo</span></p>
        </td>
        <td width=74 valign=top style='width:55.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=104 valign=top style='width:78.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=221 valign=top style='width:165.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>业务流水号</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> custNo</span></p>
        </td>
        <td width=74 valign=top style='width:55.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=104 valign=top style='width:78.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=221 valign=top style='width:165.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>客户唯一标识</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> userName</span></p>
        </td>
        <td width=74 valign=top style='width:55.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=104 valign=top style='width:78.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=221 valign=top style='width:165.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>客户唯一标识，同</span><span
        style='font-size:10.5pt'>custNo</span><span lang=ZH-CN style='font-size:10.5pt;
        font-family:DengXian'>一致即可</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> authenticatorAttachment</span></p>
        </td>
        <td width=74 valign=top style='width:55.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=104 valign=top style='width:78.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>可选</span></p>
        </td>
        <td width=221 valign=top style='width:165.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>平台：</span></p>
        <p class=MsoListParagraph style='margin-left:36.0pt;text-indent:-18.0pt'><span
        style='font-size:10.5pt;font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span><span style='font-size:10.5pt'>platform</span></p>
        <p class=MsoListParagraph style='margin-left:36.0pt;text-indent:-18.0pt'><span
        style='font-size:10.5pt;font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span><span style='font-size:10.5pt'>cross-platform</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> devices</span></p>
        </td>
        <td width=74 valign=top style='width:55.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=104 valign=top style='width:78.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=221 valign=top style='width:165.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>  deviceID</span></p>
        </td>
        <td width=74 valign=top style='width:55.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=104 valign=top style='width:78.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=221 valign=top style='width:165.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>设备标识</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> transType</span></p>
        </td>
        <td width=74 valign=top style='width:55.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=104 valign=top style='width:78.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=221 valign=top style='width:165.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>业务类型</span></p>
        <p class=MsoNormal><span style='font-size:10.5pt'>00</span><span lang=ZH-CN
        style='font-size:10.5pt;font-family:DengXian'>登陆</span><span
        style='font-size:10.5pt'> 01</span><span lang=ZH-CN style='font-size:10.5pt;
        font-family:DengXian'>支付</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> authType</span></p>
        </td>
        <td width=74 valign=top style='width:55.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=104 valign=top style='width:78.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=221 valign=top style='width:165.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>认证方式</span></p>
        <p class=MsoNormal><span style='font-size:10.5pt'>webauthn</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>：</span><span
        style='font-size:10.5pt'>30</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> protocol</span></p>
        </td>
        <td width=74 valign=top style='width:55.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=104 valign=top style='width:78.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=221 valign=top style='width:165.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>固定值</span><span
        style='font-size:10.5pt'>web</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> rpId</span></p>
        </td>
        <td width=74 valign=top style='width:55.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=104 valign=top style='width:78.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=221 valign=top style='width:165.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>当前应用的</span><span
        style='font-size:10.5pt'>rpId</span></p>
        </td>
        </tr>
        <tr style='height:19.7pt'>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>响应参数</span></p>
        </td>
        <td width=74 valign=top style='width:55.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span style='font-size:10.5pt;color:white'>&nbsp;</span></p>
        </td>
        <td width=104 valign=top style='width:78.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=221 valign=top style='width:165.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>statusCode</span></p>
        </td>
        <td width=74 valign=top style='width:55.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=104 valign=top style='width:78.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>int</span></p>
        </td>
        <td width=221 valign=top style='width:165.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>详见错误码</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>description</span></p>
        </td>
        <td width=74 valign=top style='width:55.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=104 valign=top style='width:78.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=221 valign=top style='width:165.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>错误描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>webAuthnRequest</span></p>
        </td>
        <td width=74 valign=top style='width:55.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=104 valign=top style='width:78.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=221 valign=top style='width:165.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>服务器响应报文，需要透传给客户端，用于调用</span><span
        style='font-size:10.5pt'>W3C Webauthn SDK</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal>&nbsp;</p>

        <h1><span lang=ZH-CN style='font-size:18.0pt;line-height:240%;color:#2E74B5'>注册完成接口</span></h1>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
        style='border-collapse:collapse;border:none'>
        <tr style='height:16.95pt'>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口</span><span style='font-size:10.5pt;color:white'>URI</span></p>
        </td>
        <td width=415 colspan=3 valign=top style='width:310.9pt;border:solid windowtext 1.0pt;
        border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>/reg/send</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口描述</span></p>
        </td>
        <td width=415 colspan=3 valign=top style='width:310.9pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>注册第二次请求，完成注册</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>适用场景</span></p>
        </td>
        <td width=415 colspan=3 valign=top style='width:310.9pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>用户在浏览器开启</span><span
        style='font-size:10.5pt'>WinHello</span><span lang=ZH-CN style='font-size:
        10.5pt;font-family:DengXian'>或硬件</span><span style='font-size:10.5pt'>key</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>的登陆或支付功能</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>请求参数</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>约束</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>credentials</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>  response</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>    clientDataJSON</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Webauthn</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>的返回</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>    attestationObject</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Webauthn</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>的返回</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>  rawId</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Credential ID base64</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>后内容</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>  id</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Credential ID base64</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>后内容</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>  type</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>强制为</span><span
        style='font-size:10.5pt'>public-key</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>context</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> transNo</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>业务流水号</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> custNo</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>客户唯一标识</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> userName</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>客户唯一标识</span></p>
        </td>
        </tr>
        <tr style='height:16.9pt'>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.9pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> transType</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.9pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.9pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.9pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>业务类型</span></p>
        <p class=MsoNormal><span style='font-size:10.5pt'>00</span><span lang=ZH-CN
        style='font-size:10.5pt;font-family:DengXian'>登陆</span><span lang=ZH-CN
        style='font-size:10.5pt'> </span></p>
        <p class=MsoNormal><span style='font-size:10.5pt'>01</span><span lang=ZH-CN
        style='font-size:10.5pt;font-family:DengXian'>支付</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> authType</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>认证方式</span></p>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>指纹：</span><span
        style='font-size:10.5pt'>00</span></p>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>虹膜：</span><span
        style='font-size:10.5pt'>01</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> opType</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>操作类型</span></p>
        <p class=MsoNormal><span style='font-size:10.5pt'>00 </span><span lang=ZH-CN
        style='font-size:10.5pt;font-family:DengXian'>只注册</span></p>
        <p class=MsoNormal><span style='font-size:10.5pt'>01 </span><span lang=ZH-CN
        style='font-size:10.5pt;font-family:DengXian'>注册并关闭其他设备</span><span
        style='font-size:10.5pt'>FIDO</span></p>
        </td>
        </tr>
        <tr style='height:19.7pt'>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span style='font-size:10.5pt;color:black'> devices</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>JSONObject</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span style='font-size:10.5pt;color:black'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>  deviceID</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>设备标识</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>  deviceInfo</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>设备信息</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>serverData</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr style='height:19.7pt'>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>响应参数</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span style='font-size:10.5pt;color:white'>&nbsp;</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>statusCode</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>int</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>详见错误码</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>description</span></p>
        </td>
        <td width=88 valign=top style='width:65.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=242 valign=top style='width:181.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>错误描述</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal>&nbsp;</p>

        <h1><span lang=ZH-CN style='font-size:18.0pt;line-height:240%;color:#2E74B5'>认证发起接口</span></h1>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
        style='border-collapse:collapse;border:none'>
        <tr style='height:16.95pt'>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口</span><span style='font-size:10.5pt;color:white'>URI</span></p>
        </td>
        <td width=400 colspan=3 valign=top style='width:299.9pt;border:solid windowtext 1.0pt;
        border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>/auth/receive</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口描述</span></p>
        </td>
        <td width=400 colspan=3 valign=top style='width:299.9pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>认证第一次请求</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>适用场景</span></p>
        </td>
        <td width=400 colspan=3 valign=top style='width:299.9pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>用户在浏览器使用</span><span
        style='font-size:10.5pt'>WinHello</span><span lang=ZH-CN style='font-size:
        10.5pt;font-family:DengXian'>或硬件</span><span style='font-size:10.5pt'>key</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>进行登陆或支付功能</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>请求参数</span></p>
        </td>
        <td width=91 valign=top style='width:68.45pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=100 valign=top style='width:75.2pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>约束</span></p>
        </td>
        <td width=208 valign=top style='width:156.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>context</span></p>
        </td>
        <td width=91 valign=top style='width:68.45pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=100 valign=top style='width:75.2pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=208 valign=top style='width:156.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> transNo</span></p>
        </td>
        <td width=91 valign=top style='width:68.45pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=100 valign=top style='width:75.2pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=208 valign=top style='width:156.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>业务流水号</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> custNo</span></p>
        </td>
        <td width=91 valign=top style='width:68.45pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=100 valign=top style='width:75.2pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=208 valign=top style='width:156.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>客户唯一标识</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> userName</span></p>
        </td>
        <td width=91 valign=top style='width:68.45pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=100 valign=top style='width:75.2pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=208 valign=top style='width:156.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>客户唯一标识，同</span><span
        style='font-size:10.5pt'>custNo</span><span lang=ZH-CN style='font-size:10.5pt;
        font-family:DengXian'>一致即可</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> authenticatorAttachment</span></p>
        </td>
        <td width=91 valign=top style='width:68.45pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=100 valign=top style='width:75.2pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>可选</span></p>
        </td>
        <td width=208 valign=top style='width:156.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>平台：</span></p>
        <p class=MsoNormal><span style='font-size:10.5pt'>platform</span></p>
        <p class=MsoNormal><span style='font-size:10.5pt'>cross-platform</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> authType</span></p>
        </td>
        <td width=91 valign=top style='width:68.45pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>JSONArray</span></p>
        </td>
        <td width=100 valign=top style='width:75.2pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=208 valign=top style='width:156.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>数组的</span><span
        style='font-size:10.5pt'>authtype</span></p>
        <p class=MsoNormal><span style='font-size:10.5pt'>[“30”]</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> transType</span></p>
        </td>
        <td width=91 valign=top style='width:68.45pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=100 valign=top style='width:75.2pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=208 valign=top style='width:156.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>“00”</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> rpId</span></p>
        </td>
        <td width=91 valign=top style='width:68.45pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=100 valign=top style='width:75.2pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=208 valign=top style='width:156.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>rpID</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> protocol</span></p>
        </td>
        <td width=91 valign=top style='width:68.45pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=100 valign=top style='width:75.2pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=208 valign=top style='width:156.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>web</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> devices</span></p>
        </td>
        <td width=91 valign=top style='width:68.45pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=100 valign=top style='width:75.2pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=208 valign=top style='width:156.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>  deviceID</span></p>
        </td>
        <td width=91 valign=top style='width:68.45pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=100 valign=top style='width:75.2pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=208 valign=top style='width:156.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>设备标识</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> transType</span></p>
        </td>
        <td width=91 valign=top style='width:68.45pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=100 valign=top style='width:75.2pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=208 valign=top style='width:156.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>业务类型</span></p>
        <p class=MsoNormal><span style='font-size:10.5pt'>00</span><span lang=ZH-CN
        style='font-size:10.5pt;font-family:DengXian'>登陆</span><span
        style='font-size:10.5pt'> 01</span><span lang=ZH-CN style='font-size:10.5pt;
        font-family:DengXian'>支付</span></p>
        </td>
        </tr>
        <tr style='height:19.7pt'>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>响应参数</span></p>
        </td>
        <td width=91 valign=top style='width:68.45pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span style='font-size:10.5pt;color:white'>&nbsp;</span></p>
        </td>
        <td width=100 valign=top style='width:75.2pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=208 valign=top style='width:156.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>statusCode</span></p>
        </td>
        <td width=91 valign=top style='width:68.45pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=100 valign=top style='width:75.2pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>int</span></p>
        </td>
        <td width=208 valign=top style='width:156.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>详见错误码</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>description</span></p>
        </td>
        <td width=91 valign=top style='width:68.45pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=100 valign=top style='width:75.2pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=208 valign=top style='width:156.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>错误描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=153 valign=top style='width:114.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>webAuthnRequest</span></p>
        </td>
        <td width=91 valign=top style='width:68.45pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=100 valign=top style='width:75.2pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=208 valign=top style='width:156.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>FIDO</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>服务器响应报文，需要透传给客户端，用于调用</span><span
        style='font-size:10.5pt'>FIDO SDK</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal>&nbsp;</p>

        <h1><span lang=ZH-CN style='font-size:18.0pt;line-height:240%;color:#2E74B5'>认证完成接口</span></h1>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
        style='border-collapse:collapse;border:none'>
        <tr style='height:16.95pt'>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口</span><span style='font-size:10.5pt;color:white'>URI</span></p>
        </td>
        <td width=420 colspan=3 valign=top style='width:315.05pt;border:solid windowtext 1.0pt;
        border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>/auth/send</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口描述</span></p>
        </td>
        <td width=420 colspan=3 valign=top style='width:315.05pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>认证第二次请求，完成注册</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>适用场景</span></p>
        </td>
        <td width=420 colspan=3 valign=top style='width:315.05pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>用户在浏览器使用</span><span
        style='font-size:10.5pt'>WinHello</span><span lang=ZH-CN style='font-size:
        10.5pt;font-family:DengXian'>或硬件</span><span style='font-size:10.5pt'>key</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>进行登陆或支付功能</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>请求参数</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>约束</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>context</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> custNo</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>用户名</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> userName</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>用户名</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> rpID</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>应用</span><span
        style='font-size:10.5pt'>origin</span><span lang=ZH-CN style='font-size:10.5pt;
        font-family:DengXian'>的有效域</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> protocol</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>固定为</span><span
        style='font-size:10.5pt'>web</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> transNo</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>业务流水号</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> authType</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>JSONArray</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>验证方式</span></p>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>固定为</span><span
        style='font-size:10.5pt'>[“30”]</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>credentials</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>返回的</span><span
        style='font-size:10.5pt'>FIDO</span><span lang=ZH-CN style='font-size:10.5pt;
        font-family:DengXian'>响应</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> response</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>  signature</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Webauthn</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>返回的</span><span
        style='font-size:10.5pt'>signature</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>  authenticatorData</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Webauthn</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>返回的</span><span
        style='font-size:10.5pt'>authenticatorDat</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>  userHandle</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>可选</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Webauthn</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>返回的</span><span
        style='font-size:10.5pt'>userHandle</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> rawId</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Webauthn</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>返回的</span><span
        style='font-size:10.5pt'>id</span><span lang=ZH-CN style='font-size:10.5pt;
        font-family:DengXian'>进行</span><span style='font-size:10.5pt'>base64</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> id</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Webauthn</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>返回的</span><span
        style='font-size:10.5pt'>id</span><span lang=ZH-CN style='font-size:10.5pt;
        font-family:DengXian'>进行</span><span style='font-size:10.5pt'>base64</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> type</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Webauthn</span><span
        lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>类型，固定为“</span><span
        style='font-size:10.5pt'>public-key</span><span lang=ZH-CN style='font-size:
        10.5pt;font-family:DengXian'>”</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr style='height:19.7pt'>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>响应参数</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span style='font-size:10.5pt;color:white'>&nbsp;</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>statusCode</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>int</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>详见错误码</span></p>
        </td>
        </tr>
        <tr>
        <td width=133 valign=top style='width:99.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>description</span></p>
        </td>
        <td width=81 valign=top style='width:60.4pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=109 valign=top style='width:81.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=231 valign=top style='width:172.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>错误描述</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal>&nbsp;</p>

        <h1><span lang=ZH-CN style='font-size:18.0pt;line-height:240%;color:#2E74B5'>注销接口</span></h1>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=553
        style='width:414.5pt;border-collapse:collapse;border:none'>
        <tr style='height:16.95pt'>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口</span><span style='font-size:10.5pt;color:white'>URI</span></p>
        </td>
        <td width=415 colspan=3 valign=top style='width:310.9pt;border:solid windowtext 1.0pt;
        border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>/reg/delete</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>接口描述</span></p>
        </td>
        <td width=415 colspan=3 valign=top style='width:310.9pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>注销用户</span><span
        style='font-size:10.5pt'>Webauthn</span><span lang=ZH-CN style='font-size:
        10.5pt;font-family:DengXian'>功能</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>适用场景</span></p>
        </td>
        <td width=415 colspan=3 valign=top style='width:310.9pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>关闭一种认证方式</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>请求参数</span></p>
        </td>
        <td width=79 valign=top style='width:58.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=142 valign=top style='width:106.3pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>约束</span></p>
        </td>
        <td width=194 valign=top style='width:145.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>context</span></p>
        </td>
        <td width=79 valign=top style='width:58.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=142 valign=top style='width:106.3pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=194 valign=top style='width:145.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> transNo</span></p>
        </td>
        <td width=79 valign=top style='width:58.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=142 valign=top style='width:106.3pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=194 valign=top style='width:145.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>业务流水号</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> userName</span></p>
        </td>
        <td width=79 valign=top style='width:58.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=142 valign=top style='width:106.3pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=194 valign=top style='width:145.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>用户标识，</span></p>
        </td>
        </tr>
        <tr style='height:16.95pt'>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> transType</span></p>
        </td>
        <td width=79 valign=top style='width:58.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=142 valign=top style='width:106.3pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=194 valign=top style='width:145.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>交易类型</span></p>
        <p class=MsoNormal><span style='font-size:10.5pt'>01 </span><span lang=ZH-CN
        style='font-size:10.5pt;font-family:DengXian'>登陆</span><span
        style='font-size:10.5pt'> 02 </span><span lang=ZH-CN style='font-size:10.5pt;
        font-family:DengXian'>支付</span></p>
        </td>
        </tr>
        <tr style='height:16.95pt'>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> deviceID</span></p>
        </td>
        <td width=79 valign=top style='width:58.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=142 valign=top style='width:106.3pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=194 valign=top style='width:145.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>设备标识</span><span
        lang=ZH-CN style='font-size:10.5pt'> </span></p>
        </td>
        </tr>
        <tr style='height:16.95pt'>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> authType</span></p>
        </td>
        <td width=79 valign=top style='width:58.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=142 valign=top style='width:106.3pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=194 valign=top style='width:145.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>认证方式</span></p>
        <p class=MsoNormal><span style='font-size:10.5pt'>30</span></p>
        </td>
        </tr>
        <tr style='height:16.95pt'>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'> protocol</span></p>
        </td>
        <td width=79 valign=top style='width:58.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=142 valign=top style='width:106.3pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>必输</span></p>
        </td>
        <td width=194 valign=top style='width:145.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.95pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Web</span></p>
        </td>
        </tr>
        <tr style='height:19.7pt'>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>响应参数</span></p>
        </td>
        <td width=79 valign=top style='width:58.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span style='font-size:10.5pt;color:white'>&nbsp;</span></p>
        </td>
        <td width=142 valign=top style='width:106.3pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>类型</span></p>
        </td>
        <td width=194 valign=top style='width:145.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        background:#5B9BD5;padding:0cm 5.4pt 0cm 5.4pt;height:19.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian;
        color:white'>描述</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>statusCode</span></p>
        </td>
        <td width=79 valign=top style='width:58.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=142 valign=top style='width:106.3pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>int</span></p>
        </td>
        <td width=194 valign=top style='width:145.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>详见错误码</span></p>
        </td>
        </tr>
        <tr>
        <td width=138 valign=top style='width:103.6pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>description</span></p>
        </td>
        <td width=79 valign=top style='width:58.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        <td width=142 valign=top style='width:106.3pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>String</span></p>
        </td>
        <td width=194 valign=top style='width:145.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:10.5pt;font-family:DengXian'>错误描述</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal>&nbsp;</p>

        <h1><span lang=ZH-CN>错误码</span></h1>

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
        <p class=MsoNormal><span style='font-size:10.5pt'>OK</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>1400</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate parameter</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>1401</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Invalid JSON data</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>1402</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Requested policy is not
        available on server</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>1403</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to locate a
        registered authenticator.</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>1404</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Policy Verification Failed.</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>1405</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to load facet ID
        from cache</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>1406</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to load facet ID
        from cache</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>1407</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Repeat request,possible
        replay attack</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>1408</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>License reference error</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>1500</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Unknown error code</span></p>
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
        <p class=MsoNormal><b><span lang=ZH-CN style='font-size:10.5pt;font-family:
        DengXian'>数据库</span></b></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>2000</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to connect to
        database.</span></p>
        </td>
        <td width=142 valign=top style='width:106.35pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr style='height:17.65pt'>
        <td width=63 valign=top style='width:47.25pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:17.65pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>2001</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:17.65pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to load facet id
        from database</span></p>
        </td>
        <td width=142 valign=top style='width:106.35pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:17.65pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td width=63 valign=top style='width:47.25pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>2002</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to load policy from
        database</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>2003</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to load system
        config from database</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>2004</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to insert device
        info into database</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>2005</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to query device info
        from database</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>2006</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to delete device
        info from database</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>2007</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to delete
        authenticator info from database</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>2008</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to query
        authenticator info from database</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>2009</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to insert
        authenticator info from database</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>2010</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to insert
        authenticator info from database</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>2011</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to delete
        authenticator info from database</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>2012</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to delete authenticator
        info from database</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>2013</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to delete
        authenticator info from database</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>2014</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to delete
        authenticator info from database</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>2015</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to load white list</span></p>
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
        <p class=MsoNormal><b><span lang=ZH-CN style='font-size:10.5pt;font-family:
        DengXian'>协议</span></b></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3000</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Invalid UAF Response</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3001</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate Operation
        Header</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3002</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate the
        Operation Type in Header</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3003</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate the
        Final Challenge Params.</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3004</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate
        authenticator assertion against the server policy.</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3005</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Protocol version is not
        supported.</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3006</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate the
        ServerData</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3007</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate AppID</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3008</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate server
        challenge</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3009</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate facetID</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3010</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate TLS
        data.</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3011</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate
        Assertion Scheme</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3012</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate authenticator
        signed data.</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3013</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate AAID</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3014</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate
        authentication mode</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3015</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to parse
        authentication assertion TLV</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3016</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate the FCP
        hash in authenticator assertion</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3017</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to locate the attestation
        type in authenticator metadata</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3018</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to locate the key
        format in authenticator metadata</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3019</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to locate the
        tcDisplayPNGCharacteristics for authenticator</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3020</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to locate
        authentication algorithm in authenticator metadata</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3021</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Invalid value of sign
        counter</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3022</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate
        transaction hash</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3023</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to parse TLV data</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3024</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to create the
        transaction content</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3025</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate the
        attestation certificate.</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3026</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate the
        attestation signature</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3027</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to validate the
        signature</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3028</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to locate exact
        match for authenticator</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>3029</span></p>
        </td>
        <td width=352 valign=top style='width:263.95pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormal><span style='font-size:10.5pt'>Failed to parse
        registration assertion TLV</span></p>
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
        <p class=MsoNormal><span style='font-size:10.5pt'>&nbsp;</span></p>
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
        </table>

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
    .page9{
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