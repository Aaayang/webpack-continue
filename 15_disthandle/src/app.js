import React from "react";
import ReactDOM from "react-dom";

import "font-awesome/css/font-awesome.css";


ReactDOM.render(
    <div>
        <img src={require("./common/img/ayan.png")} width="500" alt=""/>
        <i className="fa fa-rocket"></i>
    </div>,
    document.getElementById("root")
);