import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

export default class chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["boston", "hhh ", "jjjj", "blabla", "egyp"],
        datasets: [
          {
            label: "population",
            data: [617594490, 1810477550, 1530600797, 1111111119, 68654343],
            backgroundColor: [
              "rgba(255,99,132,0.6)",
              "rgba(54,162,235,0.6)",
              "rgba(255,206,86,0.6)",
              "rgba(255,20,235,0.6)",
              "rgba(255,159,65,0.6)"
            ]
          }
        ]
      }
    };
  }

  /*static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }*/

  render() {
    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}
module.exports = chart;