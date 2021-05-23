import React, {useState} from "react";
import {withRouter} from "react-router-dom";

function UseState(props) {
    /* number为此时state读取值 ，setNumber为派发更新的函数 */
    let [number, setNumber] = useState(0) /* 0为初始值 */
    return (<div>
        <span>{ number }</span>
        <button onClick={ ()=> {
            setNumber(number+1) /* 写法一 */
            setNumber(number=>number + 1 ) /* 写法二 */
            console.log(number) /* 这里的number是不能够即时改变的  */
        } } >num++</button>
    </div>
    )
}

export default withRouter(UseState)