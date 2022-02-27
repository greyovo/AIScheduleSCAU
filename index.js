// 此处必须保留
var cheerio = require("cheerio")

// 样本html的文件名
var htmlFile = "20220218.html"

console.log("index.js working...")

$(document).ready(function () {
  $("#temp").load("/src/" + htmlFile)
  $("#prompt").append(htmlFile + " 中内容如下：")
  // let element = document.createElement("#temp2")
})


// async function loadFromProvider(){
//   var html = await scheduleHtmlProvider()
// }

// 等待cheerio加载了之后再延迟执行
setTimeout(async () => {
  // 不能直接调用，因为是异步函数，需要 await
  var html = await scheduleHtmlProvider()
  $("#temp").empty()
  $("#temp").append(html)
  scheduleHtmlParser(html)
  // const content = dom.getElementsByTagName("tbody")
}, 500)