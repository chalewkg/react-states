/*//? 4 Question 
Create a simple click counter app using React Hooks. You will need a functional component
called "UseEffectForTitle.js''. 

There will be one button and right below the button, there will be a count displayer with an initial click value of 0. 
When this button is clicked, the click value will increase by one and the displayer will show the changed count value. You will need to implement the useState() Hook to update the click values. 

When the button is clicked and the click value changes, you will need to change the document’s title to show
the count value as well.

Basically, the change in the document’s title is a side-effect to the
change in the count value due to the button’s click. 

Hint: You will need to use useEffect() to
write the logic/function that will change the document’s title to the current value of the
click count.

● When the component is rendered for the first time (or when it is mounted), display
on the screen an alert text that says “Component is mounted”. Hint: You will need
to use the useEffect() Hook to show the alert message and the message should
display only when the component is mounted, not every time the button is clicked.

*/

import React from "react";

import { useState, useEffect } from "react";

export default function UseEffectForTitle() {
  const [count, setCount] = useState(0);

  let clicked = () => {
    setCount((count) => count + 1);
  };

  //component did update
  useEffect(() => {
    // we can use if condition to make it happen once
    if (count == 0) alert("Component is mounted");

    document.title = `Count: ${count}`;
  }, [count]);

  // //component did mount
  // useEffect(() => {
  //   alert("Component is mounted");

  //   //will unmount
  //   // return () =>{alert("you have successfully logged out")}
  // }, []);

  return (
    <div>
      <button onClick={clicked}>Click</button>

      <p>Click Value: {count}</p>
    </div>
  );
}
