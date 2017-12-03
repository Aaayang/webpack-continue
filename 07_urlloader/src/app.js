import React from "react";
import ReactDOM from "react-dom";

import "./common/style/main.css";
import qsmy from "./common/img/qsmy.jpg";

const ayan = require("./common/img/ayan.png");

import test from "./common/img/test.gif";


ReactDOM.render(
    <div className="col-white">
        <img src={qsmy} width="300" alt="" />
        <img src={ayan} width="300" alt="" />
        <img src={test} alt=""/>
    </div>,
    document.getElementById("root")
);