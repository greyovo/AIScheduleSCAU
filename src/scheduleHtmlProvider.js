function scheduleHtmlProvider(dom = document) {
    // const content = dom.getElementsByClassName('el-table__body-wrapper')
    return dom.querySelector('.el-table__body-wrapper').innerHTML
    //   console.log(ifrs)
    return content[0].innerHTML;
}