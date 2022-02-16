import Layout from 'components/Layout';
import React, {ReactNode, useEffect, useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';
import {StatisticsChart} from './Statistics/StatisticsChart';
import _ from 'lodash';

const ChartSeparator = styled.div`
  margin: 4px 0 -5px 0;
  line-height: normal;
  font-size: 20px;
  padding: 4px 16px;
  color: #363636;
`

const Separator = styled.div`
  margin-top: -30px;
  padding: 4px 16px;
  font-size: 20px;
`

const EchartWrapper = styled.div`
  padding: 10px 12px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  .ReactEcharts {
    width: 430%;
  }
`;

const CategoryWrapper = styled.div`
  background: #62b37a ;
  color: white;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;

  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

const TotalAmount = styled.div`
  background: #62b37a;
  border-radius: 0 0 8px 8px;
  color: white;
  padding: 4px 16px;
  font-size: 20px;
  height: 100px;
  >span{
    font-size: 36px;
  }
`

const StatisticsList = styled.div`
  margin: -4px 0;
  color: #363636;
`

function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-');
    const {records} = useRecords();
    const {getName} = useTags();
    const hash: { [K: string]: RecordItem[] } = {};
    const selectedRecords = records.filter(r => r.category === category);

    selectedRecords.forEach(r => {
        const key = day(r.createdAt).format('YYYY-MM-DD');
        if (!(key in hash)) {
            hash[key] = [];
        }
        hash[key].push(r);
    });
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        return 0;
    });

    useEffect(() => {
        const wrapper = document.getElementsByClassName('EchartWrapper')[0];
        if (wrapper) {
            (wrapper as HTMLDivElement).scrollLeft = wrapper.scrollWidth;
        }
    }, []);

    const today = new Date();
    let dayArray: any[] = [];
    let totalAmount = 0;
    for (let i = 0; i <= 29; i++) {
        const dateString = day(today).subtract(i, 'day').format('YYYY-MM-DD');
        let found = _.find(selectedRecords, {createdAt: dateString});
        totalAmount += found ? found.amount: 0;
        dayArray.push({key: dateString, value: found ? found.amount : 0});
    }
    dayArray.sort((a, b) => {
        if (a.key > b.key) {
            return 1;
        } else if (a.key === b.key) {
            return 0;
        } else {
            return -1;
        }
    });

    const chartOptions = () => {
        const keys = dayArray.map(item => item.key);
        const values = dayArray.map(item => item.value);
        return {
            grid: {
                left: 0,
                right: 0,
            },
            xAxis: {
                type: 'category',
                data: keys,
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#4a4a4a'
                    }
                },
                axisLabel: {
                    formatter: function (value: string) {
                        return value.substring(5);
                    }
                }
            },
            yAxis: {
                show: false
            },
            series: [
                {
                    data: values,
                    detail: {
                        show: true
                    },
                    type: 'bar',
                    color: ['#80b77e'],
                    itemStyle: {
                        opacity: 0.9,

                            label:{
                                show:true,
                                formatter:'¥{c}',
                                position: 'top',
                                textStyle:{
                                    color: '#80b77e'
                                }
                            }
                        ,
                    },
                    select: {
                        itemStyle: {
                            borderColor: 'black'
                        }
                    }
                }
            ],
            tooltip: {
                showContent: true,
                triggerOn: 'click',
                formatter(params:any) {
                    let { value, name } = params;
                    return `${name} <br/> ¥ ${value}`;
                },
                position: 'top'
            },
        };
    };



    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category} onChange={(value) => setCategory(value)}/>
            </CategoryWrapper>

            <TotalAmount>
                <div>合计 :</div>
                <span>¥ {totalAmount}</span>
            </TotalAmount>

            <ChartSeparator>{category.charAt(0)=== '-'? "支出":"收入"}对比</ChartSeparator>


            <EchartWrapper className="EchartWrapper">
                <StatisticsChart>{chartOptions()}</StatisticsChart>
            </EchartWrapper>

            <Separator>{category.charAt(0)=== '-'? "支出":"收入"}排行榜</Separator>


            {array.map(([date, records]) => <div key={Math.random()}>
                <Header>
                    {date}
                </Header>
                <StatisticsList>
                    {records.map(r => {
                        return <Item key={Math.random()}>
                            <div className="tags oneLine">
                                {r.tagIds
                                    .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                                    //[span,span,span]
                                    //[span.',',span,',',span]
                                    .reduce((result, span, index, array) =>
                                            result.concat(index < array.length - 1 ? [span, ', '] : [span]),
                                        [] as ReactNode[])
                                }
                            </div>

                            {r.note && <div className="note">
                                {r.note}
                            </div>}

                            <div className="amount">
                                ¥ {r.amount}
                            </div>
                        </Item>;
                    })
                    }
                </StatisticsList>
            </div>)}
        </Layout>
    );
}

export default Statistics;