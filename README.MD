# AISchedule_SCAU

MIUI 小爱课程表 - 华南农业大学新教务系统课程表解析

开始前请看小爱团队的[官方文档](https://ldtu0m3md0.feishu.cn/docs/doccnhZPl8KnswEthRXUz8ivnhb)。

## 简述

核心文件其实就这两个：

- `./src/scheduleHtmlProvider.js`
- `./src/scheduleHtmlParser.js`

其他的 html 和 js 只是为了方便搭建一个本地服务器方便调试。

其中`/lib`下是使用`browserify`将`cheerio`打包为了一个 js，以方便在 index.html 中直接使用。

## 准备工作

克隆本仓库到本地，并为浏览器安装小爱课程表的[开发插件](https://ldtu0m3md0.feishu.cn/docs/doccnhZPl8KnswEthRXUz8ivnhb)

### 安装依赖

```bash
npm install
```

### 样本准备

获取课表所在页的HTML。具体请看：[小爱同学课程表 · 协助调试指南](https://www.yuque.com/docs/share/1ca58f30-03d5-413f-a2f2-5647ee0fabab?#)

## 开始编写与调试

> 我这里使用 Visual Studio Code 扩展商店中的 `Live Server`，自行搜索安装即可。将整个文件夹启动到临时服务器，即可实现热更新。

1. 将包含课程表的整个 HTML 文档（样本）保存复制到`/src`中，在 index.js 中`htmlFile`中输入 HTML 文件名
2. 启动 live-server
3. 编写 provider，提取出仅包含课程表的最简 html 片段
4. 然后就可以编辑 parser 了，有变更时浏览器会自动加载刷新，打开浏览器控制台查看输出结果
5. 都写完之后再将 provider、parser 的代码复制粘贴到小爱官方提供的扩展`AISchedule`对应的代码处。详情请参照开头的文档。

## 注意

常见错误：

<img src="README.assets/common_error_json.png" alt="common_error_json" style="zoom:50%;" />

检查是否存在以下情况（整理自官方技术人员的解答与排查）

1. 避免使用`document`对象；

2. 避免使用正则表达式对象的`exec`方法；

3. 避免使用如下写法：

   ```javascript
   // 这样不行
   nodeArray = $(this).children('div')?.toArray()
                                      ^

   // 这样可以
   return str.charAt(0) == "*" ? str.substr(2) : str
   ```

## 有用的资料

以下内容来自开发者群公告

- 小爱课程表官方文档
  https://ldtu0m3md0.feishu.cn/docs/doccnhZPl8KnswEthRXUz8ivnhb

- Cheerio 官方文档翻译
  https://juejin.im/post/6844904135767097352

- 记一次从教务系统导出课程到小爱课程表
  https://www.jianshu.com/p/2083013fc846

- SZTU 深圳技术大学教务系统小爱课程表导入——强智科技 13369
  https://blog.csdn.net/qq_38331169/article/details/108500577
