// 此处必须保留
var cheerio = require('cheerio');

console.log('index.js working...');

// jQuery是异步函数
$(document).ready(function () {
    $('#temp').load('/src/raw_source_2.html')
});

// 因此让其等待jQuery加载了之后再延迟执行
setTimeout(() => {
    // var html = document.querySelector('#temp').innerHTML
    var html = scheduleHtmlProvider(document)
    scheduleHtmlParser(html)
}, 1000);

/**
 * 将providerd 的代码复制到此 
 * @param {*} dom 
 * @returns 
 */
function scheduleHtmlProvider(dom = document) {
    // const content = dom.getElementsByClassName('el-table__body-wrapper')
    const content = dom.getElementsByClassName('el-table__body-wrapper')
    return content[0].innerHTML;
}