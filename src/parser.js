let sectionTimes = [
  {
    section: 1,
    startTime: "08:00",
    endTime: "08:40",
  },
  {
    section: 2,
    startTime: "08:45",
    endTime: "09:25",
  },
  {
    section: 3,
    startTime: "09:55",
    endTime: "10:35",
  },
  {
    section: 4,
    startTime: "10:40",
    endTime: "11:20",
  },
  {
    section: 5,
    startTime: "11:25",
    endTime: "12:05",
  },
  {
    section: 6,
    startTime: "12:40",
    endTime: "13:20",
  },
  {
    section: 7,
    startTime: "13:25",
    endTime: "14:05",
  },
  {
    section: 8,
    startTime: "14:30",
    endTime: "15:10",
  },
  {
    section: 9,
    startTime: "15:15",
    endTime: "15:55",
  },
  {
    section: 10,
    startTime: "16:25",
    endTime: "17:05",
  },
  {
    section: 11,
    startTime: "17:10",
    endTime: "17:50",
  },
  {
    section: 12,
    startTime: "17:55",
    endTime: "18:35",
  },
  {
    section: 13,
    startTime: "19:30",
    endTime: "20:10",
  },
  {
    section: 14,
    startTime: "20:15",
    endTime: "20:55",
  },
  {
    section: 15,
    startTime: "21:00",
    endTime: "21:40",
  },
]

/**
 *  转换周次，返回整数数组
 *  需要考虑单双周的情况
 * @param {String} str
 * @returns {Array}
 */
function getWeeksArray(str) {
  if (str == null || str == "") return []

  // 判断单双周，若都为 false 表示不区分单双周
  let odd = false
  let even = false
  if (str.includes("单周")) {
    odd = true
  } else if (str.includes("双周")) {
    even = true
  }

  let weekArray = []
  const reg = new RegExp(/(\().*?(\))/g)
  str = str.match(reg)[0]
  str = str.substr(1, str.length - 3) // 去括号

  let ranges = str.split(",")
  ranges.forEach((element) => {
    if (!element.includes("-")) {
      // 没有 ‘-’ 表明只有一个数
      weekArray.push(parseInt(element))
    } else {
      // 包含 “-” 则是区间
      let start = parseInt(element.split("-")[0])
      let end = parseInt(element.split("-")[1])
      for (let i = start; i < end + 1; i++) {
        // 单双周、或者不设单双周
        if (even && i % 2 == 0) {
          weekArray.push(i)
        } else if (odd && i % 2 != 0) {
          weekArray.push(i)
        } else if (!even && !odd) {
          weekArray.push(i) // 都为 false 表示不区分单双周
        }
      }
    }
  })
  // console.log(weekArray);
  return weekArray
}

/**
 * 转换节数
 * @param {String} index
 * @param {String} str
 * @returns {Array}
 */
function getSections(index, str) {
  // console.log('第', index, '行', str);
  index++ // 使得 index 从1开始算
  // 如果传入的参数不包含 “节” 字，表示上课节次是默认的，并且与所在行数 index 相关
  if (!str.includes("节")) {
    switch (index) {
      case 1:
        str = "01-02节" + str
        break
      case 2:
        str = "03-05节" + str
        break
      case 3:
        str = "06-07节" + str
        break
      case 4:
        str = "08-09节" + str
        break
      case 5:
        str = "10-12节" + str
        break
      case 6:
        str = "13-15节" + str
        break
      default:
        alert("出现错误，请联系开发者")
    }
    return getSections(index - 1, str)
  } else {
    let sections = []
    str = str.substr(0, 5)
    let start = parseInt(str.split("-")[0])
    let end = parseInt(str.split("-")[1])
    for (let i = start; i < end + 1; i++) {
      sections.push(sectionTimes[i-1])
    }
    return sections
  }
}

/**
 * 转换课程名，去掉星号*
 * @param {String} str
 * @returns {String}
 */
function getClassName(str) {
  if (!str) {
    return ""
  }
  return str.charAt(0) == "*" ? str.substr(2).trim() : str.trim()
}

/**
 * 函数入口
 * @param {String} html
 * @returns {Object}
 */
function scheduleHtmlParser(html) {
  let count = 0
  // console.log(html)
  const $ = cheerio.load(html, { decodeEntities: false })
  let result = []
  // const reg = new RegExp(/>.*?</g)
  $("tbody")
    .find("tr")
    .each(function (row, _) {
      if (row != null) {
        $(this)
          .find("td")
          .each(function (col, _) {
            if (col != 0) {
              let nodeArray = []
              $(this)
                .find("div div div")
                .each(function (i, elem) {
                  nodeArray = $(this).children("div").toArray()
                  if (nodeArray.length == 0) return
                  count++
                  let info = []
                  for (let i = 3; i < 8; i++) {
                    info.push($(nodeArray[i]).text().trim())
                  }
                  // 开始将元素加入对象中
                  let course = {
                    name: getClassName(info[0]), //课程名字
                    teacher: info[1] ? info[1] : "", //教师
                    weeks: getWeeksArray(info[3]), //周次
                    position: info[4] ? info[4] : "", //上课地点
                    day: col, //星期几
                    sections: getSections(row, info[3]), //第几节
                  }
                  // console.info("raw", info);
                  console.info(course)
                  result.push(course)
                })
            }
          })
      }
    })
  console.info("共", count, "节课")
  console.info(result)

  return result
}
