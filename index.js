var cheerio = require('cheerio');

var html = `<html>

<head></head>

<body>
    <div class="cell el-tooltip" style="width: 90px;"><span>1-2节</span></div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;">
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 编译原理(理论) (2-3,5-14周) </div>
                <div>* 编译原理(理论)</div>
                <div>方凤美</div>
                <div>18计算机1-6班,18网络工程1-2</div>
                <div>(2-3,5-14周)</div>
                <div>3212</div>
                <hr width="80%" style="border: 1px dashed grey; display: none;">
            </div>
        </div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;">
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 软件工程(理论) (11-14周) </div>
                <div>* 软件工程(理论)</div>
                <div>林毅申</div>
                <div>18计算机5-6班,18网络工程1-2</div>
                <div>(11-14周)</div>
                <div>3407</div>
                <hr width="80%" style="border: 1px dashed grey; display: none;">
            </div>
        </div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;">
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 软件工程(理论) (2-3,5-14周) </div>
                <div>* 软件工程(理论)</div>
                <div>林毅申</div>
                <div>18计算机5-6班,18网络工程1-2</div>
                <div>(2-3,5-14周)</div>
                <div>3309</div>
                <hr width="80%" style="border: 1px dashed grey; display: none;">
            </div>
        </div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;"><span>3-4节</span></div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;">
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 编译原理(实验) (6-13周) </div>
                <div>* 编译原理(实验)</div>
                <div>方凤美</div>
                <div>18计算机1-6班,18网络工程1-2</div>
                <div>(6-13周)</div>
                <div></div>
                <hr width="80%" style="border: 1px dashed grey; display: none;">
            </div>
        </div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;">
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 数据库系统(理论) (2-3,5-14周) </div>
                <div>* 数据库系统(理论)</div>
                <div>马莎</div>
                <div>18计算机4-6</div>
                <div>(2-3,5-14周)</div>
                <div>3302</div>
                <hr width="80%" style="border: 1px dashed grey; display: none;">
            </div>
        </div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;">
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">体质测试 (3-6周) </div>
                <div>体质测试</div>
                <div></div>
                <div>
                    18金融数学1班,18软工R1-6班,18计算科学1-2班,18农学丁颖1班,18农学贸易1班,18种子科学1班,18信管1-4班,18计算机1-6班,18农学1-2班,18网络工程1-2......
                </div>
                <div>(3-6周)</div>
                <div></div>
                <hr width="80%" style="border: 1px dashed grey;">
            </div>
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 软件工程(实验) (7-14周) </div>
                <div>* 软件工程(实验)</div>
                <div>林毅申</div>
                <div>18计算机5-6班,18网络工程1-2</div>
                <div>(7-14周)</div>
                <div></div>
                <hr width="80%" style="border: 1px dashed grey; display: none;">
            </div>
        </div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;">
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 软件开发基础 (.NET)(理论) (2-3,5-14周) </div>
                <div>* 软件开发基础 (.NET)(理论)</div>
                <div>李双娟</div>
                <div>18计算机1-6班,18网络工程1-2</div>
                <div>(2-3,5-14周)</div>
                <div>4401</div>
                <hr width="80%" style="border: 1px dashed grey; display: none;">
            </div>
        </div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;"><span>5-6节</span></div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;"><span>7-8节</span></div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;">
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 计算机网络(理论) (2-3,5-14周) </div>
                <div>* 计算机网络(理论)</div>
                <div>邱少健</div>
                <div>18计算机4-6</div>
                <div>(2-3,5-14周)</div>
                <div>3610</div>
                <hr width="80%" style="border: 1px dashed grey; display: none;">
            </div>
        </div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;">
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 数据库系统(实验) (6-13周) </div>
                <div>* 数据库系统(实验)</div>
                <div>马莎</div>
                <div>18计算机4-6</div>
                <div>(6-13周)</div>
                <div></div>
                <hr width="80%" style="border: 1px dashed grey; display: none;">
            </div>
        </div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;">
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 数据库系统(理论) (2-3,5-14周) </div>
                <div>* 数据库系统(理论)</div>
                <div>马莎</div>
                <div>18计算机4-6</div>
                <div>(2-3,5-14周)</div>
                <div>3205</div>
                <hr width="80%" style="border: 1px dashed grey; display: none;">
            </div>
        </div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;"><span>9-10节</span></div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;">
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 分布与并行计算(理论) (2-3,5-14周) </div>
                <div>* 分布与并行计算(理论)</div>
                <div>林毅申</div>
                <div>18计算机4-6</div>
                <div>(2-3,5-14周)</div>
                <div>3609</div>
                <hr width="80%" style="border: 1px dashed grey; display: none;">
            </div>
        </div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;">
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 分布与并行计算(实验) (6-13周) </div>
                <div>* 分布与并行计算(实验)</div>
                <div>林毅申</div>
                <div>18计算机4-6</div>
                <div>(6-13周)</div>
                <div></div>
                <hr width="80%" style="border: 1px dashed grey; display: none;">
            </div>
        </div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;">
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 计算机网络(理论) (2-3,5-14周) </div>
                <div>* 计算机网络(理论)</div>
                <div>邱少健</div>
                <div>18计算机4-6</div>
                <div>(2-3,5-14周)</div>
                <div>3306</div>
                <hr width="80%" style="border: 1px dashed grey; display: none;">
            </div>
        </div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;">
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 软件开发基础 (.NET)(实验) (6-13周) </div>
                <div>* 软件开发基础 (.NET)(实验)</div>
                <div>李双娟</div>
                <div>18计算机1-6班,18网络工程1-2</div>
                <div>(6-13周)</div>
                <div></div>
                <hr width="80%" style="border: 1px dashed grey; display: none;">
            </div>
        </div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;"><span>11-13节</span></div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;">
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 数据挖掘与机器学习(理论) (2-3,5-14周) 11-12节</div>
                <div>* 数据挖掘与机器学习(理论)</div>
                <div>陈霓</div>
                <div>18计算机4-6</div>
                <div>11-12节(2-3,5-14周)</div>
                <div>4302</div>
                <hr width="80%" style="border: 1px dashed grey; display: none;">
            </div>
        </div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;">
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 形势与政策Ⅲ (3-5周) 11-12节</div>
                <div>* 形势与政策Ⅲ</div>
                <div>杨瑩,黄经纬,严颖</div>
                <div>18计算机1-6班,18软工R1-6班,18统计学1-2班,18软工R温氏1</div>
                <div>11-12节(3-5周)</div>
                <div>4108</div>
                <hr width="80%" style="border: 1px dashed grey;">
            </div>
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 计算机网络(实验) (6-13周) 11-12节</div>
                <div>* 计算机网络(实验)</div>
                <div>邱少健</div>
                <div>18计算机4-6</div>
                <div>11-12节(6-13周)</div>
                <div></div>
                <hr width="80%" style="border: 1px dashed grey; display: none;">
            </div>
        </div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;">
            <div style="position: relative;">
                <div class="all-timetable-check-bz el-tooltip item"></div>
                <div></div>
                <div style="display: none;">* 数据挖掘与机器学习(实验) (6-13周) 11-12节</div>
                <div>* 数据挖掘与机器学习(实验)</div>
                <div>陈霓</div>
                <div>18计算机4-6</div>
                <div>11-12节(6-13周)</div>
                <div></div>
                <hr width="80%" style="border: 1px dashed grey; display: none;">
            </div>
        </div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <div class="cell el-tooltip" style="width: 90px;">
        <div class="cell" style="text-align: center;"></div>
    </div>
    <!---->
</body>

</html>`

console.log('index.js working...');
scheduleHtmlParser(html)