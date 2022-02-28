// 此处必须保留
var cheerio = require("cheerio")

// 样本html的文件名
var htmlFile = "20220218.html"
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
    if(result){
      $("#output").append(JSON.stringify(result,undefined,2))
      $("#status-text").append("成功！").addClass("success")
      Prism.highlightAll()
    } else{
      $("#status-text").append("出现错误，请打开控制台查看").addClass("error")
    }
  } catch (error) {
    $("#status-text").append("出现错误，请打开控制台查看").addClass("error")
  }
  
  
  $("#temp").empty()
  $("#temp").append(html)
}, 500)