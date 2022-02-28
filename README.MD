# AIScheduleSCAU

MIUI 小爱课程表 - 华南农业大学新教务系统课程表解析

开始前请看小爱团队的[新版官方文档](https://open-schedule-prod.ai.xiaomi.com/docs/#/help/)。

## 简述

核心文件如下，其他的 html 和 js 只是为了方便搭建一个本地服务器方便调试。

- `./src/provider.js`
- `./src/parser.js`
- `./src/timer.js`

~~已更新集成小爱课程表工具箱（即 MIUI 弹窗对话框样式，直接按照官方文档编写即可看到效果，无需额外挂载到 window）~~

~~其中 `/lib` 下是使用 `browserify` 将 `cheerio` 打包为了一个 js，以方便在 `index.html` 中直接使用。~~

官方终于制作了一个本地调试环境（v0.3.4），可以自动同步代码到插件。详情介绍见 `README-tools.md`

## 准备工作

- 需要 Nodejs 环境
- 克隆本仓库到本地，并为浏览器安装小爱课程表的开发插件，见[官方文档](https://open-schedule-prod.ai.xiaomi.com/docs/#/help/)
- 获取课表所在页的 HTML。具体请看：[小爱同学课程表 · 协助调试指南](https://www.yuque.com/docs/share/1ca58f30-03d5-413f-a2f2-5647ee0fabab?#)

## 开始编写与调试

1. 获得包含课程表的网页 HTML，并在浏览器打开
2. 先安装依赖 `npm i`，然后启动热更新环境 `npm run start`。
3. 编写`./src/provider.js`，提取出仅包含课程表的最简 HTML 片段
4. 编辑 `./src/parser.js`，打开浏览器控制台查看输出结果
5. 在 `./src/timer.js` 中编写课程时间表
6. 在开发者工具中点击测试运行，详见官方文档

> 此时打开开发者工具，进入 `版本详情` Tab，如果代码编写右边出现绿色链接标志，则表明链接成功
## 注意

常见错误：

<img src="README.assets/common_error_json.png" alt="common_error_json" style="zoom:50%;" />

检查是否存在以下情况（整理自官方技术人员的解答与排查）

1. 避免使用正则表达式对象的`exec`方法；

2. 避免使用如下写法：

   ```javascript
   // 这样不行
   nodeArray = $(this).children('div')?.toArray()
                                      ^

   // 这样可以
   return str.charAt(0) == "*" ? str.substr(2) : str
   ```

## 有用的资料

- 小爱课程表官方文档
  https://open-schedule-prod.ai.xiaomi.com/docs/#/help/

- Cheerio 官方文档翻译
  https://juejin.im/post/6844904135767097352
