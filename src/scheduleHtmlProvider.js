function scheduleHtmlProvider(dom = document) {
  var updatelog =
    "最后更新于2021-08-30，适配新学期的作息表与教务系统的变动。\n" + "感谢热心同学：嘉、旺仔牛奶的反馈。"
  alert(
    "欢迎使用 :D \n如有问题或错漏，请添加开发者QQ:598383969进行反馈。\n------------\n" +
      updatelog
  )
  const content = dom.getElementsByClassName("el-table__body-wrapper")
  return content[0].innerHTML
}
