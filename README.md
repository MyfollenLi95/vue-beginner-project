# wangyiyanxuan
##网易严选项目开展
* 第一步技术选型：vue框架开发(渐进式JavaScript 框架)
* 第二步：使用vue脚手架搭建项目
  * npm install -g vue-cli(全局安装)
  * vue init webpack gshop(全局安装之后就初始化一个文件也可以不写文件名)
  * cd gshop(进入到初始化的文件中)
  * npm install(下载所有依赖)
  * npm run dev(开发环境运行)
* 第三步：拆分组件(一般组件或者路由组件)
* 第四步：创建VueRouter对象设置路由(npm install vue-router)
* 第五步：创建store文件管理vuex
 * state(数据状态)
 * getter(管理计算属性的函数)
 * actions(包含n个间接更新状态的函数对象，发送ajax请求)
 * mutations(包含n个直接更新状态的函数对象)
* 第六步：使用stylus编辑样式时下载 stylus
* 第七部：使用mint-ui组件库的时候需要改配置
 ---
	第一：npm install --save mint-ui（先下载）
	第二：npm install --save-dev babel-plugin-component(在下载这个实现按需打包)
	第三：（修改babel配置）
	"plugins": ["transform-runtime",["component", [
	  {
	    "libraryName": "mint-ui",
	    "style": true
	  }
	]]]
 ---
* 在开发中解决跨域问题:
 ---
	proxyTable: {
      '/api': { // 匹配所有以 '/api'开头的请求路径
        target: 'http://localhost:5000', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
          '^/api': ''
        }
      }
    },
 ---
* 最后一步生产环境项目上线时：
	npm run build
	npm install -g serve(全局安装开启的这个服务)
	serve dist
* 项目流程：
  * 此项目是网易严选，SPA(单页面应用)
  * 整体项目运用了 工程化(webpack) 、组件化(vue) 、 模块化(ES6) export(分别暴露，统一暴露) export default(默认暴露) import(引入)
  * 拆分组件、实现静态界面、实现动态界面
  * 拆分组件：路由组件、一般组件
  * 运用 better-scroll(滑动功能) 、 swiper(轮播功能) 、 pubsub-js(组件间通信，传属性)js库
  * 运用  vue框架 、 vue-cli脚手架 、 vue-router路由器 、 vuex状态管理

