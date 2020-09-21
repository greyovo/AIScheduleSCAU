function scheduleHtmlProvider(dom = document) {
    const content = dom.getElementsByTagName("tbody")
    //   console.log(ifrs)
    return content[0].innerHTML;
}