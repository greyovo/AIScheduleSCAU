// 此处必须保留
var cheerio = require("cheerio")

var htmlFile = "sample3.html"

console.log("index.js working...")

$(document).ready(function () {
  $("#temp").load("/src/" + htmlFile)
  $("#prompt").append(htmlFile + " 中内容如下：")
})
// 因此让其等待cheerio加载了之后再延迟执行
setTimeout(() => {
  // var html = document.querySelector('#temp').innerHTML
  var html = scheduleHtmlProvider(document)
  $("#temp").empty()
  $("#temp").append(html)
  scheduleHtmlParser(html)
}, 1000)