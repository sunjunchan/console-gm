<template>
    <div class="page10">
        <div class=WordSection1 style='layout-grid:15.6pt'>

        <h1><span style='color:#2E74B5'>Webauthn JS<span lang=ZH-CN>接口说明</span></span></h1>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>获取设备信息</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>1.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>函数名</span></b></p>

        <p class=MsoNormal style='text-indent:10.0pt'>String UAP.getDeviceInfo()</p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>2.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>参数说明</span></b></p>

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
        style='font-size:10.5pt;line-height:120%'>Device</span></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>内容如下</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal style='text-indent:10.0pt'>&nbsp;</p>

        <p class=MsoNormal style='text-indent:10.0pt'>Device<span lang=ZH-CN
        style='font-family:DengXian'>对象内容</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=548
        style='width:411.05pt;margin-left:19.2pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=144 valign=top style='width:108.15pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>名称</span></b></p>
        </td>
        <td width=206 valign=top style='width:154.5pt;border:solid windowtext 1.0pt;
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
        <td width=144 valign=top style='width:108.15pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>deviceId</span></p>
        </td>
        <td width=206 valign=top style='width:154.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>String</span></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>设备</span><span
        style='font-size:10.5pt;line-height:120%'>ID</span></p>
        </td>
        </tr>
        <tr>
        <td width=144 valign=top style='width:108.15pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>deviceInfo</span></p>
        </td>
        <td width=206 valign=top style='width:154.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>String</span></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>设备信息，系统</span><span
        style='font-size:10.5pt;line-height:120%'>userAgent</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>内容</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>平台认证能力</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>1.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>函数名</span></b></p>

        <p class=MsoNormal style='text-indent:10.0pt'>Promise&lt;String&gt; UAP.
        platformSupport ()</p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>2.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>参数说明</span></b></p>

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
        style='font-size:10.5pt;line-height:120%'>Array</span></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>当前设备支持的全部能力</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>cross-platform</span><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：跨平台认证器</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>platform</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>：平台认证器</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span style='font-size:15.0pt;
        font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>&nbsp;</span></b></p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>注册</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>1.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>函数名</span></b></p>

        <p class=MsoNormal style='text-indent:10.0pt'>Promise&lt;String&gt; UAP.reg (String
        request)</p>

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
        style='font-size:10.5pt;line-height:120%'>String</span></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>Webauthn</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>服务端</span><span
        style='font-size:10.5pt;line-height:120%'>reg/receive</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>得到的响应</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal style='text-indent:10.0pt'>&nbsp;</p>

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
        style='font-size:10.5pt;line-height:120%'>String</span></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>注册完成报文</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>需要发送至</span><span
        style='font-size:10.5pt;line-height:120%'>Webauthn</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>服务端</span><span
        style='font-size:10.5pt;line-height:120%'>reg/send</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>请求</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal style='text-indent:10.0pt'>&nbsp;</p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>认证</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>1.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>函数名</span></b></p>

        <p class=MsoNormal style='text-indent:10.0pt'>Promise&lt;String&gt; UAP.auth(String
        request)</p>

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
        style='font-size:10.5pt;line-height:120%'>String</span></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>Webauthn</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>服务端</span><span
        style='font-size:10.5pt;line-height:120%'>auth/receive</span><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>得到的响应</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal style='text-indent:10.0pt'>&nbsp;</p>

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
        style='font-size:10.5pt;line-height:120%'>String</span></p>
        </td>
        <td width=198 valign=top style='width:148.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>注册完成报文</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>需要发送至</span><span
        style='font-size:10.5pt;line-height:120%'>Webauthn</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>服务端</span><span
        style='font-size:10.5pt;line-height:120%'>auth/send</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>请求</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal style='background:white'>&nbsp;</p>

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
    .page10{
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