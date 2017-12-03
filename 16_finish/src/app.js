import React from "react";
import ReactDOM from "react-dom";

import "font-awesome/css/font-awesome.css";

ReactDOM.render(
    <div className="test">
        <img src={require("./common/img/aaa.jpg")} width="500" alt=""/>
        <i className="fa fa-rocket"></i>
    </div>,
    document.getElementById("root")
);