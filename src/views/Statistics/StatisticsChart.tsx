import React from 'react';
import ReactECharts from 'echarts-for-react';


const StatisticsChart: React.FC = (props) => {


    return <ReactECharts option={props.children} className="ReactEcharts"/>;
};


export {StatisticsChart};