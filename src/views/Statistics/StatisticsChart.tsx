import React from 'react';
import ReactECharts from 'echarts-for-react';


const StatisticsChart: React.FC = () => {
    const options = {
        grid:{
          left:0,
          right:0,
        },
        xAxis: {
            type: 'category',
            data: [
                'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',
                'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',
                'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',
                'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',
            ],
            axisTick:{
                show:false
            },
            axisLine:{
                lineStyle:{
                    color: '#4a4a4a'
                }
            }
        },
        yAxis: {
            show:false
        },
        series: [
            {
                data: [
                    120, 200, 150, 80, 70, 110, 130,
                    120, 200, 150, 80, 70, 110, 130,
                    120, 200, 150, 80, 70, 110, 130,
                    120, 200, 150, 80, 70, 110, 130
                ],
                detail:{
                  show: true
                },
                type: 'bar',
                color:['#80b77e'],
                itemStyle:{
                    opacity: 0.9
                },
                select:{
                    itemStyle:{
                        borderColor:'black'
                    }
                }
            }
        ],
        tooltip: {
            showContent: true,
            triggerOn:'click',
            formatter:'{c}',
            position:'top'
        },
    };

    return <ReactECharts option={options} className="ReactEcharts"/>;
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