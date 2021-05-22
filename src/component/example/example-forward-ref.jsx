import React from "react"
import {withRouter} from "react-router-dom";

function ForwardRef(props) {
    return (
        <div>forward</div>
    )
}
export default withRouter(ForwardRef)