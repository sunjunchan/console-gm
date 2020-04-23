<template>
    <div class="page7">
        <div class=WordSection1 style='layout-grid:15.6pt'>

        <h1><span style='color:#2E74B5'>PUSH<span lang=ZH-CN>接口说明</span></span></h1>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>初始化</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>1.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>说明</span></b></p>

        <p class=MsoNormal style='text-indent:10.0pt'><span lang=ZH-CN
        style='font-family:DengXian'>初始化目的是首先建立</span>push<span lang=ZH-CN
        style='font-family:DengXian'>链接</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>2.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>函数名</span></b></p>

        <p class=MsoNormal style='text-indent:10.0pt'>int PushManager.getInstance().init(Context
        ctx,IPush pushAdapter)</p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>3.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>参数说明</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输入参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=548
        style='width:411.05pt;margin-left:19.2pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>名称</span></b></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>ctx</span></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>Context</span></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>Android</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>上下文</span></p>
        </td>
        </tr>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>pushAdapter</span></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>IPush</span></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>Push</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>实现类，默认我们提供</span><span
        style='font-size:10.5pt;line-height:120%'>JPush</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>实现。</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输出参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=548
        style='width:411.05pt;margin-left:19.2pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=67 valign=top style='width:50.0pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=284 valign=top style='width:212.65pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=67 valign=top style='width:50.0pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span></p>
        </td>
        <td width=284 valign=top style='width:212.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>int</span></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>注册结果</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>0</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：初始化成功</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：</span><span
        style='font-size:10.5pt;line-height:120%'>pushAdapter</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>为空</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>2</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：需要在工作线程中操作</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>3</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：</span><span
        style='font-size:10.5pt;line-height:120%'>PUSH</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>链接建立失败</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>更新用户名</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>1.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>说明</span></b></p>

        <p class=MsoNormal style='text-indent:10.0pt'><span lang=ZH-CN
        style='font-family:DengXian'>初始化用户标识</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>2.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>函数名</span></b></p>

        <p class=MsoNormal style='text-indent:10.0pt'>void PushManager.getInstance().updateUsername(String
        username)</p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>3.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>参数说明</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输入参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=548
        style='width:411.05pt;margin-left:19.2pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>名称</span></b></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>username</span></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>String</span></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>用户标识</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>注册</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>1.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>说明</span></b></p>

        <p class=MsoNormal style='text-indent:10.0pt'><span lang=ZH-CN
        style='font-family:DengXian'>在后台服务中注册</span>push<span lang=ZH-CN
        style='font-family:DengXian'>认证</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>2.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>函数名</span></b></p>

        <p class=MsoNormal style='text-indent:10.0pt'>int PushManager.getInstance().register(String
        accessToken)</p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>3.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>参数说明</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输入参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=548
        style='width:411.05pt;margin-left:19.2pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>名称</span></b></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>accessToken</span></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>String</span></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>FIDO</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>服务颁发的</span><span
        style='font-size:10.5pt;line-height:120%'>accessToken</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输出参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=548
        style='width:411.05pt;margin-left:19.2pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=67 valign=top style='width:50.0pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=284 valign=top style='width:212.65pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=67 valign=top style='width:50.0pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span></p>
        </td>
        <td width=284 valign=top style='width:212.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>int</span></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>注册结果</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>0</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：注册成功</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>-1</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：未初始化</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：需要在工作线程中操作</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>2</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：由于网络原因，注册失败</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>3</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：服务端注册失败</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>4</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：密钥申请失败</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>认证</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>1.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>说明</span></b></p>

        <p class=MsoNormal style='text-indent:10.0pt'><span lang=ZH-CN
        style='font-family:DengXian'>进行</span>PUSH<span lang=ZH-CN style='font-family:
        DengXian'>认证，需要在</span>PUSH<span lang=ZH-CN style='font-family:DengXian'>回调中调用此接口，已提供的</span>JPush<span
        lang=ZH-CN style='font-family:DengXian'>实现不用处理。</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>2.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>函数名</span></b></p>

        <p class=MsoNormal style='text-indent:10.0pt'>int PushManager.getInstance().auth(Context
        ctx,String username,AuthenticateGetResponse getResponse)</p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>3.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>参数说明</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输入参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=548
        style='width:411.05pt;margin-left:19.2pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>名称</span></b></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>ctx</span></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>Context</span></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>Android</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>上下文</span></p>
        </td>
        </tr>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>username</span></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>String</span></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>用户标识</span></p>
        </td>
        </tr>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>getResponse</span></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>AuthenticateGetResponse</span></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>认证请求信息，由服务端推送下发，内容为调用</span><span
        style='font-size:10.5pt;line-height:120%'>/auth/init</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>接口的参数信息。</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输出参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=548
        style='width:411.05pt;margin-left:19.2pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=67 valign=top style='width:50.0pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=284 valign=top style='width:212.65pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=67 valign=top style='width:50.0pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span></p>
        </td>
        <td width=284 valign=top style='width:212.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>int</span></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>注册结果</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>0</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：认证成功</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>2</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：网络原因，未更新后台状态</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>4</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：用户拒绝</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>获取当前认证消息</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>1.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>说明</span></b></p>

        <p class=MsoNormal style='text-indent:10.0pt'><span lang=ZH-CN
        style='font-family:DengXian'>由于</span>PUSH<span lang=ZH-CN style='font-family:
        DengXian'>通道有时延和不稳定性，可调用此接口，获取当前正在进行的</span>push<span lang=ZH-CN
        style='font-family:DengXian'>认证请求。</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>2.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>函数名</span></b></p>

        <p class=MsoNormal style='text-indent:10.0pt'>int PushManager.getInstance().authPull(Context
        ctx,String username)</p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>3.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>参数说明</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输入参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=548
        style='width:411.05pt;margin-left:19.2pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>名称</span></b></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>ctx</span></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>Context</span></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>Android</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>上下文</span></p>
        </td>
        </tr>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>username</span></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>String</span></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>用户标识</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输出参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=548
        style='width:411.05pt;margin-left:19.2pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=67 valign=top style='width:50.0pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=284 valign=top style='width:212.65pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=67 valign=top style='width:50.0pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span></p>
        </td>
        <td width=284 valign=top style='width:212.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>int</span></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>注册结果</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>0</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：认证成功</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>2</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：网络原因，未更新后台状态</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>4</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：用户拒绝</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span style='font-size:15.0pt;
        font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>&nbsp;</span></b></p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span style='font-size:15.0pt;
        font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>&nbsp;</span></b></p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span style='font-size:15.0pt;
        font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>&nbsp;</span></b></p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>获取当前用户状态</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>1.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>函数名</span></b></p>

        <p class=MsoNormal style='text-indent:10.0pt'>int PushManager.getInstance().status(Context
        ctx<span lang=ZH-CN style='font-family:DengXian'>，</span>String username)</p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>2.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>参数说明</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输入参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=548
        style='width:411.05pt;margin-left:19.2pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>名称</span></b></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>ctx</span></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>Context</span></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>Android</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>上下文</span></p>
        </td>
        </tr>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>username</span></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>String</span></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>用户标识</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输出参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=548
        style='width:411.05pt;margin-left:19.2pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=67 valign=top style='width:50.0pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=284 valign=top style='width:212.65pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=67 valign=top style='width:50.0pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span></p>
        </td>
        <td width=284 valign=top style='width:212.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>int</span></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>当前用户状态</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>0</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：已注册</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>2</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：网络原因失败</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>3</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：服务调用失败</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>4</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：未注册</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal style='text-indent:10.0pt'>&nbsp;</p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>删除</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>1.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>函数名</span></b></p>

        <p class=MsoNormal style='margin-left:10.0pt'>int PushManager.getInstance().delete(Context
        ctx<span lang=ZH-CN style='font-family:DengXian'>，</span>String username,
        String accessToken)</p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>2.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>参数说明</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输入参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=548
        style='width:411.05pt;margin-left:19.2pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>名称</span></b></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>ctx</span></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>Context</span></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>Android</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>上下文</span></p>
        </td>
        </tr>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>username</span></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>String</span></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>用户名信息</span></p>
        </td>
        </tr>
        <tr>
        <td width=163 valign=top style='width:122.3pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>accessToken</span></p>
        </td>
        <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>String</span></p>
        </td>
        <td width=205 valign=top style='width:154.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>FIDO</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>服务颁发的</span><span
        style='font-size:10.5pt;line-height:120%'>accessToken</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'>&nbsp;</p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输出参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=548
        style='width:411.05pt;margin-left:19.2pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=67 valign=top style='width:50.0pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=284 valign=top style='width:212.65pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=67 valign=top style='width:50.0pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span></p>
        </td>
        <td width=284 valign=top style='width:212.65pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>int</span></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>删除结果</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>0</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：已删除</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>2</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：网络原因失败</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><a name="_Toc508033297"><b><span
        lang=ZH-CN style='font-size:15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:
        .4pt'>附录</span></b></a></p>

        <h2><a name="_Toc508031425"></a><a name="_Toc499645052"><span style='font-size:
        12.0pt;line-height:173%;font-family:"Microsoft YaHei",sans-serif'>1.</span></a><span
        lang=ZH-CN style='font-size:12.0pt;line-height:173%'>混淆配置</span></h2>

        <table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0
        style='margin-left:-1.7pt;border-collapse:collapse;border:none'>
        <tr style='height:61.5pt'>
        <td width=555 valign=top style='width:416.2pt;border:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:61.5pt'>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-align:justify;text-justify:inter-ideograph;
        text-indent:21.0pt'><span style='font-size:10.5pt;font-family:"Calibri",sans-serif'>##---------------Start:
        proguard configuration for self ----------</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:21.0pt'><span style='font-size:10.5pt;
        font-family:"Calibri",sans-serif'>-dontwarn com.gmrz.*</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:21.0pt'><span style='font-size:10.5pt;
        font-family:"Calibri",sans-serif'>-keep class com.gmrz.push.** { *;}</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-align:justify;text-justify:inter-ideograph;
        text-indent:21.0pt'><span style='font-size:10.5pt;font-family:"Calibri",sans-serif'>##---------------End:
        proguard configuration for self ----------</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal><a name="_Toc499645053">&nbsp;</a></p>

        <p class=MsoNormal>&nbsp;</p>

        <h2><a name="_Toc508031426"><span style='font-size:12.0pt;line-height:173%;
        font-family:"Microsoft YaHei",sans-serif'>2.AndroidManifest</span></a><span
        lang=ZH-CN style='font-size:12.0pt;line-height:173%'>需要的配置</span></h2>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:#3F5FBF'>&lt;!--</span><span lang=ZH-CN style='font-size:9.0pt;
        font-family:DengXian;color:#3F5FBF'>配置应用标识信息，</span><span style='font-size:
        9.0pt;font-family:Consolas;color:#3F5FBF'>userkey</span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F5FBF'>为管理后台中用户授权码</span><span
        style='font-size:9.0pt;font-family:Consolas;color:#3F5FBF'>--&gt;</span></p>

        <p class=p1><span style='font-size:9.0pt;font-family:Consolas;color:teal'>&lt;meta-data</span></p>

        <p class=p1 style='text-indent:18.0pt'><span style='font-size:9.0pt;font-family:
        Consolas;color:#7F007F'>android:name</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>=</span><i><span style='font-size:9.0pt;
        font-family:Consolas;color:#2A00FF'>&quot;fido.push.userkey&quot;</span></i></p>

        <p class=p1 style='text-indent:18.0pt'><span style='font-size:9.0pt;font-family:
        Consolas;color:#7F007F'>android:value</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>=</span><i><span style='font-size:9.0pt;
        font-family:Consolas;color:#2A00FF'>&quot;a32b4da32d9a67a5&quot;</span></i><span
        style='font-size:9.0pt;font-family:Consolas;color:teal'> /&gt;</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:#3F5FBF'>&lt;!--</span><span lang=ZH-CN style='font-size:9.0pt;
        font-family:DengXian;color:#3F5FBF'>配置公有云服务地址</span><span style='font-size:
        9.0pt;font-family:Consolas;color:#3F5FBF'>--&gt;</span></p>

        <p class=p1><span style='font-size:9.0pt;font-family:Consolas;color:teal'>&lt;meta-data</span></p>

        <p class=p1 style='text-indent:18.0pt'><span style='font-size:9.0pt;font-family:
        Consolas;color:#7F007F'>android:name</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>=</span><i><span style='font-size:9.0pt;
        font-family:Consolas;color:#2A00FF'>&quot;fido.push.url&quot;</span></i></p>

        <p class=p1 style='text-indent:18.0pt'><span style='font-size:9.0pt;font-family:
        Consolas;color:#7F007F'>android:value</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>=</span><i><span style='font-size:9.0pt;
        font-family:Consolas;color:#2A00FF'>&quot;https://api.nationauth.cn/push&quot;</span></i><span
        style='font-size:9.0pt;font-family:Consolas;color:teal'> /&gt;</span></p>

        <p class=p1><span style='font-size:9.0pt;font-family:Consolas;color:#3F7F7F'>&lt;/application&gt;</span></p>

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
    .page7{
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
            {font-family:Calibri;
            panose-1:2 15 5 2 2 2 4 3 2 4;}
        @font-face
            {font-family:"DengXian Light";
            panose-1:2 1 6 0 3 1 1 1 1 1;}
        @font-face
            {font-family:Monaco;
            panose-1:0 0 0 0 0 0 0 0 0 0;}
        @font-face
            {font-family:"Microsoft YaHei";
            panose-1:2 11 5 3 2 2 4 2 2 4;}
        @font-face
            {font-family:Menlo;
            panose-1:2 11 6 9 3 8 4 2 2 4;}
        @font-face
            {font-family:Consolas;
            panose-1:2 11 6 9 2 2 4 3 2 4;}
        @font-face
            {font-family:"\@DengXian";
            panose-1:2 1 6 0 3 1 1 1 1 1;}
        @font-face
            {font-family:"\@SimSun";
            panose-1:2 1 6 0 3 1 1 1 1 1;}
        @font-face
            {font-family:"\@Microsoft YaHei";}
        @font-face
            {font-family:"\@DengXian Light";}
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
        p.MsoNormalIndent, li.MsoNormalIndent, div.MsoNormalIndent
            {mso-style-link:"Normal Indent Char";
            margin:0cm;
            margin-bottom:.0001pt;
            text-align:justify;
            text-justify:inter-ideograph;
            text-indent:10.0pt;
            line-height:120%;
            font-size:12.0pt;
            font-family:"Arial",sans-serif;}
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
        p.MsoNoSpacing, li.MsoNoSpacing, div.MsoNoSpacing
            {mso-style-link:"No Spacing Char";
            margin:0cm;
            margin-bottom:.0001pt;
            font-size:11.0pt;
            font-family:DengXian;}
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
        span.NormalIndentChar
            {mso-style-name:"Normal Indent Char";
            mso-style-link:"Normal Indent";
            font-family:"Arial",sans-serif;}
        span.NoSpacingChar
            {mso-style-name:"No Spacing Char";
            mso-style-link:"No Spacing";
            font-family:"Microsoft YaHei",sans-serif;}
        p.p2, li.p2, div.p2
            {mso-style-name:p2;
            margin:0cm;
            margin-bottom:.0001pt;
            background:white;
            font-size:8.5pt;
            font-family:Menlo;
            color:#957E35;}
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