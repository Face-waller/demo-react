/*
官方文档:
与 componentDidMount 或 componentDidUpdate 不同
使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快
大多数情况下，effect 不需要同步地执行。
在个别情况下（例如测量布局），有单独的 useLayoutEffect Hook 供你使用，其 API 与 useEffect 相同。
 */

import React, {useLayoutEffect, useRef} from "react";
import {withRouter} from "react-router-dom";

function UseLayoutEffect(props) {
    const target = useRef()
    useLayoutEffect(() => {
        target.current.style.color = 'red'
    }, []);
    return (
        <div >
            <span ref={ target } className="animate">你好</span>
        </div>
    )
}

export default withRouter(UseLayoutEffect)