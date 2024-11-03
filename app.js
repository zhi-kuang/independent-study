// 引入 ECharts 库
const chartDom = document.getElementById('main');
const myChart = echarts.init(chartDom);

// 定义图表的配置项
const option = {
    title: {
        text: 'ECharts 示例'
    },
    tooltip: {},
    xAxis: {
        data: ['苹果', '香蕉', '橙子', '葡萄', '草莓', '梨']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

// 使用配置项生成图表
myChart.setOption(option);
