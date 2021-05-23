import React from "react";
import {withRouter} from "react-router-dom";
import {SyncOutlined} from "@ant-design/icons";

const Lazy = React.lazy(()=> import('./lazy'))

function Suspense(props) {
    return <React.Suspense fallback={ <div className="icon" ><SyncOutlined  spin  /></div> }>
        <Lazy/>
    </React.Suspense>
}

export default withRouter(Suspense)