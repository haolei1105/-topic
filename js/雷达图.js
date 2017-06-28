option = {
    title: {
        text: '基础雷达图'

    },

    tooltip: {},
    legend: {

        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    backgroundColor:'#000',//除雷达外的背景色
    radar: {
        splitArea: {//背景分割区域
            areaStyle: {
                color: ['#A7D282', '#FFF57F', '#FFF57F', '#EF856F','#A7D282']//由里到外顺序依次设置颜色
            }
        },
        // shape: 'circle',
        indicator: [
            { name: '销售（sales）', max: 6500},
            { name: '管理（Administration）', max: 16000},
            { name: '信息技术（Information Techology）', max: 30000},
            { name: '客服（Customer Support）', max: 38000},
            { name: '研发（Development）', max: 52000},
            { name: '市场（Marketing）', max: 25000}
        ]
    },
    series: [{
        symbolSize: 5, //拐点的大小
        symbol: 'circle',//拐点的样式  'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        itemStyle:{
            normal:{
                color:'blue'//拐点的颜色
            },

        },
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        lineStyle: {normal: {color:'#005AAF',width:4}},//折线样式
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '预算分配（Allocated Budget）',

            },
            {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '实际开销（Actual Spending）'
            }

        ],



    }]
};