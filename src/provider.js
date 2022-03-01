async function scheduleHtmlProvider() {
  let updatelog =
    "🧐 Hi 开发者要毕业了，有没有热心同学想帮忙维护的，欢迎联系我\n\n" +
    "📍 最后更新于 2022-03-02。适配新版小爱课程表，解决课程完全一致时出现的冲突问题。\n\n"+
    "🎉 感谢 @液态镁 @冲冲冲 的反馈。\n\n";

  let info = '联系我：QQ(598383969)\n项目开源地址：github.com/greyovo/AISchedule_SCAU\n'

  // 注意！
  // 使用开发者插件进行测试时，要注释掉下面的 loadTool 和 AIScheduleAlert ，
  // 否则会因为跨域问题无法加载该插件从而导致 provider 运行失败
  await loadTool('AIScheduleTools')
  await AIScheduleAlert({
    titleText: '欢迎使用', // 标题内容，字体比较大，不传默认为提示
    contentText: updatelog + info, // 提示信息，字体稍小，支持使用``达到换行效果，具体使用效果建议真机测试
    confirmText: '好哒', // 确认按钮文字，可不传默认为确认
  })

  const content = document.getElementsByClassName("el-table__body-wrapper")[0].innerHTML
  return content
}
