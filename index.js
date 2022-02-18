// 此处必须保留
var cheerio = require("cheerio")

// 样本html的文件名
var htmlFile = "20220218.html"

console.log("index.js working...")

$(document).ready(function () {
  $("#temp").load("/src/" + htmlFile)
  $("#prompt").append(htmlFile + " 中内容如下：")
})

// 等待cheerio加载了之后再延迟执行
setTimeout(() => {
  var html = scheduleHtmlProvider(document)
  $("#temp").empty()
  $("#temp").append(html)
  scheduleHtmlParser(html)
}, 500)