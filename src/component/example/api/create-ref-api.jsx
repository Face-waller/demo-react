/*
createRef可以创建一个 ref 元素，附加在react元素上。
个人觉得createRef这个方法，很鸡肋
 */

import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";

function CreateRefApi(props) {
    const [node,setNode] = useState(React.createRef())
    // const node = React.useRef(null)
    useEffect(()=>{
        console.log(node)
    },[node])
    return <div ref={node} > my name is alien </div>
}

export default withRouter(CreateRefApi)