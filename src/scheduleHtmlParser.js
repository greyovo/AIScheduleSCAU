// index[0][0] 表示表格中的第1行第1项的div，以此类推
// let index = [
//     [1, 2, 3, 4, 5, 6, 7],
//     [9, 10, 11, 12, 13, 14, 15],
//     [17, 18, 19, 20, 21, 22, 23],
//     [25, 26, 27, 28, 29, 30, 31],
//     [33, 34, 35, 36, 37, 38, 39],
//     [41, 42, 43, 44, 45, 46, 47],
// ]

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

// 转换周次，返回整数数组
function getWeeksArray(str) {
  if (str == null || str == "")
    return []
  let weekArray = []
  const reg = new RegExp(/(\().*?(\))/g)
  str = str.match(reg)
  // console.log(str);
  str = str[0].substr(1, str.length - 3)
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
  index++
  if (index < 5) {
    return [
      {
        section: index * 2
      },
      {
        section: index * 2 + 1
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
    // console.log(sections);
    return sections
  }

}

function scheduleHtmlParser(html) {
  let count=0
  // console.log(html)
  const $ = cheerio.load(html, { decodeEntities: false })
  let result = []
  // const reg = new RegExp(/(?<=>)[^<>]+(?=<)/g)
  // const reg = new RegExp(/>.*?</g)
  const reg = new RegExp(/>.*?</g)
  // const reg = new RegExp(/(^\s*)|(\s*$)/g)
  $('tbody').find('tr').each(function (row, _) {
    if (row != null) {
      // console.log("row:", row);
      $(this).find('td').each(function (col, _) {
        if (col != 0) {
          let dataarr
          // console.log("col:", col);
          $(this).find('div div div')?.each(function (i, elem) {
            dataarr = $(this).children('div').toArray()
            if (dataarr.length == 0)
              return
            count++;
            console.log(dataarr[3]?.firstChild?.data);
            console.log(dataarr[4]?.firstChild?.data);
            console.log(dataarr[5]?.firstChild?.data);
            console.log(dataarr[6]?.firstChild?.data);
          })

          let info = $(this).html().match(reg)
          // 该表格内的标签的内容，可能包含多个课程信息
          if (info != null && info != '><') {
            // 课程非空
            for (let i = 0; i < info.length; i++) {
              // 截去"<"和">"
              info[i] = info[i].substr(1, info[i].length - 2);
            }
            // TODO 要考虑一个表格内有多个课程的情况。用求模运算？
            // 开始将元素加入对象中
            let course = {
              name: info[3]?.substr(2), //课程名字
              teacher: info[4], //教师
              weeks: getWeeksArray(info[6]), //周次
              position: info[7], //上课地点
              day: col, //星期几
              sections: getSections(row, info[6]) //第几节
            }
            console.info("raw", info);
            // console.info("result", course);
            result.push(course)
          }
        }
      })
    }
  })
  console.log("共", count, "节课");
  // console.log(res2, res3,'\n')
  console.info(result);

  return {
    courseInfos: result,
    sectionTimes: sectionTimes
  }
}


