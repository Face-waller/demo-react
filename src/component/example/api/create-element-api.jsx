import React from "react";
import {withRouter} from "react-router-dom";

function CreateElementApi(props) {
    return React.createElement(
        "div", { className: "box" },
            React.createElement(
                "div",
                { className: "item" },
                "\u751F\u547D\u5468\u671F"
            ),
            React.createElement(
                React.Fragment,
                null,
                " Flagment "
            ),
            "text\u6587\u672C"
    )
}

export default withRouter(CreateElementApi)
