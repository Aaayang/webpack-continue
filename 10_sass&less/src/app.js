import React from "react";
import ReactDOM from "react-dom";

import "./common/style/main.less";
import aaa from "./main.less";

ReactDOM.render(
    <div>
        <p className="ot">
            <span className={aaa.ot}>aaa</span>
        </p>
    </div>,
    document.getElementById("root")
);