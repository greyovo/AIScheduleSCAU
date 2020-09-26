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
  "startTime": "10:05",
  "endTime": "10:50"
}, {
  "section": 4,
  "startTime": "10:55",
  "endTime": "11:40"
}, {
  "section": 5,
  "startTime": "12:30",
  "endTime": "13:15"
}, {
  "section": 6,
  "startTime": "13:20",
  "endTime": "14:05"
}, {
  "section": 7,
  "startTime": "14:30",
  "endTime": "15:15"
}, {
  "section": 8,
  "startTime": "15:20",
  "endTime": "16:05"
}, {
  "section": 9,
  "startTime": "16:35",
  "endTime": "17:20"
}, {
  "section": 10,
  "startTime": "17:25",
  "endTime": "18:10"
}, {
  "section": 11,
  "startTime": "19:30",
  "endTime": "20:15"
}, {
  "section": 12,
  "startTime": "20:20",
  "endTime": "21:05"
},{
  "section": 13,
  "startTime": "21:10",
  "endTime": "21:55"
}]

// 转换周次，返回整数数组
function getWeeksArray(str) {
  if (str == null || str == "")
    return []
  let weekArray = []
  const reg = new RegExp(/(\().*?(\))/g)
  str = str.match(reg)[0]
  str = str.substr(1, str.length - 3) //去括号

  if (str.includes('-')) {
    let ranges = str.split(',')
    // 包含 “-” 表明是区间
    ranges.forEach(element => {
      let start = parseInt(element.split('-')[0])
      let end = parseInt(element.split('-')[1])
      for (let i = start; i < end + 1; i++) {
        weekArray.push(i)
      }
    });
  } else {
    weekArray.push(parseInt(str))
  }
  // console.log(weekArray);
  return weekArray
}

// 转换节数
function getSections(index, str) {
  // console.log('第', index, '行', str);
  index++
  if (!str.includes('节')) {
    return [{
      section: index * 2 - 1,
      startTime: '',
      endTime: ''
    }, {
      section: index * 2,
      startTime: '',
      endTime: ''
    }]
  } else {
    let sections = []
    str = str.substr(0, 5)
    let start = parseInt(str.split('-')[0])
    let end = parseInt(str.split('-')[1])
    for (let i = start; i < end + 1; i++) {
      sections.push({
        section: i,
        startTime: '',
        endTime: ''
      })
    }
    return sections
  }
}

// 转换课程名，去掉星号*
function getClassName(str) {
  if (!str) {
    return ""
  }
  if (str.charAt(0) == "*") {
    return str.substr(2)
  }
  return str
}

function scheduleHtmlParser(html) {
  let count = 0
  // console.log(html)
  const $ = cheerio.load(html, { decodeEntities: false })
  let result = []
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
              name: getClassName(info[0]), //课程名字
              teacher: info[1] ? info[1] : '', //教师
              weeks: getWeeksArray(info[3]), //周次
              position: info[4] ? info[4] : '', //上课地点
              day: col, //星期几
              sections: getSections(row, info[3]) //第几节
              // sections: [{
              //   section: row + 1
              // }] //第几节
            }
            // console.info("raw", info);
            console.info("result", course);
            result.push(course)
            // console.info(JSON.stringify(course));
          })
        }
      })
    }
  })
  console.info("共", count, "节课");
  console.info(result);
  

  // 尝试解决实机测试出现的错误 但无效
  //  "Uncaught SyntaxError：Unexpected token o in JSON at  position 1"
  // 
  // result = JSON.stringify(result)
  // // console.log("JSON.stringify",result);
  // result = encodeURIComponent(result)
  // // console.log("encodeURIComponent",result);
  // result = decodeURIComponent(result)
  // // console.log("decodeURIComponent",result);
  // result = JSON.parse(result)

  return {
    courseInfos: result,
    sectionTimes: sectionTimes
  }
}