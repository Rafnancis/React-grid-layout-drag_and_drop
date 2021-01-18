import React from "react";

export default class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Scatter Plots", x: "", y: "", val: "", labelss: "" };
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

  // <button onClick={this.enterinfo.bind(this)}> done </button>

  render() {
    return (
      <div>
        <label>
          <p>
            <b> choose the chart: </b>
          </p>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Scatter Plots">Scatter Plots</option>
            <option value="Pie Charts">Pie Charts</option>
            <option value="Bar Charts">Bar Charts</option>
            <option value="Bubble Charts">Bubble Charts</option>

            <option value="Configuration Options">Configuration Options</option>
            <option value="Responsive/Fluid Layouts">
              Responsive/Fluid Layouts
            </option>
            <option value="Uirevision in Plotly.react">
              Uirevision in Plotly.react
            </option>
            <option value="React plotly.js">React plotly.js</option>
            <option value="Analytical Apps with Dash">
              Analytical Apps with Dash
            </option>
            <option value="waterfall charts">waterfall charts</option>

            <option value="candlestick chart">candlestick chart</option>
            <option value="funnel and funnelarea charts">
              funnel and funnelarea charts
            </option>
            <option value="time series">time series</option>
          </select>
        </label>
        {this.subComponent()}
        <p>
          {" "}
          you have choosed<b> {this.state.value}</b>
        </p>{" "}
      </div>
    );
  }
}
