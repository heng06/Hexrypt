这是一个用于给Hexo博文"上锁"的插件。你可以为每一篇文章设定密码，读者在打开时必须输入正确的密码才能查看文章内容。
# 安装
首先，你需要在你的Hexo工作目录下新建"scripts"目录。

```cd YOURWORKSPACE && mkdir scripts```

然后，请下载[Hexrypt.js]( https://raw.githubusercontent.com/heng06/Hexrypt/main/hexrypt.js)并拷贝到"scripts"目录中。

```cd scripts && wget https://raw.githubusercontent.com/heng06/Hexrypt/main/hexrypt.js```

# 使用
你需要为每一篇文章指定单独的密码。只需要在.md文件头部添加`password: YOURPASSWORD`即可。
```
---
title: Hello World
password: '12345678'  #Your Password
---
```
清除Hexo缓存，重新生成静态页面，等待Hexrypt运行。
`hexo clean && hexo g`
如果你可以看到输出提示文章被加密，那么说明Hexrypt已经正常运行。
```
INFO  Validating config
INFO  Deleted database.
INFO  Validating config
INFO  Start processing
Encrypted:Hello World
INFO  Hexo is running at http://localhost:4000/ . Press Ctrl+C to stop.
```
# 开发
我承认作为一个新手开发的插件，Hexrypt的代码质量不高，有许多可以改进的方面。所以我希望有能力的大神可以继续调整Hexrypt的功能。它现在以MIT协议在Github上开源，如果你可以让Hexrypt变的更好，就请参与它的开发吧。
