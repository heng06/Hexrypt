 /*npm install crypto-js*/
var crypto=require("crypto-js");
hexo.extend.filter.register('after_post_render', function(data){
if(data.password != undefined){
var result=crypto.RC4.encrypt(data.content,data.password).toString();
data.content='<div id="unlockBox"><h3>此文章已加密</h3><span>输入密码查看文章内容:</span><br><input type="password" id="password" style="height:56px;padding:16px;border:none;border-radius:16px;background:#fafafa;"><button type="button" onclick="decrypt()" style="height:48px;width:72px;margin:16px;border:none;border-radius:24px;background:#797979;color:#fff;">解密</button></div><script src="https://cdn.bootcss.com/crypto-js/3.1.9-1/crypto-js.min.js"></script><script>var content="' + result + '";function decrypt() {var key=document.getElementById("password").value;var post=CryptoJS.enc.Utf8.stringify(CryptoJS.RC4.decrypt(content,key)).toString();document.getElementById("unlockBox").innerHTML=post;}</script>';
console.log("Encrypted:" + data.title);
return data;
}});
