import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import Dropd from "./dropdown";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
export default class AddRemoveLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    //dropdownVisible: false

    // dropdown.handleChange = dropdown.handleChange.bind(dropdown);

    this.state = {
      items: [0, 1, 2, 3, 4, 5].map(function (i, key, list) {
        return {
          i: i.toString(),
          x: i * 2,
          y: 0,
          w: 2,
          h: 2.5
        };
      }),
      newCounter: 6
    };

    this.onAddItem = this.onAddItem.bind(this);
  }

  createElement(el) {
    const i = el.add ? "+" : el.i;
    return (
      // in line  38  here the 0 and 1 Appear in cards

      <div key={i} data-grid={el}>
        <span>
          {" "}
          <span className="remove" onClick={this.onRemoveItem.bind(this, i)}>
            Delete
          </span>
          <p>card number: {i} </p>
        </span>
        <div>
          <Dropd />
        </div>
      </div>
    );
  }

  onAddItem() {
    console.log("adding", "n" + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: " " + this.state.newCounter,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2.5
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1
    });
  }

  onRemoveItem(i) {
    console.log("removing", i);
    this.setState({ items: _.reject(this.state.items, { i: i }) });
  }

  render() {
    return (
      <div>
        <button onClick={this.onAddItem}>Add Item</button>

        <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          {...this.props}
        >
          {_.map(this.state.items, (el) => this.createElement(el))}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

if (process.env.STATIC_EXAMPLES === true) {
  import("../test-hook.jsx").then((fn) => fn.default(AddRemoveLayout));
}
