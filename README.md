1.cra初始化项目
2.自定义(覆盖)webpack 配置 craco
``````
安装
npm i -D @craco/craco

配置文件
  my-app
  ├── node_modules
+ ├── craco.config.js
  └── package.json

package.json
"scripts": {
-  "start": "react-scripts start"
+  "start": "craco start"
-  "build": "react-scripts build"
+  "build": "craco build"
-  "test": "react-scripts test"
+  "test": "craco test"
}


3.tailwindcss

4.jsconfig.json 配置路径别名的映射
5.UI库的配置
6.请求库的配置



//可执行文件 .exe

npx abc =>运行当前路径/node_modules/.bin/abc的文件
#!/usr/bin/env node 告诉操作系统 该文件由谁来执行

webpack => 去环境变量中找 abc 这个可以执行文件

尝试：
nom i webpack -g

1.D:\soft\gitee\Git\webpack
2.C:\Program Files\nodejs\webpack
3.C:\python27\webpack



