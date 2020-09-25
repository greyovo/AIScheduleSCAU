let sectionTimes = [{
  "section": 1,
  "startTime": "08:00",
  "endTime": "09:35"
}, {
  "section": 2,
  "startTime": "10:05",
  "endTime": "11:40"
}, {
  "section": 3,
  "startTime": "12:30",
  "endTime": "14:05"
}, {
  "section": 4,
  "startTime": "14:30",
  "endTime": "16:05"
}, {
  "section": 5,
  "startTime": "16:35",
  "endTime": "18:10"
}, {
  "section": 6,
  "startTime": "19:30",
  "endTime": "21:05"
}, {
  "section": 7,
  "startTime": "21:10",
  "endTime": "21:50"
}]
// let sectionTimes = [{
//   "section": 1,
//   "startTime": "08:00",
//   "endTime": "08:45"
// }, {
//   "section": 2,
//   "startTime": "08:50",
//   "endTime": "09:35"
// }, {
//   "section": 3,
//   "startTime": "09:55",
//   "endTime": "10:40"
// }, {
//   "section": 4,
//   "startTime": "10:45",
//   "endTime": "11:30"
// }, {
//   "section": 5,
//   "startTime": "13:10",
//   "endTime": "13:55"
// }, {
//   "section": 6,
//   "startTime": "14:00",
//   "endTime": "14:45"
// }, {
//   "section": 7,
//   "startTime": "15:00",
//   "endTime": "15:45"
// }, {
//   "section": 8,
//   "startTime": "15:50",
//   "endTime": "16:35"
// }, {
//   "section": 9,
//   "startTime": "16:50",
//   "endTime": "17:35"
// }, {
//   "section": 10,
//   "startTime": "17:40",
//   "endTime": "18:25"
// }, {
//   "section": 11,
//   "startTime": "19:10",
//   "endTime": "19:55"
// }, {
//   "section": 12,
//   "startTime": "20:00",
//   "endTime": "20:45"
// }]

// 转换周次，返回整数数组
function getWeeksArray(str) {
  if (str == null || str == "")
    return []
  let weekArray = []
  const reg = new RegExp(/(\().*?(\))/g)
  str = str.match(reg)[0]
  str = str.substr(1, str.length - 3)
  let ranges = str.split(',')
  ranges.forEach(element => {
    let start = Number.parseInt(element.split('-')[0])
    let end = Number.parseInt(element.split('-')[1])
    for (let i = start; i < end + 1; i++) {
      weekArray.push(i)
    }
  });
  // console.log(weekArray);
  return weekArray
}

// 转换节数
function getSections(index, str) {
  console.log(index, str);
  index++
  if (index < 6) {
    return [
      {
        section: index * 2 - 1
      },
      {
        section: index * 2
      }
    ]
  } else {
    let sections = []
    str = str.substr(0, 5)
    let start = Number.parseInt(str.split('-')[0])
    let end = Number.parseInt(str.split('-')[1])
    for (let i = start; i < end + 1; i++) {
      sections.push({
        section: i
      })
    }
    return sections
  }
}

function scheduleHtmlParser(html) {
  let count = 0
  // console.log(html)
  const $ = cheerio.load(html, { decodeEntities: false })
  let result = []
  // const reg = new RegExp(/>.*?</g)
  // const reg = new RegExp(/>.*?</g)
  $('tbody').find('tr').each(function (row, _) {
    if (row != null) {
      $(this).find('td').each(function (col, _) {
        if (col != 0) {
          let nodeArray
          $(this).find('div div div')?.each(function (i, elem) {
            nodeArray = $(this).children('div').toArray()
            if (nodeArray.length == 0)
              return
            count++;
            let info = []
            for (let i = 3; i < 8; i++) {
              info.push(nodeArray[i]?.firstChild?.data)
            }
            // 开始将元素加入对象中
            let course = {
              name: info[0]?.substr(2), //课程名字
              teacher: info[1] ? info[1] : '', //教师
              weeks: getWeeksArray(info[3]), //周次
              position: info[4] ? info[4] : '', //上课地点
              day: col, //星期几
              // sections: getSections(row, info[3]) //第几节
              sections: [{
                section: row
              }] //第几节
            }
            // console.info("raw", info);
            console.info("result", course);
            result.push(course)
          })
        }
      })
    }
  })
  console.info("共", count, "节课");
  console.info(result);

  return {
    courseInfos: result,
    sectionTimes: sectionTimes
  }
}


