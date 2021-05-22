import React from "react";
import {withRouter} from "react-router-dom";

function NotFound(props) {
    return <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: 600}}>
        暂无此页面^_^
    </div>
}

export default withRouter(NotFound)