// index[0][0] 表示表格中的第1行第1项的div，以此类推
let index = [
    [1, 2, 3, 4, 5, 6, 7],
    [9, 10, 11, 12, 13, 14, 15],
    [17, 18, 19, 20, 21, 22, 23],
    [25, 26, 27, 28, 29, 30, 31],
    [33, 34, 35, 36, 37, 38, 39],
    [41, 42, 43, 44, 45, 46, 47],
]

function scheduleHtmlParser(html,) {
    // console.log(html)
    const $ = cheerio.load(html)

    let res1 = $('body > div:nth-child(1) > span').text()
    let res2 = $('body > div:nth-child(2) > div > div > div:nth-child(3)').text()
    let res3 = $('body > div:nth-child(3) > div > div > div:nth-child(6)').text()

    console.log(res1, res2, res3)

    let sectionTimes = [{
        "section": 1,
        "startTime": "08:00",
        "endTime": "08:45"
    }, {
        "section": 2,
        "startTime": "08:50",
        "endTime": "09:35"
    }, {
        "section": 3,
        "startTime": "09:55",
        "endTime": "10:40"
    }, {
        "section": 4,
        "startTime": "10:45",
        "endTime": "11:30"
    }, {
        "section": 5,
        "startTime": "13:10",
        "endTime": "13:55"
    }, {
        "section": 6,
        "startTime": "14:00",
        "endTime": "14:45"
    }, {
        "section": 7,
        "startTime": "15:00",
        "endTime": "15:45"
    }, {
        "section": 8,
        "startTime": "15:50",
        "endTime": "16:35"
    }, {
        "section": 9,
        "startTime": "16:50",
        "endTime": "17:35"
    }, {
        "section": 10,
        "startTime": "17:40",
        "endTime": "18:25"
    }, {
        "section": 11,
        "startTime": "19:10",
        "endTime": "19:55"
    }, {
        "section": 12,
        "startTime": "20:00",
        "endTime": "20:45"
    }]
    return {
        courseInfos: result,
        sectionTimes: sectionTimes
    }
}
