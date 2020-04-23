<template>
    <div class="page15">
        <div class=WordSection1 style='layout-grid:15.6pt'>

        <h1>控制台使用说明</h1>

        <h2>获取账号标识和secret<span lang=EN-US>secret</span></h2>

        <p class=MsoNormal><span>ͨ通过控制台右上角菜单，选择账号信息</span></p>

        <p class=MsoNormal><span lang=EN-US><img width=553 height=78 id="ͼƬ 1"
        src="../img/image001.jpg"></span></p>
        <div>点击账号信息</div>
        <p class=MsoNormal><span lang=EN-US><img width=553 height=90 id="ͼƬ 3"
        src="../img/image002.jpg"></span></p>
        <h2>添加服务</h2>
        <p class=MsoNormal><span></span>对接平台需要选择对应的服务，通过点击增加服务按钮添加</p>
        <p class=MsoNormal><span lang=EN-US><img width=554 height=162 id="ͼƬ 4"
        src="../img/image003.jpg"></span></p>
        <h2>添加应用</h2>

        <p class=MsoNormal><span>
集成FIDO SDK的APP需要在平台登记，用户增加应用调用的安全性，通过增加应用按钮增加</span></p>

        <p class=MsoNormal><span lang=EN-US><img width=554 height=162 id="ͼƬ 4"
        src="../img/image004.jpg"></span></p>

       

        <p class=MsoNormal><span>
需要注意应用标识的填写，应用标识的生成参考帮助
</span><span lang=EN-US>FIDO SDK</span><span></span><span lang=EN-US>APP</span>
        <span></span></p>

        <p class=MsoNormal><span lang=EN-US><img width=553 height=149 id="ͼƬ 5"
        src="../img/image005.jpg"></span></p>
         <h2>用户管理</h2>
        <p class=MsoNormal><span>企业账号可以通过用户中心查看注册的用户和停用</span></p>

        <p class=MsoNormal><span lang=EN-US><img width=553 height=149 id="ͼƬ 6"
        src="../img/image006.jpg"></span></p>

        <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

        </div>
    </div>
</template>
<script>
export default {
    created(){
        scrollTo(0,0);
    },
    methods:{
       
    }
}
</script>
<style lang="less">
    .page15{
         p.MsoNormal, li.MsoNormal, div.MsoNormal
            {margin:0cm;
            margin-bottom:.0001pt;
            font-size:12.0pt;
            font-family:"Times New Roman",serif;}
        h1
            {
            margin-top:17.0pt;
            margin-right:0cm;
            margin-bottom:16.5pt;
            margin-left:0cm;
            text-align:justify;
            text-justify:inter-ideograph;
            line-height:240%;
            page-break-after:avoid;
            font-size:22.0pt;
            }
        h2
            {
            margin-top:13.0pt;
            margin-right:0cm;
            margin-bottom:13.0pt;
            margin-left:0cm;
            text-align:justify;
            text-justify:inter-ideograph;
            line-height:173%;
            page-break-after:avoid;
            font-size:16.0pt;
            }
        .MsoChpDefault
            {font-size:12.0pt;}
        /* Page Definitions */
        /* List Definitions */
        ol
            {margin-bottom:0cm;}
        ul
            {margin-bottom:0cm;}
    }
</style>