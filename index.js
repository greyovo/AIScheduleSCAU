// 此处必须保留
let cheerio = require("cheerio")

// 样本 html 的文件名
let htmlFile = "20220218.html"
let fullPath = `/src/resources/${htmlFile}`

console.log("index.js working...")

$(document).ready(function () {
  $("#temp").load(fullPath)
  $("#prompt").append("当前加载样本：" + `<a href="${fullPath}" target="_blank">${htmlFile}</a>`)
})

// 加载开发者工具箱
const AIScheduleAlert = window.AIScheduleAlert
const AISchedulePrompt = window.AISchedulePrompt
const AIScheduleConfirm = window.AIScheduleConfirm
const AIScheduleSelect = window.AIScheduleSelect
const loadTool = async function(str){}

// 等待cheerio加载了之后再延迟执行
setTimeout(async () => {
  try {
    // 因为是异步函数，需要 await
    var html = await scheduleHtmlProvider()
    let result = scheduleHtmlParser(html)
    if(result.length>0){
      $("#status-text").append("成功！").addClass("success")
      $("#output").append(JSON.stringify(result,undefined,2))
      Prism.highlightAll()
    } else{
      $("#status-text").append("返回的课程长度为 0").addClass("error")
      $("#output").append(JSON.stringify(result,undefined,2))
      Prism.highlightAll()
    }
  } catch (error) {
    $("#status-text").append("出现错误，请打开控制台查看").addClass("error")
    $("#output").append(error)
    Prism.highlightAll()
  }
  $("#temp").empty()
  $("#temp").append(html)
}, 500)