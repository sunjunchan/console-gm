<template>
    <div class="page13">
        <div class=WordSection1 style='layout-grid:15.6pt'>

        <h1><span style='color:#2E74B5'>UAF SDK<span lang=ZH-CN>接口说明</span></span></h1>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>初始化</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>函数名</span></p>

        <p class=MsoNormal><b><span style='font-size:10.0pt;font-family:Consolas'>public</span></b><span
        style='font-size:10.0pt;font-family:Consolas'> FIDOReInfo init(Activity
        activity, </span></p>

        <p class=MsoNormal style='margin-left:84.0pt'><span style='font-size:10.0pt;
        font-family:Consolas'>FidoParam fidoParam, Map&lt;UACPlugin, IGmrzAdapter&gt;
        supportMap);</span></p>

        <p class=MsoNormal><span style='font-size:10.0pt;font-family:Consolas'>&nbsp;</span></p>

        <p class=MsoNormal><b><span style='font-size:10.0pt;font-family:Consolas'>public
        void </span></b><span style='font-size:10.0pt;font-family:Consolas'>initAsync(Activity
        activity, </span></p>

        <p class=MsoNormal style='margin-left:63.0pt;text-indent:21.0pt'><span
        style='font-size:10.0pt;font-family:Consolas'>FidoParam fidoParam,
        Map&lt;UACPlugin, IGmrzAdapter&gt; supportMap<br>
             InitTask.IOnInitListener callback);</span></p>

        <p class=MsoNormal><span style='font-size:10.0pt;font-family:Consolas'>&nbsp;</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:"Microsoft YaHei",sans-serif'>2.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
        lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>参数说明</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:25.5pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输入参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
        style='margin-left:31.0pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=49 valign=top style='width:37.0pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=101 valign=top style='width:75.75pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>名字</span></b></p>
        </td>
        <td width=138 valign=top style='width:103.5pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是否必输</span></b></p>
        </td>
        <td width=151 valign=top style='width:113.25pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=49 valign=top style='width:37.0pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span></p>
        </td>
        <td width=101 valign=top style='width:75.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>activity</span></p>
        </td>
        <td width=138 valign=top style='width:103.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>Activity</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=151 valign=top style='width:113.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>Activity</span><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>实例</span></p>
        </td>
        </tr>
        <tr>
        <td width=49 valign=top style='width:37.0pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>2</span></p>
        </td>
        <td width=101 valign=top style='width:75.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>fidoParam</span></p>
        </td>
        <td width=138 valign=top style='width:103.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>FidoParam</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>否</span></p>
        </td>
        <td width=151 valign=top style='width:113.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.0pt;line-height:120%;font-family:SimSun'>设置</span><span
        style='font-size:10.0pt;line-height:120%'>FIDO</span><span lang=ZH-CN
        style='font-size:10.0pt;line-height:120%;font-family:SimSun'>的类型（</span><span
        style='font-size:10.0pt;line-height:120%'>REMOTE_CLIENT, LOCAL_CLIENT,
        AUTO_CLIENT</span><span lang=ZH-CN style='font-size:10.0pt;line-height:120%;
        font-family:SimSun'>分别表示使用</span><span style='font-size:10.0pt;line-height:
        120%'>TEE</span><span lang=ZH-CN style='font-size:10.0pt;line-height:120%;
        font-family:SimSun'>硬件方式的</span><span style='font-size:10.0pt;line-height:
        120%'>FIDO</span><span lang=ZH-CN style='font-size:10.0pt;line-height:120%;
        font-family:SimSun'>，使用</span><span style='font-size:10.0pt;line-height:120%'>Keystore
        Android</span><span lang=ZH-CN style='font-size:10.0pt;line-height:120%;
        font-family:SimSun'>自带的方式的</span><span style='font-size:10.0pt;line-height:
        120%'>FIDO</span><span lang=ZH-CN style='font-size:10.0pt;line-height:120%;
        font-family:SimSun'>和如果不支持硬件就调用</span><span style='font-size:10.0pt;
        line-height:120%'>Keystore</span><span lang=ZH-CN style='font-size:10.0pt;
        line-height:120%;font-family:SimSun'>）传</span><span style='font-size:10.0pt;
        line-height:120%'>null</span><span lang=ZH-CN style='font-size:10.0pt;
        line-height:120%;font-family:SimSun'>表示使用</span><span style='font-size:10.0pt;
        line-height:120%'>AUTO_CLIENT</span></p>
        </td>
        </tr>
        <tr>
        <td width=49 valign=top style='width:37.0pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>3</span></p>
        </td>
        <td width=101 valign=top style='width:75.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>supportMap</span></p>
        </td>
        <td width=138 valign=top style='width:103.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>Map</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>否</span></p>
        </td>
        <td width=151 valign=top style='width:113.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.0pt;line-height:120%;font-family:SimSun'>集合的键为插件名称，值为实现了</span><span
        style='font-size:10.0pt;line-height:120%;font-family:Consolas'>IGmrzAdapter</span><span
        lang=ZH-CN style='font-size:10.0pt;line-height:120%;font-family:SimSun'>接口的人脸或声纹采集插件实例</span></p>
        </td>
        </tr>
        <tr>
        <td width=49 valign=top style='width:37.0pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>4</span></p>
        </td>
        <td width=101 valign=top style='width:75.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>callback</span></p>
        </td>
        <td width=138 valign=top style='width:103.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>InitTask.</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>IOnInitListener</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>否</span></p>
        </td>
        <td width=151 valign=top style='width:113.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>异步回调函数</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:25.5pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输出参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=510
        style='width:382.75pt;margin-left:31.0pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=51 valign=top style='width:38.2pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=237 valign=top style='width:178.05pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=222 valign=top style='width:166.5pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=51 valign=top style='width:38.2pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span></p>
        </td>
        <td width=237 valign=top style='width:178.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.0pt;line-height:120%;font-family:Consolas'>FIDOReInfo</span></p>
        </td>
        <td width=222 valign=top style='width:166.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>参见附录</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal>&nbsp;</p>

        <p class=MsoNormal>3<span lang=ZH-CN style='font-family:DengXian'>、函数说明</span></p>

        <p class=MsoNormal>       <span style='font-size:10.0pt;font-family:Consolas'>init()</span><span
        lang=ZH-CN style='font-size:10.0pt;font-family:DengXian'>方法用于初始化</span><span
        style='font-size:10.0pt;font-family:Consolas'>SDK, </span><span lang=ZH-CN
        style='font-size:10.0pt;font-family:DengXian'>如仅使用</span><span
        style='font-size:10.0pt;font-family:Consolas'>FIDO</span><span lang=ZH-CN
        style='font-size:10.0pt;font-family:DengXian'>功能不需传入</span><span
        style='font-size:10.0pt;font-family:Consolas'>supportMap. </span><span
        lang=ZH-CN style='font-size:10.0pt;font-family:DengXian'>初始化同时会设置</span><span
        style='font-size:10.0pt;font-family:Consolas'>FIDO</span><span lang=ZH-CN
        style='font-size:10.0pt;font-family:DengXian'>操作的类型</span><span
        style='font-size:10.0pt;font-family:Consolas'>TEE</span><span lang=ZH-CN
        style='font-size:10.0pt;font-family:DengXian'>或</span><span style='font-size:
        10.0pt;font-family:Consolas'>Keystore.</span><span lang=ZH-CN style='font-size:
        10.0pt;font-family:DengXian'>如初始化函数返回失败</span><span style='font-size:10.0pt;
        font-family:Consolas'>, </span><span lang=ZH-CN style='font-size:10.0pt;
        font-family:DengXian'>则不应继续向下的操作</span><span style='font-size:10.0pt;
        font-family:Consolas'>.</span></p>

        <p class=MsoNormal><span style='font-size:10.0pt;font-family:Consolas'>&nbsp;</span></p>

        <p class=MsoNormal>4<span lang=ZH-CN style='font-family:DengXian'>、调用示例</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>FIDOReInfo reInfo = FidoAppDirectSDK.getInstance().init(activity,
        </span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>param, authAbilty);</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>if (reInfo.getStatus() != FidoStatus.</span><b><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F0055'>SUCCESS</span></b><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>) {</span></p>

        <p class=MsoNormal style='text-indent:21.0pt'><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F5F'>// </span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F7F5F'>初始化</span><span
        style='font-size:9.0pt;font-family:Consolas;color:#3F7F5F'>SDK</span><span
        lang=ZH-CN style='font-size:9.0pt;font-family:DengXian;color:#3F7F5F'>成功</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>}</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'> else if (</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>reInfo.getStatus() == FidoStatus.</span><b><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F0055'>FAILED</span></b><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>) {</span></p>

        <p class=MsoNormal style='text-indent:21.0pt'><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F5F'>// </span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F7F5F'>初始化</span><span
        style='font-size:9.0pt;font-family:Consolas;color:#3F7F5F'>SDK</span><span
        lang=ZH-CN style='font-size:9.0pt;font-family:DengXian;color:#3F7F5F'>失败</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>}</span></p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>设备支持的能力</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>1.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>函数名</span></b></p>

        <p class=MsoNormal style='text-indent:10.0pt'>FIDOReInfo FidoAppDirectSDK.getInstance().
        checkSupport(Activity ctx,String authType)</p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><b>2.<span
        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span
        lang=ZH-CN style='font-family:SimSun'>参数说明</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输出参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
        style='margin-left:19.6pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=65 valign=top style='width:48.45pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=89 valign=top style='width:66.7pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>名字</span></b></p>
        </td>
        <td width=162 valign=top style='width:121.5pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是否必输</span></b></p>
        </td>
        <td width=139 valign=top style='width:104.25pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=65 valign=top style='width:48.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span></p>
        </td>
        <td width=89 valign=top style='width:66.7pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>activity</span></p>
        </td>
        <td width=162 valign=top style='width:121.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>Activity</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=139 valign=top style='width:104.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>activity</span><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>实例</span></p>
        </td>
        </tr>
        <tr>
        <td width=65 valign=top style='width:48.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>2</span></p>
        </td>
        <td width=89 valign=top style='width:66.7pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>authTYpe</span></p>
        </td>
        <td width=162 valign=top style='width:121.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=139 valign=top style='width:104.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>需要判断的认证方式</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal>3<span lang=ZH-CN style='font-family:DengXian'>、函数说明</span></p>

        <p class=MsoNormal>       checkSupport<span style='font-size:10.0pt;font-family:
        Consolas'>()</span><span lang=ZH-CN style='font-size:10.0pt;font-family:DengXian'>方法用于判断当前设备支持情况</span></p>

        <p class=MsoNormal><span style='font-size:10.0pt;font-family:Consolas'>&nbsp;</span></p>

        <p class=MsoNormal>4<span lang=ZH-CN style='font-family:DengXian'>、调用示例</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>FIDOReInfo reInfo = FidoAppDirectSDK.getInstance().</span><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>checkSupport</span><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>(activity, </span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>auth</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>Type</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>);</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>if (reInfo.getStatus() != FidoStatus.</span><b><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F0055'>SUCCESS</span></b><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>) {</span></p>

        <p class=MsoNormal style='text-indent:21.0pt'><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F5F'>// </span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F7F5F'>支持当前认证方式</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>}</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'> else if (</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>reInfo.getStatus() == FidoStatus.</span><b><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F0055'>FAILED</span></b><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>) {</span></p>

        <p class=MsoNormal style='text-indent:21.0pt'><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F5F'>// </span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F7F5F'>不支持当前认证方式</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>}</span></p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>注册</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>函数名</span></p>

        <p class=MsoNormal><b><span style='font-size:10.0pt;font-family:Consolas;
        color:black'>public </span></b><span style='font-size:10.0pt;font-family:Consolas;
        color:black'>FIDOReInfo register(Activity activity, </span></p>

        <p class=MsoNormal style='margin-left:63.0pt'><span style='font-size:10.0pt;
        font-family:Consolas;color:black'>String accessToken, String transNo, String
        userName, String authType);</span></p>

        <p class=MsoNormal><span style='font-size:10.0pt;font-family:Consolas;
        color:black'>&nbsp;</span></p>

        <p class=MsoNormal><b><span style='font-size:10.0pt;font-family:Consolas;
        color:black'>public void </span></b><span style='font-size:10.0pt;font-family:
        Consolas;color:black'>registerAsync(Activity activity, </span></p>

        <p class=MsoNormal style='margin-left:63.0pt'><span style='font-size:10.0pt;
        font-family:Consolas;color:black'>String appID, String transNo, String
        userName, String authType, RegisterTask.IOnRegisterListener callback);</span></p>

        <p class=MsoNormal style='margin-left:63.0pt'><span style='font-size:10.0pt;
        font-family:Consolas;color:black'>&nbsp;</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>参数说明</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:25.5pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输入参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
        style='margin-left:19.6pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=65 valign=top style='width:48.45pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=89 valign=top style='width:66.7pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>名字</span></b></p>
        </td>
        <td width=162 valign=top style='width:121.5pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是否必输</span></b></p>
        </td>
        <td width=139 valign=top style='width:104.25pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=65 valign=top style='width:48.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span></p>
        </td>
        <td width=89 valign=top style='width:66.7pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>activity</span></p>
        </td>
        <td width=162 valign=top style='width:121.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>Activity</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=139 valign=top style='width:104.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>activity</span><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>实例</span></p>
        </td>
        </tr>
        <tr>
        <td width=65 valign=top style='width:48.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>2</span></p>
        </td>
        <td width=89 valign=top style='width:66.7pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>accessToken</span></p>
        </td>
        <td width=162 valign=top style='width:121.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=139 valign=top style='width:104.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>由服务器获取的</span><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>accessToken</span></p>
        </td>
        </tr>
        <tr>
        <td width=65 valign=top style='width:48.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>3</span></p>
        </td>
        <td width=89 valign=top style='width:66.7pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>transNo</span></p>
        </td>
        <td width=162 valign=top style='width:121.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=139 valign=top style='width:104.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>交易流水号</span></p>
        </td>
        </tr>
        <tr>
        <td width=65 valign=top style='width:48.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>4</span></p>
        </td>
        <td width=89 valign=top style='width:66.7pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>username</span></p>
        </td>
        <td width=162 valign=top style='width:121.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=139 valign=top style='width:104.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>用户名</span></p>
        </td>
        </tr>
        <tr>
        <td width=65 valign=top style='width:48.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>5</span></p>
        </td>
        <td width=89 valign=top style='width:66.7pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>transType</span></p>
        </td>
        <td width=162 valign=top style='width:121.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=139 valign=top style='width:104.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>业务类型</span></p>
        </td>
        </tr>
        <tr>
        <td width=65 valign=top style='width:48.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>6</span></p>
        </td>
        <td width=89 valign=top style='width:66.7pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>authType</span></p>
        </td>
        <td width=162 valign=top style='width:121.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=139 valign=top style='width:104.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>认证方式</span></p>
        </td>
        </tr>
        <tr>
        <td width=65 valign=top style='width:48.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>7</span></p>
        </td>
        <td width=89 valign=top style='width:66.7pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:7.0pt;line-height:120%;font-family:Consolas'>forceRegOpType</span></p>
        </td>
        <td width=162 valign=top style='width:121.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=139 valign=top style='width:104.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>强制注册</span></p>
        </td>
        </tr>
        <tr>
        <td width=65 valign=top style='width:48.45pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>8</span></p>
        </td>
        <td width=89 valign=top style='width:66.7pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>callback</span></p>
        </td>
        <td width=162 valign=top style='width:121.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>RegisterTask.</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>IOnRegisterListener</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>否</span></p>
        </td>
        <td width=139 valign=top style='width:104.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>异步回调函数</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:25.5pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输出参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=526
        style='width:394.55pt;margin-left:19.2pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=67 valign=top style='width:50.0pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=249 valign=top style='width:187.05pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=210 valign=top style='width:157.5pt;border:solid windowtext 1.0pt;
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
        <td width=249 valign=top style='width:187.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>FIDOReInfo</span><span
        style='font-size:10.0pt;line-height:120%;font-family:Consolas;color:black'> </span></p>
        </td>
        <td width=210 valign=top style='width:157.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>参见附录</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal>&nbsp;</p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>函数说明</span></p>

        <p class=MsoNormal>       <span style='font-size:10.0pt;font-family:Consolas'>register()</span><span
        lang=ZH-CN style='font-size:10.0pt;font-family:DengXian'>方法用于用户注册场景</span><span
        style='font-size:10.0pt;font-family:Consolas'>.</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>调用示例</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:black'>FIDOReInfo </span><span style='font-size:9.0pt;font-family:Consolas;
        color:black'>reInfo</span><span style='font-size:9.0pt;font-family:Consolas;
        color:black'> = FidoAppDirectSDK.getInstance().register(activity,</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:black'>accessToken, transNo, username , transType , authType , </span><span
        style='font-size:7.0pt;font-family:Consolas'>forceRegOpType</span><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>);</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:black'>&nbsp;</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>if (reInfo.getStatus() != FidoStatus.</span><b><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F0055'>SUCCESS</span></b><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>) {</span></p>

        <p class=MsoNormal style='text-indent:21.0pt'><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F5F'>// </span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F7F5F'>注册成功</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>}</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'> else if (</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>reInfo.getStatus() == FidoStatus.</span><b><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F0055'>FAILED</span></b><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>) {</span></p>

        <p class=MsoNormal style='text-indent:21.0pt'><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F5F'>// </span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F7F5F'>注册失败</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>}</span></p>

        <p class=MsoNormal style='text-indent:10.0pt'>&nbsp;</p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>认证</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:28.0pt;text-indent:-18.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>函数名</span></p>

        <p class=MsoNormal style='background:white'><b><span style='font-size:10.0pt;
        font-family:Consolas;color:black'>public</span></b><span style='font-size:10.0pt;
        font-family:Consolas;color:black'> FIDOReInfo authentication(Activity activity,
        </span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:10.0pt;
        font-family:Consolas;color:black'>        String userName, String transNo,
        JSONArray authType);</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:10.0pt;
        font-family:Consolas;color:black'>&nbsp;</span></p>

        <p class=MsoNormal style='background:white'><b><span style='font-size:10.0pt;
        font-family:Consolas;color:black'>public void </span></b><span
        style='font-size:10.0pt;font-family:Consolas;color:black'>authenticationAsync(Activity
        activity, </span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:10.0pt;
        font-family:Consolas;color:black'>        String userName, String transNo,
        JSONArray authType,<br>
                 AuthenticationTask.IOnAuthenticationListener callback);</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:10.0pt;
        font-family:Consolas;color:black'>&nbsp;</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:28.0pt;text-indent:-18.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>参数说明</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:25.5pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输入参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=537
        style='width:402.9pt;margin-left:19.6pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=62 valign=top style='width:46.75pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=85 valign=top style='width:63.85pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>名字</span></b></p>
        </td>
        <td width=204 valign=top style='width:153.05pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是否必输</span></b></p>
        </td>
        <td width=114 valign=top style='width:85.25pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr style='height:35.5pt'>
        <td width=62 valign=top style='width:46.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:35.5pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span></p>
        </td>
        <td width=85 valign=top style='width:63.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:35.5pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>activity</span></p>
        </td>
        <td width=204 valign=top style='width:153.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:35.5pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>Activity</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:35.5pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=114 valign=top style='width:85.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:35.5pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>activity</span><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>实例</span></p>
        </td>
        </tr>
        <tr>
        <td width=62 valign=top style='width:46.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>2</span></p>
        </td>
        <td width=85 valign=top style='width:63.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>userName</span></p>
        </td>
        <td width=204 valign=top style='width:153.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=114 valign=top style='width:85.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>用户名</span></p>
        </td>
        </tr>
        <tr>
        <td width=62 valign=top style='width:46.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>3</span></p>
        </td>
        <td width=85 valign=top style='width:63.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>transNo</span></p>
        </td>
        <td width=204 valign=top style='width:153.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=114 valign=top style='width:85.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>交易流水号</span></p>
        </td>
        </tr>
        <tr>
        <td width=62 valign=top style='width:46.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>4</span></p>
        </td>
        <td width=85 valign=top style='width:63.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>transType</span></p>
        </td>
        <td width=204 valign=top style='width:153.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=114 valign=top style='width:85.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>业务类型</span></p>
        </td>
        </tr>
        <tr>
        <td width=62 valign=top style='width:46.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>5</span></p>
        </td>
        <td width=85 valign=top style='width:63.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>authType</span></p>
        </td>
        <td width=204 valign=top style='width:153.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=114 valign=top style='width:85.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>认证方式</span></p>
        </td>
        </tr>
        <tr>
        <td width=62 valign=top style='width:46.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>6</span></p>
        </td>
        <td width=85 valign=top style='width:63.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:6.0pt;line-height:120%;font-family:Consolas'>transactionText</span></p>
        </td>
        <td width=204 valign=top style='width:153.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=114 valign=top style='width:85.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>交易信息</span></p>
        </td>
        </tr>
        <tr>
        <td width=62 valign=top style='width:46.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>7</span></p>
        </td>
        <td width=85 valign=top style='width:63.85pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>callback</span></p>
        </td>
        <td width=204 valign=top style='width:153.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.0pt;line-height:120%;font-family:Consolas;color:black'>AuthenticationTask.</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.0pt;line-height:120%;font-family:Consolas;color:black'>IOnAuthenticationListener</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>否</span></p>
        </td>
        <td width=114 valign=top style='width:85.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>异步回调函数</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:25.5pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输出参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=538
        style='width:403.55pt;margin-left:19.2pt;border-collapse:collapse;border:none'>
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
        <td width=188 valign=top style='width:140.9pt;border:solid windowtext 1.0pt;
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
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>FIDOReInfo </span></p>
        </td>
        <td width=188 valign=top style='width:140.9pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>参见附录</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal>&nbsp;</p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:28.0pt;text-indent:-18.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>函数说明</span></p>

        <p class=MsoNormal style='margin-left:28.0pt'><span style='font-size:10.0pt;
        font-family:Consolas'>authentication()</span><span lang=ZH-CN style='font-size:
        10.0pt;font-family:DengXian'>方法用于用户认证与交易场景</span><span style='font-size:10.0pt;
        font-family:Consolas'>.</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:28.0pt;text-indent:-18.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>调用示例</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>FIDOReInfo fidoReInfo = FidoAppDirectSDK.getInstance().authentication(activity,
        username, transNo,jsonArray);</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>&nbsp;</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>if (reInfo.getStatus() != FidoStatus.</span><b><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F0055'>SUCCESS</span></b><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>) {</span></p>

        <p class=MsoNormal style='text-indent:21.0pt'><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F5F'>// </span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F7F5F'>认证成功</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>}</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'> else if (</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>reInfo.getStatus() == FidoStatus.</span><b><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F0055'>FAILED</span></b><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>) {</span></p>

        <p class=MsoNormal style='text-indent:21.0pt'><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F5F'>// </span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F7F5F'>认证失败</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>}</span></p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>注销</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>函数名</span></p>

        <p class=MsoNormal><b><span style='font-size:10.0pt;font-family:Consolas;
        color:black'>public </span></b><span style='font-size:10.0pt;font-family:Consolas;
        color:black'>FIDOReInfo deregister(Activity activity, </span></p>

        <p class=MsoNormal style='margin-left:42.0pt;text-indent:21.0pt'><span
        style='font-size:10.0pt;font-family:Consolas;color:black'>String userName,
        String accessToken, String transNo, String authType)<b>;</b></span></p>

        <p class=MsoNormal><b><span style='font-size:10.0pt;font-family:Consolas;
        color:black'>&nbsp;</span></b></p>

        <p class=MsoNormal><b><span style='font-size:10.0pt;font-family:Consolas;
        color:black'>public void </span></b><span style='font-size:10.0pt;font-family:
        Consolas;color:black'>deregisterAsync(Activity activity, </span></p>

        <p class=MsoNormal style='margin-left:63.0pt'><span style='font-size:10.0pt;
        font-family:Consolas;color:black'>String userName, String accessToken, String
        transNo, String authType,<br>
        DeregisterTask.IOnDeregisterListener callback);</span></p>

        <p class=MsoNormal style='margin-left:63.0pt'><b><span style='font-size:10.0pt;
        font-family:Consolas;color:black'>&nbsp;</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>参数说明</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:25.5pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输入参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
        style='margin-left:31.0pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=49 valign=top style='width:36.9pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=92 valign=top style='width:69.05pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>名字</span></b></p>
        </td>
        <td width=177 valign=top style='width:132.8pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是否必输</span></b></p>
        </td>
        <td width=121 valign=top style='width:90.75pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=49 valign=top style='width:36.9pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span></p>
        </td>
        <td width=92 valign=top style='width:69.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>activity</span></p>
        </td>
        <td width=177 valign=top style='width:132.8pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>Activity</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=121 valign=top style='width:90.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>activity</span><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>实例</span></p>
        </td>
        </tr>
        <tr>
        <td width=49 valign=top style='width:36.9pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>2</span></p>
        </td>
        <td width=92 valign=top style='width:69.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>userName</span></p>
        </td>
        <td width=177 valign=top style='width:132.8pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=121 valign=top style='width:90.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>用户名</span></p>
        </td>
        </tr>
        <tr>
        <td width=49 valign=top style='width:36.9pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>3</span></p>
        </td>
        <td width=92 valign=top style='width:69.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>accessToken</span></p>
        </td>
        <td width=177 valign=top style='width:132.8pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=121 valign=top style='width:90.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>FIDO</span><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>服务器颁发的</span><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>accessToken</span></p>
        </td>
        </tr>
        <tr>
        <td width=49 valign=top style='width:36.9pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>4</span></p>
        </td>
        <td width=92 valign=top style='width:69.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>transNo</span></p>
        </td>
        <td width=177 valign=top style='width:132.8pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=121 valign=top style='width:90.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>交易流水号</span></p>
        </td>
        </tr>
        <tr>
        <td width=49 valign=top style='width:36.9pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>5</span></p>
        </td>
        <td width=92 valign=top style='width:69.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>authType</span></p>
        </td>
        <td width=177 valign=top style='width:132.8pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=121 valign=top style='width:90.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>认证方式</span></p>
        </td>
        </tr>
        <tr>
        <td width=49 valign=top style='width:36.9pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>6</span></p>
        </td>
        <td width=92 valign=top style='width:69.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>callback</span></p>
        </td>
        <td width=177 valign=top style='width:132.8pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>DeregisterTask.</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>IOnDeregisterListener</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>否</span></p>
        </td>
        <td width=121 valign=top style='width:90.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>异步回调函数</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:25.5pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输出参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
        style='margin-left:31.0pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=50 valign=top style='width:37.7pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=268 valign=top style='width:201.05pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=193 valign=top style='width:144.75pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=50 valign=top style='width:37.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span></p>
        </td>
        <td width=268 valign=top style='width:201.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>FIDOReInfo</span></p>
        </td>
        <td width=193 valign=top style='width:144.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>参见附录</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal>&nbsp;</p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>函数说明</span></p>

        <p class=MsoNormal>         <span style='font-size:10.0pt;font-family:Consolas'>deregister()</span><span
        lang=ZH-CN style='font-size:10.0pt;font-family:DengXian'>方法用于用户注销某种认证方式的场景</span><span
        style='font-size:10.0pt;font-family:Consolas'>.</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:31.0pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>示例代码</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:black'>FIDOReInfo reInfo =
        FidoAppDirectSDK.getInstance().deregister(activity, </span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:black'>username, accessToken, TransNo, authType);</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:black'>&nbsp;</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>if (reInfo.getStatus() != FidoStatus.</span><b><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F0055'>SUCCESS</span></b><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>) {</span></p>

        <p class=MsoNormal style='text-indent:21.0pt'><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F5F'>// </span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F7F5F'>注销成功</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>}</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'> else if (</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>reInfo.getStatus() == FidoStatus.</span><b><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F0055'>FAILED</span></b><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>) {</span></p>

        <p class=MsoNormal style='text-indent:21.0pt'><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F5F'>// </span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F7F5F'>注销失败</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>}</span></p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>注销全部</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:28.0pt;text-indent:-18.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>函数名</span></p>

        <p class=MsoNormal><b><span style='font-size:10.0pt;font-family:Consolas;
        color:black'>public </span></b><span style='font-size:10.0pt;font-family:Consolas;
        color:black'>FIDOReInfo deregisterAll(Activity activity, </span></p>

        <p class=MsoNormal style='margin-left:63.0pt'><span style='font-size:10.0pt;
        font-family:Consolas;color:black'>String userName, String accessToken, String
        transNo, String authType);</span></p>

        <p class=MsoNormal><b><span style='font-size:10.0pt;font-family:Consolas;
        color:black'>&nbsp;</span></b></p>

        <p class=MsoNormal><b><span style='font-size:10.0pt;font-family:Consolas;
        color:black'>public void </span></b><span style='font-size:10.0pt;font-family:
        Consolas;color:black'>deregisterAllAsync(Activity activity, </span></p>

        <p class=MsoNormal style='margin-left:63.0pt'><span style='font-size:10.0pt;
        font-family:Consolas;color:black'>String userName, String accessToken, String
        transNo, String authType,<br>
        DeregisterAllTask.IOnDeregisterAllListener callback);</span></p>

        <p class=MsoNormal style='margin-left:63.0pt'><span style='font-size:10.0pt;
        font-family:Consolas;color:black'>&nbsp;</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:28.0pt;text-indent:-18.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>参数说明</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:25.5pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输入参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=528
        style='width:396.25pt;margin-left:31.0pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=50 valign=top style='width:37.5pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=94 valign=top style='width:70.75pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>名字</span></b></p>
        </td>
        <td width=204 valign=top style='width:153.0pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是否必输</span></b></p>
        </td>
        <td width=108 valign=top style='width:81.0pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=50 valign=top style='width:37.5pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span></p>
        </td>
        <td width=94 valign=top style='width:70.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>activity</span></p>
        </td>
        <td width=204 valign=top style='width:153.0pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>Activity</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=108 valign=top style='width:81.0pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>activity</span><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>实例</span></p>
        </td>
        </tr>
        <tr>
        <td width=50 valign=top style='width:37.5pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>2</span></p>
        </td>
        <td width=94 valign=top style='width:70.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>userName</span></p>
        </td>
        <td width=204 valign=top style='width:153.0pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=108 valign=top style='width:81.0pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>用户名</span></p>
        </td>
        </tr>
        <tr>
        <td width=50 valign=top style='width:37.5pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>3</span></p>
        </td>
        <td width=94 valign=top style='width:70.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>accessToken</span></p>
        </td>
        <td width=204 valign=top style='width:153.0pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=108 valign=top style='width:81.0pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>FIDO</span><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>服务器颁发的</span><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>accessToken</span></p>
        </td>
        </tr>
        <tr>
        <td width=50 valign=top style='width:37.5pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>4</span></p>
        </td>
        <td width=94 valign=top style='width:70.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>transNo</span></p>
        </td>
        <td width=204 valign=top style='width:153.0pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=108 valign=top style='width:81.0pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>交易流水号</span></p>
        </td>
        </tr>
        <tr>
        <td width=50 valign=top style='width:37.5pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>5</span></p>
        </td>
        <td width=94 valign=top style='width:70.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>authType</span></p>
        </td>
        <td width=204 valign=top style='width:153.0pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=108 valign=top style='width:81.0pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>认证方式</span></p>
        </td>
        </tr>
        <tr>
        <td width=50 valign=top style='width:37.5pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>6</span></p>
        </td>
        <td width=94 valign=top style='width:70.75pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>callback</span></p>
        </td>
        <td width=204 valign=top style='width:153.0pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>DeregisterAllTask.</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>IOnDeregisterAllListener</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>否</span></p>
        </td>
        <td width=108 valign=top style='width:81.0pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>异步回调函数</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:25.5pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输出参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=528
        style='width:396.25pt;margin-left:31.0pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=50 valign=top style='width:37.7pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=298 valign=top style='width:223.55pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=180 valign=top style='width:135.0pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=50 valign=top style='width:37.7pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span></p>
        </td>
        <td width=298 valign=top style='width:223.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>FIDOReInfo</span></p>
        </td>
        <td width=180 valign=top style='width:135.0pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>参见附录</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal>&nbsp;</p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:28.0pt;text-indent:-18.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>函数说明</span></p>

        <p class=MsoNormal>        <span style='font-size:10.0pt;font-family:Consolas'>deregisterAll()</span><span
        lang=ZH-CN style='font-size:10.0pt;font-family:DengXian'>方法用于用户注销全部认证方式的场景</span><span
        style='font-size:10.0pt;font-family:Consolas'>.</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:28.0pt;text-indent:-18.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>示例代码</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:black'>FIDOReInfo reInfo = FidoAppDirectSDK.getInstance().deregisterAll(activity,
        username, accessToken, TransNo, authType);</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:black'>&nbsp;</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>if (reInfo.getStatus() != FidoStatus.</span><b><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F0055'>SUCCESS</span></b><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>) {</span></p>

        <p class=MsoNormal style='text-indent:21.0pt'><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F5F'>// </span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F7F5F'>注销全部成功</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>}</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'> else if (</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>reInfo.getStatus() == FidoStatus.</span><b><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F0055'>FAILED</span></b><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>) {</span></p>

        <p class=MsoNormal style='text-indent:21.0pt'><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F5F'>// </span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F7F5F'>注销全部失败</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>}</span></p>

        <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>查询用户开通状态</span></b></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:28.0pt;text-indent:-18.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>函数名</span></p>

        <p class=MsoNormal style='background:white'><b><span style='font-size:10.5pt;
        font-family:Consolas'>public boolean</span></b><span style='font-size:10.5pt;
        font-family:Consolas'> checkUserStatus(Activity activity, </span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:10.5pt;
        font-family:Consolas'>String userName, String transNo, String authType);</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:10.5pt;
        font-family:Consolas'>&nbsp;</span></p>

        <p class=MsoNormal style='background:white'><b><span style='font-size:10.5pt;
        font-family:Consolas'>public void </span></b><span style='font-size:10.5pt;
        font-family:Consolas'>checkUserStatusAsync(Activity activity, </span></p>

        <p class=MsoNormal style='margin-left:42.0pt;background:white'><span
        style='font-size:10.5pt;font-family:Consolas'>String userName, String transNo,
        String authType,<br>
        CheckUserStatusTask.IOnCheckUserStatusListener callback);</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:10.5pt;
        font-family:Consolas'>&nbsp;</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:28.0pt;text-indent:-18.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>参数说明</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:25.5pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输入参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
        style='margin-left:5.4pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=69 valign=top style='width:52.1pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=84 valign=top style='width:63.2pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>名字</span></b></p>
        </td>
        <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是否必输</span></b></p>
        </td>
        <td width=103 valign=top style='width:77.25pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=69 valign=top style='width:52.1pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span></p>
        </td>
        <td width=84 valign=top style='width:63.2pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>activity</span></p>
        </td>
        <td width=217 valign=top style='width:162.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>Activity</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=103 valign=top style='width:77.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>activity</span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>实例</span></p>
        </td>
        </tr>
        <tr>
        <td width=69 valign=top style='width:52.1pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>2</span></p>
        </td>
        <td width=84 valign=top style='width:63.2pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>userName</span></p>
        </td>
        <td width=217 valign=top style='width:162.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=103 valign=top style='width:77.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>用户名</span></p>
        </td>
        </tr>
        <tr>
        <td width=69 valign=top style='width:52.1pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>3</span></p>
        </td>
        <td width=84 valign=top style='width:63.2pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>transNo</span></p>
        </td>
        <td width=217 valign=top style='width:162.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=103 valign=top style='width:77.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>交易流水号</span></p>
        </td>
        </tr>
        <tr>
        <td width=69 valign=top style='width:52.1pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>4</span></p>
        </td>
        <td width=84 valign=top style='width:63.2pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>authType</span></p>
        </td>
        <td width=217 valign=top style='width:162.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>String</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>是</span></p>
        </td>
        <td width=103 valign=top style='width:77.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>认证类型</span></p>
        </td>
        </tr>
        <tr>
        <td width=69 valign=top style='width:52.1pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>5</span></p>
        </td>
        <td width=84 valign=top style='width:63.2pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>callback</span></p>
        </td>
        <td width=217 valign=top style='width:162.55pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>CheckUserStatusTask.</span></p>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>IOnCheckUserStatusListener</span></p>
        </td>
        <td width=72 valign=top style='width:54.0pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>否</span></p>
        </td>
        <td width=103 valign=top style='width:77.25pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>异步回调函数</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:25.5pt;text-indent:-21.0pt;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Wingdings'>Ø<span
        style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>输出参数</span></p>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=544
        style='width:408.35pt;margin-left:5.4pt;border-collapse:collapse;border:none'>
        <tr>
        <td width=85 valign=top style='width:63.8pt;border:solid windowtext 1.0pt;
        background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>序号</span></b></p>
        </td>
        <td width=285 valign=top style='width:214.05pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>数据类型</span></b></p>
        </td>
        <td width=174 valign=top style='width:130.5pt;border:solid windowtext 1.0pt;
        border-left:none;background:#DEEAF6;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><b><span
        lang=ZH-CN style='font-size:10.5pt;line-height:120%;font-family:SimSun'>备注</span></b></p>
        </td>
        </tr>
        <tr>
        <td width=85 valign=top style='width:63.8pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%'>1</span></p>
        </td>
        <td width=285 valign=top style='width:214.05pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.5pt;line-height:120%;font-family:Consolas'>Boolean</span></p>
        </td>
        <td width=174 valign=top style='width:130.5pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt'>
        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'><span lang=ZH-CN
        style='font-size:10.5pt;line-height:120%;font-family:SimSun'>用户是否开通该业务</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:28.0pt;text-indent:-18.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>函数说明</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:28.0pt;text-indent:0cm;word-break:break-all'><span
        style='font-size:10.0pt;line-height:120%;font-family:Consolas'>checkUserStatus()</span><span
        lang=ZH-CN style='font-size:10.0pt;line-height:120%;font-family:"Microsoft YaHei",sans-serif'>方法用于检查用户是否开通某种认证业务的场景</span><span
        style='font-size:10.0pt;line-height:120%;font-family:Consolas'>.</span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:28.0pt;text-indent:-18.0pt;word-break:break-all'><span
        style='font-family:"Microsoft YaHei",sans-serif'>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
        </span></span><span lang=ZH-CN style='font-family:"Microsoft YaHei",sans-serif'>示例代码</span></p>

        <p class=MsoNormal><b><span style='font-size:9.0pt;font-family:Consolas;
        color:black'>boolean</span></b><span style='font-size:9.0pt;font-family:Consolas;
        color:black'> result = FidoAppDirectSDK.getInstance().checkUserStatus(activity,
        </span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:black'>userName, transNo, authType);</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:black'>&nbsp;</span></p>

        <p class=MsoNormal><b><span style='font-size:9.0pt;font-family:Consolas;
        color:#7F0055'>if</span></b><span style='font-size:9.0pt;font-family:Consolas;
        color:black'> (result) {</span></p>

        <p class=MsoNormal style='text-indent:21.0pt'><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F5F'>// </span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F7F5F'>已开通此认证方式</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:black'>} </span><b><span style='font-size:9.0pt;font-family:Consolas;
        color:#7F0055'>else</span></b><span style='font-size:9.0pt;font-family:Consolas;
        color:black'> {</span></p>

        <p class=MsoNormal style='text-indent:21.0pt'><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F5F'>// </span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F7F5F'>未开通此认证方式</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:black'>} </span></p>

         <p class=MsoNormal style='margin-top:15.0pt;margin-right:0cm;margin-bottom:
        7.5pt;margin-left:0cm;background:white'><b><span lang=ZH-CN style='font-size:
        15.0pt;font-family:SimSun;color:#1B75BB;letter-spacing:.4pt'>附录</span></b></p>

        <h2><span style='font-family:"Microsoft YaHei",sans-serif;
        font-weight:normal'>1.FidoReInfo</span><span lang=ZH-CN style='font-weight:
        normal'>结构体</span></h2>

        <table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0
        style='margin-left:-1.7pt;border-collapse:collapse;border:none'>
        <tr style='height:61.5pt'>
        <td width=567 valign=top style='width:425.3pt;border:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:61.5pt'>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-align:justify;text-justify:inter-ideograph;
        text-indent:21.0pt'><span style='font-size:10.5pt;font-family:"Calibri",sans-serif'>       public
        FidoStatus status;</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-align:justify;text-justify:inter-ideograph;
        text-indent:21.0pt'><span style='font-size:10.5pt;font-family:"Calibri",sans-serif'>   
        public FidoStatus fpStatus;              // </span><span lang=ZH-CN
        style='font-size:10.5pt'>指纹</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-align:justify;text-justify:inter-ideograph;
        text-indent:21.0pt'><span style='font-size:10.5pt;font-family:"Calibri",sans-serif'>   
        public FidoStatus irisStatus;             // </span><span lang=ZH-CN
        style='font-size:10.5pt'>虹膜</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-align:justify;text-justify:inter-ideograph;
        text-indent:21.0pt'><span style='font-size:10.5pt;font-family:"Calibri",sans-serif'>   
        public FidoStatus fidoFaceStatus;         // </span><span lang=ZH-CN
        style='font-size:10.5pt'>人脸本地</span><span lang=ZH-CN style='font-size:10.5pt;
        font-family:"Calibri",sans-serif'> </span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-align:justify;text-justify:inter-ideograph;
        text-indent:21.0pt'><span style='font-size:10.5pt;font-family:"Calibri",sans-serif'>   
        public FidoStatus faceStatus;            // </span><span lang=ZH-CN
        style='font-size:10.5pt'>人脸远程</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-align:justify;text-justify:inter-ideograph;
        text-indent:21.0pt'><span style='font-size:10.5pt;font-family:"Calibri",sans-serif'>   
        public FidoStatus voiceStatus;           // </span><span lang=ZH-CN
        style='font-size:10.5pt'>声纹</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-align:justify;text-justify:inter-ideograph;
        text-indent:21.0pt'><span style='font-size:10.5pt;font-family:"Calibri",sans-serif'>   
        public FidoStatus realNameStatus;       // </span><span lang=ZH-CN
        style='font-size:10.5pt'>实名</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-align:justify;text-justify:inter-ideograph;
        text-indent:21.0pt'><span style='font-size:10.5pt;font-family:"Calibri",sans-serif'>   
        public FidoStatus realNameFaceStatus;   // </span><span lang=ZH-CN
        style='font-size:10.5pt'>实名</span><span style='font-size:10.5pt;font-family:
        "Calibri",sans-serif'>+</span><span lang=ZH-CN style='font-size:10.5pt'>人脸远程</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-align:justify;text-justify:inter-ideograph;
        text-indent:21.0pt'><span style='font-size:10.5pt;font-family:"Calibri",sans-serif'>       public
        String mfacResponse;</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-align:justify;text-justify:inter-ideograph;
        text-indent:21.0pt'><span style='font-size:10.5pt;font-family:"Calibri",sans-serif'>   
        public String uniqueId;</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-align:justify;text-justify:inter-ideograph;
        text-indent:21.0pt'><span style='font-size:10.5pt;font-family:"Calibri",sans-serif'>   
        public JSONObject deviceInfo;           // </span><span lang=ZH-CN
        style='font-size:10.5pt'>设备信息</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal>&nbsp;</p>

        <h2><span style='font-family:
        "Microsoft YaHei",sans-serif'>2.</span><span lang=ZH-CN>错误码返回情况说明</span></h2>

        <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width="101%"
        style='margin-left:-5.65pt;border-collapse:collapse;border:none'>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>接口名</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border:solid windowtext 1.0pt;
        border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>错误码</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border:solid windowtext 1.0pt;
        border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>介绍</span></p>
        </td>
        <td width=165 nowrap valign=top style='width:123.4pt;border:solid windowtext 1.0pt;
        border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>说明</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>初始化</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>SUCCESS</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>初始化成功</span></p>
        </td>
        <td width=165 nowrap valign=top style='width:123.4pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>初始化操作成功</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>&nbsp;</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>FAILED</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>初始化失败</span></p>
        </td>
        <td width=165 nowrap valign=top style='width:123.4pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>初始化操作失败</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>&nbsp;</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>INVALID_PARAM</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>传入参数错误</span></p>
        </td>
        <td width=165 nowrap valign=top style='width:123.4pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>参数错误</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>&nbsp;</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>NOT_INSTALLED</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>未安装</span><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>FIDO</span><span lang=ZH-CN style='font-size:8.0pt;font-family:
        DengXian;color:black'>模块</span></p>
        </td>
        <td width=165 nowrap valign=top style='width:123.4pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>没有可以处理</span><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>FIDO</span><span lang=ZH-CN style='font-size:8.0pt;font-family:
        DengXian;color:black'>操作的模块</span></p>
        </td>
        </tr>
        <tr style='height:16.15pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.15pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>检查接口</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.15pt'></td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.15pt'></td>
        <td width=165 nowrap valign=top style='width:123.4pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:16.15pt'></td>
        </tr>
        <tr style='height:15.7pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.7pt'></td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:15.7pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>SUCCESS</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:15.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>机型支持</span><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>FIDO</span><span lang=ZH-CN style='font-size:8.0pt;font-family:
        DengXian;color:black'>功能</span></p>
        </td>
        <td width=165 nowrap valign=top style='width:123.4pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:15.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>显示该认证方式入口</span></p>
        </td>
        </tr>
        <tr style='height:17.05pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:17.05pt'></td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:17.05pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>FAILED</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:17.05pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>机型不支持</span><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>FIDO</span><span lang=ZH-CN style='font-size:8.0pt;font-family:
        DengXian;color:black'>功能</span></p>
        </td>
        <td width=165 nowrap valign=top style='width:123.4pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:17.05pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>不显示该认证方式入口</span></p>
        </td>
        </tr>
        <tr style='height:17.05pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:17.05pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>&nbsp;</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:17.05pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>INVALID_PARAM</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:17.05pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>传入参数错误</span></p>
        </td>
        <td width=165 nowrap valign=top style='width:123.4pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:17.05pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>参数错误</span></p>
        </td>
        </tr>
        <tr style='height:17.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:17.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>注册接口</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:17.5pt'></td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:17.5pt'></td>
        <td width=165 nowrap valign=top style='width:123.4pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:17.5pt'></td>
        </tr>
        <tr style='height:17.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:17.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>&nbsp;</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:17.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>NOT_INITFIDO</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:17.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>未初始化</span></p>
        </td>
        <td width=165 nowrap valign=top style='width:123.4pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:17.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>未进行初始化操作</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'></td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>PROTOCOL_ERROR</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>协议错误</span></p>
        </td>
        <td width=165 nowrap valign=top style='width:123.4pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>报文字段缺失</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'></td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>CANCELED</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>用户取消操作</span></p>
        </td>
        <td width=165 nowrap valign=top style='width:123.4pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>注册失败</span></p>
        </td>
        </tr>
        <tr style='height:40.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:40.5pt'></td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:40.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>NO_MATCH</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:40.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>重复注册</span></p>
        </td>
        <td width=165 valign=top style='width:123.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:40.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>用户已注册</span></p>
        </td>
        </tr>
        <tr style='height:40.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:40.5pt'></td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:40.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>APP_NOT_FOUND</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:40.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>应用程序不被信任</span></p>
        </td>
        <td width=165 valign=top style='width:123.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:40.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>程序的签名发生变动</span><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>, </span><span lang=ZH-CN style='font-size:8.0pt;font-family:
        DengXian;color:black'>或未将该应用程序</span><span style='font-size:8.0pt;font-family:
        "Microsoft YaHei",sans-serif;color:black'>FacetID</span><span lang=ZH-CN
        style='font-size:8.0pt;font-family:DengXian;color:black'>添加到可信应用列表中</span><span
        style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;color:black'>.</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'></td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>SUCCESS</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>注册成功</span></p>
        </td>
        <td width=165 valign=top style='width:123.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>开启成功</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'></td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>FAILED</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>错误的指纹验证</span></p>
        </td>
        <td width=165 valign=top style='width:123.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>注册失败</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>&nbsp;</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>INVALID_PARAM</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>传入参数错误</span></p>
        </td>
        <td width=165 valign=top style='width:123.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>参数错误</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>&nbsp;</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>NO_PERMISSION</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>没有权限</span></p>
        </td>
        <td width=165 valign=top style='width:123.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>READ_PHONE_STATE </span><span lang=ZH-CN style='font-size:8.0pt;
        font-family:DengXian;color:black'>没有获得该权限</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>认证接口</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'></td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'></td>
        <td width=165 nowrap valign=top style='width:123.4pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'></td>
        </tr>
        <tr style='height:15.7pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.7pt'></td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:15.7pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>PROTOCOL_ERROR</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:15.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>协议错误</span></p>
        </td>
        <td width=165 nowrap valign=top style='width:123.4pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:15.7pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>报文字段缺失</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'></td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>CANCELED</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>用户点击取消</span></p>
        </td>
        <td width=165 nowrap valign=top style='width:123.4pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>认证取消</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'></td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>NO_MATCH</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>不匹配</span><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>, </span><span lang=ZH-CN style='font-size:8.0pt;font-family:
        DengXian;color:black'>没有可用的认证器</span></p>
        </td>
        <td width=165 valign=top style='width:123.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>指纹数据缺失，重新注册</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'></td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>SUCCESS</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>认证成功</span></p>
        </td>
        <td width=165 valign=top style='width:123.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>开启成功</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'></td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>FAILED</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>指纹验证失败</span></p>
        </td>
        <td width=165 valign=top style='width:123.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>失败，请确认指纹正确</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>&nbsp;</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>KEY_INVALID_PERMANENTLY</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>指纹集变化</span></p>
        </td>
        <td width=165 valign=top style='width:123.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>系统指纹集发生变化</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>&nbsp;</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>ADDUVI</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>动态添加指纹列表</span></p>
        </td>
        <td width=165 valign=top style='width:123.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>添加并注册另一个已在系统指纹集中的指纹</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>&nbsp;</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>INVALID_PARAM</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>传入参数错误</span></p>
        </td>
        <td width=165 valign=top style='width:123.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>参数错误</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>&nbsp;</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>NO_PERMISSION</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>没有权限</span></p>
        </td>
        <td width=165 valign=top style='width:123.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>READ_PHONE_STATE </span><span lang=ZH-CN style='font-size:8.0pt;
        font-family:DengXian;color:black'>没有获得该权限</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>注销接口</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'></td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'></td>
        <td width=165 nowrap valign=top style='width:123.4pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'></td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'></td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>PROTOCOL_ERROR</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>协议错误</span></p>
        </td>
        <td width=165 nowrap valign=top style='width:123.4pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>报文字段缺失</span></p>
        </td>
        </tr>
        <tr style='height:13.5pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'></td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>SUCCESS</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>注销成功</span></p>
        </td>
        <td width=165 valign=top style='width:123.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:13.5pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>注销成功</span></p>
        </td>
        </tr>
        <tr style='height:27.0pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:27.0pt'></td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:27.0pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>FAILED</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:27.0pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>注销失败</span></p>
        </td>
        <td width=165 valign=top style='width:123.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:27.0pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>只要确认服务器端数据已经删除，可以忽略这个错误</span></p>
        </td>
        </tr>
        <tr style='height:27.0pt'>
        <td width=72 nowrap valign=top style='width:53.75pt;border:solid windowtext 1.0pt;
        border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:27.0pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>&nbsp;</span></p>
        </td>
        <td width=172 nowrap valign=top style='width:128.85pt;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:27.0pt'>
        <p class=MsoNormal><span style='font-size:8.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>INVALID_PARAM</span></p>
        </td>
        <td width=151 nowrap valign=top style='width:4.0cm;border-top:none;
        border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:27.0pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>传入参数错误</span></p>
        </td>
        <td width=165 valign=top style='width:123.4pt;border-top:none;border-left:
        none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        padding:0cm 5.4pt 0cm 5.4pt;height:27.0pt'>
        <p class=MsoNormal><span lang=ZH-CN style='font-size:8.0pt;font-family:DengXian;
        color:black'>参数错误</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:red'>&nbsp;</span></p>

        <h2><span style='font-family:
        "Microsoft YaHei",sans-serif'>3.</span><span lang=ZH-CN>混淆配置</span></h2>

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
        font-family:"Calibri",sans-serif'>-keep class com.fido.** { *;}</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:21.0pt'><span style='font-size:10.5pt;
        font-family:"Calibri",sans-serif'>-keep class com.gmrz.** { *;}</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:21.0pt'><span style='font-size:10.5pt;
        font-family:"Calibri",sans-serif'>-keep class com.fidoalliance.** { *;}</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:21.0pt'><span style='font-size:10.5pt;
        font-family:"Calibri",sans-serif'>-keep class com.noknok.** { *;}</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:21.0pt'><span style='font-size:10.5pt;
        font-family:"Calibri",sans-serif'>-keep class org.fidoalliance.** { *;}</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:21.0pt'><span style='font-size:10.5pt;
        font-family:"Calibri",sans-serif'>-keep class com.gmrz.appsdk.** { *;}</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:21.0pt'><span style='font-size:10.5pt;
        font-family:"Calibri",sans-serif'>-keep class com.gmrz.appsdk.async.** { *;}</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:21.0pt'><span style='font-size:10.5pt;
        font-family:"Calibri",sans-serif'>-keep class com.gmrz.appsdk.direct.** { *;}</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:21.0pt'><span style='font-size:10.5pt;
        font-family:"Calibri",sans-serif'>-keep class com.gmrz.appsdk.utils.** { *;}</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:21.0pt'><span style='font-size:10.5pt;
        font-family:"Calibri",sans-serif'>-keep class com.gmrz.appsdk.commlib.** {
        *;}</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:21.0pt'><span style='font-size:10.5pt;
        font-family:"Calibri",sans-serif'>-keep class com.gmrz.appsdk.util.** { *;}</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:21.0pt'><span style='font-size:10.5pt;
        font-family:"Calibri",sans-serif'>-keep class com.gmrz.appsdk.compatible.** {
        *;}</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-align:justify;text-justify:inter-ideograph;
        text-indent:21.0pt'><span style='font-size:10.5pt;font-family:"Calibri",sans-serif'>-keep
        class com.gmrz.appsdk.entity.** { *;}</span></p>
        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-align:justify;text-justify:inter-ideograph;
        text-indent:21.0pt'><span style='font-size:10.5pt;font-family:"Calibri",sans-serif'>##---------------End:
        proguard configuration for self ----------</span></p>
        </td>
        </tr>
        </table>

        <p class=MsoNormal><a name="_Toc499645053">&nbsp;</a></p>

        <p class=MsoNormal>&nbsp;</p>

        <h2><span style='font-family:"Microsoft YaHei",sans-serif'>4.AndroidManifest</span><span
        lang=ZH-CN>需要的配置</span></h2>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:#3F5FBF'>&lt;!—- </span><span lang=ZH-CN style='font-size:9.0pt;
        font-family:DengXian;color:#3F5FBF'>权限</span><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F5FBF'>: </span><span lang=ZH-CN style='font-size:
        9.0pt;font-family:DengXian;color:#3F5FBF'>适用于</span><span style='font-size:
        9.0pt;font-family:Consolas;color:#3F5FBF'>FIDO --&gt;</span><span
        style='font-size:9.0pt;font-family:Consolas;color:teal'> </span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas;color:teal'>&lt;</span><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F7F'>uses-permission</span><span
        style='font-size:9.0pt;font-family:Consolas'> <span style='color:#7F007F'>android:name</span><span
        style='color:black'>=</span><i><span style='color:#2A00FF'>&quot;org.fidoalliance.uaf.permissions.FIDO_CLIENT&quot;</span></i><span
        style='color:teal'>/&gt;</span></span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas;color:teal'>&lt;uses-permission </span><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F007F'>android:name=</span><i><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>&quot;android.permission.READ_PHONE_STATE&quot;
        </span></i><span style='font-size:9.0pt;font-family:Consolas;color:teal'>/&gt;</span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas;color:teal'>&lt;uses-permission </span><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F007F'>android:name=</span><i><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>&quot;android.permission.USE_FINGERPRINT&quot;</span></i><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F007F'> </span><span
        style='font-size:9.0pt;font-family:Consolas;color:teal'>/&gt;</span></p>

        <p class=p1><span style='font-size:9.0pt;font-family:Consolas;color:#3F7F7F'>&nbsp;</span></p>

        <p class=p1><span style='font-size:9.0pt;font-family:Consolas;color:#3F7F7F'>&lt;application</span></p>

        <p class=p2><span style='font-size:9.0pt;font-family:Consolas;color:#7F007F'>   
        android:allowBackup</span><span style='font-size:9.0pt;font-family:Consolas;
        color:black'>=</span><i><span style='font-size:9.0pt;font-family:Consolas;
        color:#2A00FF'>&quot;true&quot;</span></i></p>

        <p class=p1 style='text-indent:18.0pt'><span style='font-size:9.0pt;font-family:
        Consolas;color:#7F007F'>android:icon</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>=</span><i><span style='font-size:9.0pt;
        font-family:Consolas;color:#2A00FF'>&quot;@drawable/ic_launcher&quot; </span></i><span
        style='font-size:9.0pt;font-family:Consolas;color:teal'>/&gt;</span></p>

        <p class=p1 style='text-indent:18.0pt'><span style='font-size:9.0pt;font-family:
        Consolas;color:teal'>&nbsp;</span></p>

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
        font-family:Consolas;color:#2A00FF'>&quot;fido.uaf.userkey&quot;</span></i></p>

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
        font-family:Consolas;color:#2A00FF'>&quot;fido.uaf.url&quot;</span></i></p>

        <p class=p1 style='text-indent:18.0pt'><span style='font-size:9.0pt;font-family:
        Consolas;color:#7F007F'>android:value</span><span style='font-size:9.0pt;
        font-family:Consolas;color:black'>=</span><i><span style='font-size:9.0pt;
        font-family:Consolas;color:#2A00FF'>&quot;https://api.nationauth.cn/uaf&quot;</span></i><span
        style='font-size:9.0pt;font-family:Consolas;color:teal'> /&gt;</span></p>

        <p class=p1><span style='font-size:9.0pt;font-family:Consolas;color:teal'>&nbsp;</span></p>

        <p class=p1 style='text-indent:18.0pt'><span style='font-size:9.0pt;font-family:
        Consolas;color:teal'>&nbsp;</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:#3F5FBF'>&lt;!—- </span><span lang=ZH-CN style='font-size:9.0pt;
        font-family:DengXian;color:#3F5FBF'>插件以及</span><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F5FBF'>SDK</span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F5FBF'>中使用到了</span><span
        style='font-size:9.0pt;font-family:Consolas;color:#3F5FBF'>Activity</span><span
        lang=ZH-CN style='font-size:9.0pt;font-family:DengXian;color:#3F5FBF'>进行数据传输，所以需要在配置文件中定义这些</span><span
        style='font-size:9.0pt;font-family:Consolas;color:#3F5FBF'>Activity --&gt;</span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas;color:teal'>&lt;</span><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F7F'>activity</span><span style='font-size:9.0pt;
        font-family:Consolas'> </span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas;color:#7F007F'>    android:name</span><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>=</span><i><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>&quot;com.gmrz.appsdk.commlib.IntentHelperActivity&quot;</span></i></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas'>    <span style='color:#7F007F'>android:theme=</span><i><span
        style='color:#2A00FF'>&quot;@android:style/Theme.Translucent.NoTitleBar&quot;</span></i></span></p>

        <p class=MsoNormal style='text-indent:18.0pt;text-autospace:none'><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F007F'>android:excludeFromRecents</span><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>=</span><i><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>&quot;true&quot; </span></i><span
        style='font-size:9.0pt;font-family:Consolas;color:teal'>/&gt;</span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas;color:teal'>&nbsp;</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:#3F5FBF'>&lt;!—- FIDO KeyStore</span><span lang=ZH-CN style='font-size:
        9.0pt;font-family:DengXian;color:#3F5FBF'>指纹</span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:Consolas;color:#3F5FBF'> </span><span
        style='font-size:9.0pt;font-family:Consolas;color:#3F5FBF'>--&gt;</span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas;color:teal'>&lt;</span><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F7F'>activity</span><span style='font-size:9.0pt;
        font-family:Consolas'> </span></p>

        <p class=MsoNormal style='text-indent:19.0pt;text-autospace:none'><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F007F'>android:name</span><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>=</span><i><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>&quot;com.gmrz.asm.fp.authui.FpActivity&quot;</span></i></p>

        <p class=MsoNormal style='text-indent:19.0pt;text-autospace:none'><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F007F'>android</span><i><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>:</span></i><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F007F'>theme</span><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>=</span><i><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>&quot;@android:style/Theme.Translucent.NoTitleBar&quot;</span></i></p>

        <p class=MsoNormal style='text-indent:19.0pt;text-autospace:none'><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F007F'>android:screenOrientation</span><span
        style='font-size:9.0pt;font-family:Consolas;color:black'> =</span><i><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>&quot;orientation|screenSize&quot;</span></i></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas'>    <span style='color:#7F007F'>android:excludeFromRecents</span><span
        style='color:black'>=</span><i><span style='color:#2A00FF'>&quot;true&quot; </span></i><span
        style='color:teal'>/&gt;</span></span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas;color:teal'>&nbsp;</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:#3F5FBF'>&lt;!—- FIDO</span><span lang=ZH-CN style='font-size:9.0pt;
        font-family:DengXian;color:#3F5FBF'>人脸本地</span><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F5FBF'> --&gt;</span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas;color:teal'>&lt;</span><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F7F'>activity</span><span style='font-size:9.0pt;
        font-family:Consolas'> </span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas;color:#7F007F'>    android:name</span><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>=</span><i><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>&quot;com.gmrz.asm.face.megfaceunlock.RegisterActivity&quot;</span></i></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas'>    <span style='color:#7F007F'>android:theme=</span><i><span
        style='color:#2A00FF'>&quot;@android:style/Theme.Holo.NoActionBar.Fullscreen&quot;</span></i></span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas'>    <span style='color:#7F007F'>android:excludeFromRecents</span><span
        style='color:black'>=</span><i><span style='color:#2A00FF'>&quot;true&quot;</span></i></span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas;color:#7F007F'>    android:screenOrientation</span><span
        style='font-size:9.0pt;font-family:Consolas;color:black'> =</span><i><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>&quot;portrait&quot;</span></i></p>

        <p class=MsoNormal style='text-indent:19.0pt;text-autospace:none'><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F007F'>android:exported</span><span
        style='font-size:9.0pt;font-family:Consolas;color:black'> =</span><i><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>&quot;true&quot; </span></i><span
        style='font-size:9.0pt;font-family:Consolas;color:teal'>/&gt;</span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas;color:teal'>&lt;</span><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F7F'>activity</span><span style='font-size:9.0pt;
        font-family:Consolas'> </span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas;color:#7F007F'>    android:name</span><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>=</span><i><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>&quot;com.gmrz.asm.face.megfaceunlock.AuthActivity&quot;</span></i></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas'>    <span style='color:#7F007F'>android:theme=</span><i><span
        style='color:#2A00FF'>&quot;@android:style/Theme.Holo.NoActionBar.Fullscreen&quot;</span></i></span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas'>    <span style='color:#7F007F'>android:excludeFromRecents</span><span
        style='color:black'>=</span><i><span style='color:#2A00FF'>&quot;true&quot;</span></i></span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas;color:#7F007F'>    android:screenOrientation</span><span
        style='font-size:9.0pt;font-family:Consolas;color:black'> =</span><i><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>&quot;portrait&quot;</span></i></p>

        <p class=MsoNormal style='text-indent:18.0pt;text-autospace:none'><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F007F'>android:exported</span><span
        style='font-size:9.0pt;font-family:Consolas;color:black'> =</span><i><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>&quot;true&quot; </span></i><span
        style='font-size:9.0pt;font-family:Consolas;color:teal'>/&gt;</span></p>

        <p class=MsoNormal style='text-indent:18.0pt;text-autospace:none'><span
        style='font-size:9.0pt;font-family:Consolas;color:teal'>&nbsp;</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:#3F5FBF'>&lt;!—- FIDO </span><span lang=ZH-CN style='font-size:9.0pt;
        font-family:DengXian;color:#3F5FBF'>手势密码</span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:Consolas;color:#3F5FBF'> </span><span
        style='font-size:9.0pt;font-family:Consolas;color:#3F5FBF'>--&gt;</span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas;color:teal'>&lt;</span><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F7F7F'>activity</span><span style='font-size:9.0pt;
        font-family:Consolas'> </span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas;color:#7F007F'>    android:name</span><span
        style='font-size:9.0pt;font-family:Consolas;color:black'>=</span><i><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>&quot;com.gmrz.asm.gesture.GestureLockActivity&quot;</span></i></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas'>    <span style='color:#7F007F'>android:theme=</span><i><span
        style='color:#2A00FF'>&quot;@android:style/Theme.Holo.NoActionBar.Fullscreen&quot;</span></i></span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas'>    <span style='color:#7F007F'>android:excludeFromRecents</span><span
        style='color:black'>=</span><i><span style='color:#2A00FF'>&quot;true&quot;</span></i></span></p>

        <p class=MsoNormal style='text-autospace:none'><span style='font-size:9.0pt;
        font-family:Consolas;color:#7F007F'>    android:screenOrientation</span><span
        style='font-size:9.0pt;font-family:Consolas;color:black'> =</span><i><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>&quot;portrait&quot;</span></i></p>

        <p class=MsoNormal style='text-indent:18.0pt;text-autospace:none'><span
        style='font-size:9.0pt;font-family:Consolas;color:#7F007F'>android:exported</span><span
        style='font-size:9.0pt;font-family:Consolas;color:black'> =</span><i><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>&quot;true&quot; </span></i><span
        style='font-size:9.0pt;font-family:Consolas;color:teal'>/&gt;</span></p>

        <p class=MsoNormal style='text-indent:18.0pt;text-autospace:none'><span
        style='font-size:9.0pt;font-family:Consolas;color:teal'>&nbsp;</span></p>

        <p class=p1><span style='font-size:9.0pt;font-family:Consolas;color:#3F7F7F'>&lt;/application&gt;</span></p>

        <h2><span style='font-family:
        "Microsoft YaHei",sans-serif'>5.</span><span lang=ZH-CN>认证器描述文件配置</span></h2>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:#3F5FBF'>&lt;!—- </span><span lang=ZH-CN style='font-size:9.0pt;
        font-family:DengXian;color:#3F5FBF'>宿主工程</span><span style='font-size:9.0pt;
        font-family:Consolas;color:#3F5FBF'>res/raw/asmdescriptors.json</span><span
        lang=ZH-CN style='font-size:9.0pt;font-family:DengXian;color:#3F5FBF'>中配置</span><span
        style='font-size:9.0pt;font-family:Consolas;color:#3F5FBF'> --&gt;</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:#3F5FBF'>&lt;!—- </span><span lang=ZH-CN style='font-size:9.0pt;
        font-family:DengXian;color:#3F5FBF'>认证器配置项说明</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:#3F5FBF'>      FpAuthenticatorDescriptor        </span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F5FBF'>指纹</span><span
        style='font-size:9.0pt;font-family:Consolas;color:#3F5FBF'>  </span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:#3F5FBF'>      FaceAuthenticatorDescriptor      </span><span lang=ZH-CN
        style='font-size:9.0pt;font-family:DengXian;color:#3F5FBF'>人脸本地</span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:#3F5FBF'>      GestureAuthenticatorDescriptor</span><span
        style='font-size:9.0pt;font-family:Consolas;color:#3F5FBF'>   </span><span
        lang=ZH-CN style='font-size:9.0pt;font-family:DengXian;color:#3F5FBF'>手势密码</span><span
        lang=ZH-CN style='font-size:9.0pt;font-family:Consolas;color:#3F5FBF'> </span></p>

        <p class=MsoNormal><span style='font-size:9.0pt;font-family:Consolas;
        color:#3F5FBF'>--&gt;</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:teal'>{</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:9.0pt;
        font-family:Consolas;color:teal'>   [</span><span style='font-size:9.0pt;
        font-family:Menlo;color:black'><br>
        </span><span style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>     </span><span
        style='font-size:9.0pt;font-family:Consolas;color:#2A00FF'>&quot;com.gmrz.asm.face.descriptor.FaceAuthenticatorDescriptor&quot;,<br>
             &quot;com.gmrz.asm.gesture.descriptor.GestureAuthenticatorDescriptor&quot;,<br>
             &quot;com.gmrz.asm.fp.descriptor.FpAuthenticatorDescriptor&quot;</span></p>

        <p class=MsoNormal style='text-indent:18.0pt;background:white'><span
        style='font-size:9.0pt;font-family:Consolas;color:teal'>]</span><span
        style='font-size:9.0pt;font-family:Menlo;color:black'><br>
        </span><span style='font-size:9.0pt;font-family:Consolas;color:teal'>}</span></p>

        <h2><span style='font-family:
        "Microsoft YaHei",sans-serif'>6.NDK</span><span lang=ZH-CN>建议配置</span></h2>

        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm'><span style='font-size:9.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>ndk {  abiFilters &quot;armeabi&quot;, &quot;x86&quot;  }</span></p>

        <p class=MsoNoSpacing style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-align:justify;text-justify:inter-ideograph'><span
        lang=ZH-CN style='font-size:9.0pt;font-family:"Microsoft YaHei",sans-serif;
        color:black'>考虑到所占空间和使用率默认提供</span><span style='font-size:9.0pt;font-family:
        "Microsoft YaHei",sans-serif;color:black'>armeabi<span lang=ZH-CN>和</span>X86<span
        lang=ZH-CN>的</span>so<span lang=ZH-CN>，如需其他平台的</span>so<span lang=ZH-CN>文件可联系我们提供。</span></span></p>

        <p class=MsoNormalIndent style='margin-top:7.8pt;margin-right:0cm;margin-bottom:
        7.8pt;margin-left:0cm;text-indent:0cm;word-break:break-all'>&nbsp;</p>

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
    .page13{
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