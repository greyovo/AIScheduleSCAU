function scheduleHtmlProvider(dom = document) {
  var updatelog =
    "【开发者要毕业了, 有没有热心同学想帮忙维护的, 欢迎QQ找我~】\n\n" +
    "最后更新于2022-02-17, 修复一些问题。感谢热心同学: @亭瞳 的反馈。";

  var info = '项目开源地址：github.com/greyovo/AISchedule_SCAU\n'

  alert(
    "欢迎使用! 如有问题, 请联系开发者 QQ:598383969\n" +
    info + updatelog
  )
  const content = dom.getElementsByClassName("el-table__body-wrapper")
  // const content = dom.getElementsByTagName("tbody")
  return content[0].innerHTML
}
