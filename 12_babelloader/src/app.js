import React from "react";
import ReactDOM from "react-dom";

let a = {
    a: 1,
    b: 2
};
console.log({...a, c:3});

ReactDOM.render(
    <div>hello world</div>,
    document.getElementById("root")
);