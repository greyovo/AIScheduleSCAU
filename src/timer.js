async function scheduleTimer({ providerRes, parserRes } = {}) {
  // 返回时间配置JSON，所有项都为可选项，如果不进行时间配置，请返回空对象
  return {
    totalWeek: 16, // 总周数：[1, 30]之间的整数
    forenoon: 7, // 上午课程节数：[1, 10]之间的整数
    afternoon: 5, // 下午课程节数：[0, 10]之间的整数
    night: 3, // 晚间课程节数：[0, 10]之间的整数
    sections: [{
      section: 1, // 节次：[1, 30]之间的整数
      startTime: '08:00', // 开始时间：参照这个标准格式5位长度字符串
      endTime: '08:40', // 结束时间：同上
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
    }], // 课程时间表，注意：总长度要和上边配置的节数加和对齐
  }
}
