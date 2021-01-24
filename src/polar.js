import React from 'react'
import  ReactApexChart from 'react-apexcharts'

export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [1400, 2300, 210, 1700, 1500, 1000, 1200, 1700, 2100],
      options: {
        chart: {
          type: 'polarArea',
        },
        stroke: {
          colors: ['#fff']
        },
        fill: {
          opacity: 1
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 400
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    
    
    };
  }



  render() {
    return (
      


<ReactApexChart options={this.state.options} series={this.state.series} type="polarArea" />

    );}}