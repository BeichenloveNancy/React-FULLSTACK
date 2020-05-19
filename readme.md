## 这是一个react全栈项目
技术栈：React + Egg.js + Mysql

## Push使用这行代码：
* git push https://github.com/BeichenloveNancy/React-FULLSTACK.git master

## 5-11 
* 学习了 egg.js相关的知识
> egg.js 基于koa进行的二次封装 规范
* 熟悉基本的egg.js知识
> egg.js约定了app文件下的router.js文件用于统一所有路由规则

## 5-12 
* 初始server(服务)层
> Service 是在复杂业务场景下用于做业务逻辑封装的一个抽象层
> Service 文件必须放在 app/service 目录，可以支持多级目录，访问的时候可以通过目录名级联访问
* 使用egg-cors进行后端跨域处理

## 5-13
* Egg View 插件 egg-view-ejs
* Antd Design Moblie
> 一个基于 Preact/React/React Native 的UI组件库
* 移动端点击有一个300ms的延迟(判断是否页面需要放大)
300ms没有点击第二下，就会去执行点击事件 移动端项目通常需要取消
> FastClick 全局public文件引入
```
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
<script>
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
    }, false);
  }
  if(!window.Promise) {
    document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
  }
</script>
```
## 5-17
* 移动端适配 安装插件 vw做移动端适配
```
postcss-aspect-ratio-mini
postcss-px-to-viewport
postcss-write-svg
postcss-cssnext
```
* 压缩缩小优化css
插件 cssnano cssnano-preset-advanced

步骤：
1、 安装以上插件 
> yarn add postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext cssnano cssnano-preset-advanced
2、 暴露react默认隐藏配置文件
> yarn eject
3、 webpack.config.js postcss-loader添加使用以上插件

* React-router
1、 Switch： 为了解决route的唯一渲染（仅仅渲染一个路由路径）
Switch和js中的switch一致，只做一次，匹配到了就不再进行
2、 useHistory路由钩子函数 实现编程时页面跳转导航
```
<!-- 引入 -->
import { useHistory } from 'react-router-dom'
<!-- 使用 -->
const history = useHistory()
<!-- API -->
history.goBack()
history.push()
```

## 5-18
* egg.js 后端开发
1、安装插件执行以下代码
```
// 连接本地数据库的桥梁
yarn add egg-mysql --save
```
2、 添加接口
> 服务层封装连接数据库操作 控制层执行
- [x] Service层定义sql语句CURD操作，封装接口供服务器调用
- [x] Controller层调用Service层api，并返回相应处理结果
- [x] router定义接口 使得Controller层进行相应处理

## 5-19
* 对axios进行二次封装 进行相应拦截
38：50