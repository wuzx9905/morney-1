import React from 'react';
import ReactECharts from 'echarts-for-react';


const StatisticsChart: React.FC = () => {
    const options = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                color:['#53b534'],
            }
        ],
        tooltip: {
            showContent: true,
        }
    };

    return <ReactECharts option={options} className="ReactECharts"/>;
};

// type Props = {
//     options: EChartOption;
// }
//
// const StatisticsChart:React.FunctionComponent<Props> = (props)=> {
//     if (props.options === undefined) {
//         return console.error('options 为空');
//     }
//     const myChart = echarts.init(document.getElementById('echartWrapper') as HTMLDivElement);
//     myChart.setOption(props.options!);
//     return (
//         <StatisticsChart options={}/>
//     );
// }

export {StatisticsChart};