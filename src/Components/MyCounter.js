/*//?question 1
Create a class component called "MyCounter.js" that depends on another
class component, "CounterDisplayer.js". "MyCounter.js" keeps track of the
click count value in the state, and this is where you initialize your state,
which holds the click counts.
Create a function named "allClicksCounter()" in "MyCounter.js" that will
update or increase your state by one anytime the button in the
"MyCounter.js" component is clicked.
Hint:
● The primary function of "CounterDisplayer.js" is to show how many
times the button in the "MyCounter.js" component has been clicked.
That is, you need to use props to pass the updated click data from
"MyCounter.js" to "CounterDisplayer.js".
● Display the number of clicks exactly below the button.

*/

import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";

export default class MyCounter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      evenCount: 0,
    };
  }

  allClicksCounter = () => {
    this.setState((prevState) => ({ counter: this.state.counter + 1 }));

    setTimeout(() => {
      if (this.state.counter % 2 === 0)
        this.setState((prevState) => ({
          evenCount: this.state.counter,
        }));
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.allClicksCounter}>Click</button>

        <CounterDisplayer numberOfClick={this.state.counter} />

        <EvenCounterDisplayer evenCount={this.state.evenCount} />
      </div>
    );
  }
}
