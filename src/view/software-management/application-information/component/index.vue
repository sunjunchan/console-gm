<template>
<div class="app-page">
    <div class="stl_02">
        <div class="stl_view">
            <div class="stl_05 stl_06">
                <div class="stl_01" style="left:7.5em;top: 7.4568em; z-index:12; "><span class="stl_07 stl_08 stl_09">一、 </span><span class="stl_10 stl_08 stl_11" style="word-spacing:-0.0116em;">Android app </span><span class="stl_07 stl_08 stl_09">应用标识 &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 10.8988em; z-index:71; "><span class="stl_12 stl_08 stl_09">格式：</span><span class="stl_13 stl_14 stl_09">android:apk-key-hash:&lt;sha1_hash-of-apk-signing-cert&gt; &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 12.1988em; z-index:111; "><span class="stl_12 stl_08 stl_09">备注：</span><span class="stl_13 stl_14 stl_09">&lt;sha1_hash-of-apk-signing-cert&gt;</span><span class="stl_12 stl_08 stl_09" style="word-spacing:0em;">为手机 </span><span class="stl_13 stl_14 stl_15" style="word-spacing:-0.0451em;">apk </span><span class="stl_12 stl_08 stl_09">签名证书的 </span><span class="stl_13 stl_14 stl_11" style="word-spacing:-0.0453em;">hash </span><span class="stl_12 stl_08 stl_11" style="word-spacing:-0.0453em;">值 &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 14.7988em; z-index:133; "><span class="stl_12 stl_08 stl_09">获取 </span><span class="stl_13 stl_14 stl_11" style="word-spacing:-0.0454em;">FacetId </span><span class="stl_12 stl_08 stl_09">方式： &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 16.1268em; z-index:185; "><span class="stl_16 stl_14 stl_17" style="word-spacing:1.0489em;">1. </span><span class="stl_18 stl_14 stl_09">使用 </span><span class="stl_16 stl_14 stl_09" style="word-spacing:-0.0479em;">keytool </span><span class="stl_18 stl_14 stl_09">和 </span><span class="stl_16 stl_14 stl_19" style="word-spacing:-0.0485em;">openssl </span><span class="stl_18 stl_14 stl_09">生成</span><span class="stl_16 stl_14 stl_09">&lt;sha1_hash-of-apk-signing-cert&gt; &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 17.4268em; "><span class="stl_13 stl_14 stl_09" style="word-spacing:0em;">keytool -exportcert -alias &lt;alias of key&gt; -keystore &lt;path of keystore&gt; | openssl sha1 -binary | openssl &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 18.7268em; z-index:291; "><span class="stl_13 stl_14 stl_11" style="word-spacing:0.0002em;">base64 | sed 's/=//g' &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 19.9988em; z-index:368; "><span class="stl_12 stl_08 stl_09">备注：</span><span class="stl_13 stl_14 stl_09" style="word-spacing:0em;">&lt;alias of key&gt;</span><span class="stl_12 stl_08 stl_09">指 </span><span class="stl_13 stl_14 stl_09" style="word-spacing:-0.0457em;">keystore </span><span class="stl_12 stl_08 stl_09" style="word-spacing:0em;">中 </span><span class="stl_13 stl_14 stl_19" style="word-spacing:-0.0463em;">key </span><span class="stl_12 stl_08 stl_09">的别名，</span><span class="stl_13 stl_14 stl_09" style="word-spacing:-0.0004em;">&lt;path of keystore&gt;</span><span class="stl_12 stl_08 stl_09">为 </span><span class="stl_13 stl_14 stl_09" style="word-spacing:-0.0457em;">keystore </span><span class="stl_12 stl_08 stl_09">存放位置，再同</span><span class="stl_13 stl_14 stl_09">”android:apk- &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 21.2988em; z-index:378; "><span class="stl_13 stl_14 stl_09">key-hash:”</span><span class="stl_12 stl_08 stl_09">拼接成最终 </span><span class="stl_13 stl_14 stl_11">FacetId &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 23.9268em; z-index:400; "><span class="stl_16 stl_14 stl_17" style="word-spacing:1.0489em;">2. </span><span class="stl_18 stl_14 stl_09">在 </span><span class="stl_16 stl_14 stl_11" style="word-spacing:-0.0473em;">Android </span><span class="stl_18 stl_14 stl_09">应用程序中获取 &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 25.3089em; "><span class="stl_20 stl_21 stl_19" style="word-spacing:-0.0003em;">try </span><span class="stl_22 stl_21 stl_19" style="word-spacing:-0.0003em;">{ &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 26.6089em; "><span class="stl_22 stl_21 stl_09" style="word-spacing:-0.0004em;">PackageInfo info = &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 27.9089em; z-index:516; "><span class="stl_22 stl_21 stl_09">getPackageManager().getPackageInfo(</span><span class="stl_23 stl_21 stl_09">packageNames</span><span class="stl_22 stl_21 stl_09" style="word-spacing:0em;">, PackageManager.</span><span class="stl_24 stl_21 stl_09">GET_SIGNATURES</span><span class="stl_22 stl_21 stl_09">); &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 29.0918em; "><span class="stl_25 stl_21 stl_19" style="word-spacing:-0.0004em;">// packageNames </span><span class="stl_26 stl_08 stl_09" style="font-style:italic;">为使用相同证书，签名后的应用名 &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 30.5089em; z-index:589; "><span class="stl_20 stl_21 stl_09">byte</span><span class="stl_22 stl_21 stl_09" style="word-spacing:-0.0001em;">[] cert = info.</span><span class="stl_27 stl_21 stl_09">signatures</span><span class="stl_22 stl_21 stl_19">[</span><span class="stl_28 stl_21 stl_09">0</span><span class="stl_22 stl_21 stl_09">].toByteArray(); &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 31.8089em; z-index:636; "><span class="stl_22 stl_21 stl_09" style="word-spacing:-0.0003em;">InputStream input = </span><span class="stl_20 stl_21 stl_09" style="word-spacing:0em;">new </span><span class="stl_22 stl_21 stl_09">ByteArrayInputStream(cert); &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 33.1089em; z-index:696; "><span class="stl_22 stl_21 stl_09" style="word-spacing:0.0001em;">CertificateFactory cf = CertificateFactory.</span><span class="stl_29 stl_21 stl_09">getInstance</span><span class="stl_22 stl_21 stl_19">(</span><span class="stl_23 stl_21 stl_09">"X509"</span><span class="stl_22 stl_21 stl_09">); &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 34.4089em; z-index:760; "><span class="stl_22 stl_21 stl_09" style="word-spacing:0em;">X509Certificate c = (X509Certificate) cf.generateCertificate(input); &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 35.7089em; z-index:810; "><span class="stl_22 stl_21 stl_09" style="word-spacing:0em;">MessageDigest md = MessageDigest.</span><span class="stl_29 stl_21 stl_09">getInstance</span><span class="stl_22 stl_21 stl_19">(</span><span class="stl_23 stl_21 stl_09">"SHA1"</span><span class="stl_22 stl_21 stl_09">); &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 36.8918em; z-index:819; "><span class="stl_25 stl_21 stl_09" style="word-spacing:0.0001em;">// FacetId </span><span class="stl_26 stl_08 stl_09" style="font-style:italic;">结果 &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 38.3089em; z-index:922; "><span class="stl_22 stl_21 stl_09" style="word-spacing:-0.0002em;">String result = </span><span class="stl_23 stl_21 stl_09" style="word-spacing:0.0001em;">"android:apk-key-hash:" </span><span class="stl_22 stl_21 stl_09" style="word-spacing:0em;">+ Base64.</span><span class="stl_29 stl_21 stl_09">encodeToString</span><span class="stl_22 stl_21 stl_09" style="word-spacing:-0.0004em;">(md.digest(c.getEncoded()), Base64.</span><span class="stl_24 stl_21 stl_09" style="word-spacing:0.0001em;">DEFAULT </span><span class="stl_22 stl_21 stl_09" style="word-spacing:0.0001em;">| &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 39.6089em; z-index:964; "><span class="stl_22 stl_21 stl_09">Base64.</span><span class="stl_24 stl_21 stl_11" style="word-spacing:0.0006em;">NO_WRAP </span><span class="stl_22 stl_21 stl_09" style="word-spacing:-0.0001em;">| Base64.</span><span class="stl_24 stl_21 stl_09">NO_PADDING</span><span class="stl_22 stl_21 stl_09">); &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 40.9089em; "><span class="stl_22 stl_21 stl_09" style="word-spacing:0em;">} </span><span class="stl_20 stl_21 stl_19" style="word-spacing:-0.0005em;">catch </span><span class="stl_22 stl_21 stl_09" style="word-spacing:0em;">(PackageManager.NameNotFoundException e) { &nbsp;</span></div>
                <div class="stl_01" style="left:8.75em;top: 42.2089em; z-index:1030; "><span class="stl_22 stl_21 stl_09">e.printStackTrace(); &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 43.5089em; "><span class="stl_22 stl_21 stl_09" style="word-spacing:0em;">} </span><span class="stl_20 stl_21 stl_19" style="word-spacing:-0.0005em;">catch </span><span class="stl_22 stl_21 stl_09" style="word-spacing:-0.0002em;">(CertificateException e) { &nbsp;</span></div>
                <div class="stl_01" style="left:8.75em;top: 44.8089em; z-index:1080; "><span class="stl_22 stl_21 stl_09">e.printStackTrace(); &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 46.1089em; "><span class="stl_22 stl_21 stl_09" style="word-spacing:0em;">} </span><span class="stl_20 stl_21 stl_19" style="word-spacing:-0.0005em;">catch </span><span class="stl_22 stl_21 stl_09" style="word-spacing:-0.0002em;">(NoSuchAlgorithmException e) { &nbsp;</span></div>
                <div class="stl_01" style="left:8.75em;top: 47.4089em; z-index:1134; "><span class="stl_22 stl_21 stl_09">e.printStackTrace(); &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 48.7089em; "><span class="stl_22 stl_21 stl_09">}</span></div>
                <div class="stl_01" style="left:7.5em;top: 52.5234em; z-index:1143; "><span class="stl_07 stl_08 stl_09">二、 </span><span class="stl_10 stl_08 stl_11" style="word-spacing:-0.0115em;">IOS app </span><span class="stl_07 stl_08 stl_09">应用标识 &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 56.0091em; "><span class="stl_30 stl_08 stl_09">格式如下： &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 57.3756em; z-index:1184; "><span class="stl_22 stl_21 stl_09">ios:bundle-id:bundleIdentifier &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 58.5585em; z-index:1210; "><span class="stl_30 stl_08 stl_09">备注：</span><span class="stl_22 stl_21 stl_09" style="word-spacing:0.2498em;">bundleIdentifier </span><span class="stl_30 stl_08 stl_09">为应用 </span><span class="stl_22 stl_21 stl_15" style="word-spacing:0.0007em;">APP </span><span class="stl_30 stl_08 stl_09">的 </span><span class="stl_22 stl_21 stl_19" style="word-spacing:-0.0002em;">bundle id &nbsp;</span></div>
            </div>
        </div>
    </div>
    <div class="stl_02">
        <div class="stl_view">
            <div class="stl_05 stl_06">
                <div class="stl_01" style="left:7.5em;top: 6.3734em; "><span class="stl_07 stl_08 stl_09">三、 </span><span class="stl_10 stl_08 stl_09" style="word-spacing:-0.0239em;">WEB </span><span class="stl_07 stl_08 stl_09">网站应用标识 &nbsp;</span></div>
                <div class="stl_01" style="left:7.5em;top: 9.8085em; "><span class="stl_30 stl_08 stl_09">格式如下：</span><a href="https://www.nationauth.cn/" target="_blank"><span class="stl_31 stl_21 stl_09">https://www.nationauth.cn &nbsp;</span></a></div>
                <div class="stl_01" style="left:7.5em;top: 11.1085em; z-index:49; "><span class="stl_30 stl_08 stl_09">备注：网站必须为 </span><span class="stl_22 stl_21 stl_09" style="word-spacing:0em;">HTTPS </span><span class="stl_30 stl_08 stl_09">协议，应用标识填写网站域名 &nbsp;</span></div>
            </div>
        </div></div>
    </div>
</template>
<style lang="less">
.app-page{
    line-height: 200%;
    .stl_10,.stl_07{
        font-size: 18px;
        font-weight: 600;
        color: #000;
    }
    .stl_18,.stl_16{
        font-weight: 600;
        color: #000;
    }
}
</style>