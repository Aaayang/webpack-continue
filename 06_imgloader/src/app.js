import React from "react";
import ReactDOM from "react-dom";

import "./common/style/main.css";
import qsmy from "./common/img/qsmy.jpg";

ReactDOM.render(
    <div className="col-white">
        <img src={qsmy} alt=""/>
    </div>,
    document.getElementById("root")
);