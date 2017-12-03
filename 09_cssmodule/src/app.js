import React from "react";
import ReactDOM from "react-dom";

import "./common/style/main.css";
// import style2 from "./common/style/app.css";

import "font-awesome/css/font-awesome.css";

import S from "./main.css";

ReactDOM.render(
    <div>
        <p className="fa fa-rocket ot">
            <span className={S.ot}>aaa</span>
        </p>
    </div>,
    document.getElementById("root")
);