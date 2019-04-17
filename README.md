# vue-learn-qunaer

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 静态文件
1. vue-cli3没有static文件夹，默认的静态文件夹是public
2. 例如，在public里新建一个mock文件夹，里面有一个index.json文件，浏览器访问：http://localhost:8080/mock/index.json
3. 配置代理proxy，参考vue.config.js

### qunaer
http://touch.piao.qunar.com/ 

### 使用server数据
1、需要xampp，mock文件夹里的数据放到xampp里htdocs
2、vue.config.js里修改proxy


###
待做：
1、php服务器，联调,已测试，xampp下的htdocs
2、真机测试有bug，华为手机某些点击事件不生效
3、打包部署到服务器，npm run build，修改vue.config,js里的publicPath，可以存放在服务器的某个文件夹下
4、学习vue官网上的vue资源