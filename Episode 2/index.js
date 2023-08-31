import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement
// (
//     "h1",
//     {id:"heading",},
//     "Hey React how are you"
// );
// console.log(heading); //object

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);

/*
<div id ="parent">
<div id = "child">
<h1?"hey i am a react h1 tag"</h1>
<h2?"hey i am a react h2 tag"</h2>
</div>

</div>
*/

const heading1 = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "hey i am a react h1 tag"),
      React.createElement("h2", {}, "hey i am a react h2 tag"),
    ]),
  
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "hey i am a react h1 tag"),
      React.createElement("h2", {}, "hey i am a react h2 tag"),
    ])
  ]
);
const root1 =  ReactDOM.createRoot(document.getElementById("root"))
root1.render(heading1);