import React from "react";
import ReactApexChart from "react-apexcharts";
export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Bubble1",
          data: [617594490, 1810477550, 1530600797, 1111111119, 68654343]
        },
        {
          name: "Bubble2",
          data: [66789876590, 18876543, 1539876543456, 11666661119, 2222565]
        },
        {
          name: "Bubble3",
          data: [61756543, 18876543250, 1530876547, 11198765419, 68876543243]
        },
        {
          name: "Bubble4",
          data: [6156789490, 184567890550, 159876797, 1111111119, 68765443]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: "bubble"
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 0.8
        },
        title: {
          text: "Simple Bubble Chart"
        },
        xaxis: {
          tickAmount: 12,
          type: "category"
        },
        yaxis: {
          max: 70
        }
      }
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="bubble"
        height={350}
      />
    );
  }
}
