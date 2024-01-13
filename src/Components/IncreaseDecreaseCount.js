/*
Create a functional component called "IncreaseDecreaseCount.js''. 
There will be three buttons; a button to increase, a button to decrease, and a button to reset the click count values, and you will need to implement the useState() Hook to update the clicks.

Hint:
Right above the buttons, there will be a count displayer with an initial click value of 0. 

When the increase button is clicked, the value increases by one, when the decrease button is clicked, the value will decrease by one and when a button to reset is clicked, the value resets to the initial value, which is 0. 

Whenever any button is clicked, the change in the click value will be displayed on the count displayer.
*/
import React, { useState } from "react";

function IncreaseDecreaseCount() {
  // Use Array destructuring and useState
  const [count, setCount] = useState(0);

  const [evenCountcount, setEvenCount] = useState(0);

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Click count: {count}</h1>
      <button onClick={reset}>Reset count</button>
      <button onClick={(prevCount) => setCount(count + 1)}>
        Increase count
      </button>
      <button onClick={(prevCount) => setCount(count - 1)}>
        Decrease count
      </button>
    </div>
  );
}

export default IncreaseDecreaseCount;
