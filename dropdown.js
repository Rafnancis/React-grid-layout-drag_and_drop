import React from "react";
import Chart from "./charts";
import Scatterr from "./scatter";
import Cann from "./candlestick";
import Rad from "./radialbar";
import Ts from "./timeseries";
import Polar from "./polar";
import RAdi from "./radial";
import Ind from "./semicircle";
//import Bub from "./bubble";
import Cust from "./customcirc";
import Water from "./waterfall";
import { If, Then, ElseIf, Else } from "react-if-elseif-else-render";
var Pie = require("./piechart");
var Line = require("./Linechart");

export default class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Scatter Plots",
      x: "",
      y: "",
      val: "",
      labelss: "",
      display: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleChange = this.handleChangeinput.bind(this);
  }
  handleSubmit(event) {
    alert("thanks for choosing : " + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleChangeinputxxx(event) {
    console.log("added" + event.target.value);
    this.setState({ x: event.target.value });

    console.log(this.state.x);
  }

  handleChangeinputyyy(event) {
    console.log("added" + event.target.value);
    this.setState({ y: event.target.value });

    console.log(this.state.y);
  }
  handleChangeinputval(event) {
    this.setState({ val: event.target.value });
    console.log("added" + event.target.value);
  }
  handleChangeinputlabelss(event) {
    this.setState({ labelss: event.target.value });
    console.log("added" + event.target.value);
  }

  subComponent() {
    if (this.state.value === "Pie Charts") {
      console.log("added" + this.state.value);
      return (
        <form>
          <div>
            <p> enter the value</p>
            <input
              value={this.state.val}
              onChange={(e) => {
                this.handleChangeinputval(e);
              }}
            />
            <p> Enter the labels</p>
            <input
              type="text"
              value={this.state.labelss}
              onChange={(event) => this.handleChangeinputlabelss(event)}
            />{" "}
          </div>
        </form>
      );
    } else {
      console.log("added" + this.state.value);

      return (
        <form>
          <div>
            <p> enter x- axis</p>
            <input
              value={this.state.x}
              onChange={(e) => {
                this.handleChangeinputxxx(e);
              }}
            />
            <p> Enter the Y-axis</p>
            <input
              type="text"
              value={this.state.y}
              onChange={(event) => this.handleChangeinputyyy(event)}
            />{" "}
          </div>
        </form>
      );
    }
  }

  callChart = () => {
    //<Chart />;
    this.setState({ display: "hid" });
    console.log("ets");
  };
  chartC() {
    console.log("lmao");
    return (
      <div>
        <h1> lool</h1>
      </div>
    );
  }
  // <button onClick={this.enterinfo.bind(this)}> done </button>

  render() {
    let inputStyle = {
      display: "hidden"
    };
    // change code below this line

    if (this.state.display === "hid") {
      console.log("done");
      inputStyle = {
        display: "none"
      };
    }
    return (
      <div>
        <div className="lol" style={inputStyle}>
          <label>
            <p>
              <b> choose the chart: </b>
            </p>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Scatter Plots">Scatter Plots</option>
              <option value="Pie Charts">Pie Charts</option>
              <option value="Bar Charts">Bar Charts</option>
              <option value="Line charts">Line charts</option>
              <option value="candle">candle</option>
              <option value="Radialbar">Radialbar</option>
              <option value="Timeseries">Timeseries</option>
              <option value="polar">polar</option>
              <option value="radial">radial</option>
              <option value="indicator">indicator</option>
              <option value="Custome Circle">Custome Circle</option>
              <option value="Waterfall">Waterfall</option>
            </select>
          </label>
          {this.subComponent()}
          <p>
            {" "}
            you have choosed<b> {this.state.value}</b>
          </p>{" "}
        </div>
        <If condition={this.state.value === "Bar Charts"}>
          <Then>{this.state.display === "hid" && <Chart />}</Then>
          <ElseIf condition={this.state.value === "Pie Charts"}>
            {this.state.display === "hid" && <Pie />}
          </ElseIf>
          <ElseIf condition={this.state.value === "Line charts"}>
            {this.state.display === "hid" && <Line />}
          </ElseIf>
          <ElseIf condition={this.state.value === "Scatter Plots"}>
            {this.state.display === "hid" && <Scatterr />}
          </ElseIf>
          <ElseIf condition={this.state.value === "candle"}>
            {this.state.display === "hid" && <Cann />}
          </ElseIf>
          <ElseIf condition={this.state.value === "Radialbar"}>
            {this.state.display === "hid" && <Rad />}
          </ElseIf>
          <ElseIf condition={this.state.value === "Timeseries"}>
            {this.state.display === "hid" && <Ts />}
          </ElseIf>
          <ElseIf condition={this.state.value === "polar"}>
            {this.state.display === "hid" && <Polar />}
          </ElseIf>
          <ElseIf condition={this.state.value === "radial"}>
            {this.state.display === "hid" && <RAdi />}
          </ElseIf>
          <ElseIf condition={this.state.value === "indicator"}>
            {this.state.display === "hid" && <Ind />}
          </ElseIf>

          <ElseIf condition={this.state.value === "Custome Circle"}>
            {this.state.display === "hid" && <Cust />}
          </ElseIf>
          <ElseIf condition={this.state.value === "Waterfall"}>
            {this.state.display === "hid" && <Water />}
          </ElseIf>
        </If>

        <button value={this.state.display} onClick={this.callChart}>
          {" "}
          check
        </button>
      </div>
    );
  }
}
