function scheduleHtmlProvider(dom = document) {
    const content = dom.getElementsByClassName('el-table__body-wrapper')
    //   console.log(ifrs)
    return content[0].innerHTML;
}