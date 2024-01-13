import React, { Component } from "react";

export default class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <p>Number of clicks: {this.props.numberOfClick}</p>
      </div>
    );
  }
}
