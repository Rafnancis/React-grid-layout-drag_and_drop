import React from "react"; // index
import ReactDOM from "react-dom";
import ShowcaseLayout from "./ShowcaseLayout";

class ExampleLayout extends React.Component {
  constructor(props) {
    super(props);
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange(layout) {
    this.setState({ layout: layout });
  }
  render() {
    return (
      <div>
        <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
      </div>
    );
  }
}

const contentDiv = document.getElementById("root");
const gridProps = window.gridProps || {};
ReactDOM.render(React.createElement(ExampleLayout, gridProps), contentDiv);
