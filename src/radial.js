import React from 'react'
import  ReactApexChart from 'react-apexcharts'

export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      }],
      options: {
        chart: {
          height: 350,
          type: 'radar',
        },
        title: {
          text: 'Basic Radar Chart'
        },
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June']
        }
      },
    
    
    };
  }



  render() {
    return (
      


<ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} />
);}}