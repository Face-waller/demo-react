/*
React.memo 接受两个参数，
第一个参数原始组件本身，
第二个参数，可以根据一次更新中props是否相同决定原始组件是否重新渲染。
是一个返回布尔值，true 证明组件无须重新渲染，false证明组件需要重新渲染
这个和类组件中的shouldComponentUpdate()正好相反 。
 */

import React, {memo, useState} from "react";
import {withRouter} from "react-router-dom";

function TextMemo(props){
    let num = props.num
    let number = props.number
    console.log(`子组件渲染 num: ${num}, number: ${number}`)
    if(props)
        return <div>hello,world</div>
}
const controlIsRender = (pre,next)=>{
    if(pre.number === next.number  ){ // number 不改变 ，不渲染组件
        return true
    }else return pre.number !== next.number && next.number > 5;
}
const NewTexMemo = memo(TextMemo,controlIsRender)

function ExampleMemo(props) {
    const [num,setNum] = useState(1)
    const [number,setNumber] = useState(1)
    console.log('组件渲染',num)
    return (
        <div>
            <div>
                改变num：当前值 { num }
                <button onClick={ ()=>setNum(num + 1) } >num++</button>
                <button onClick={ ()=>setNum(2) } >设置为2</button>

                <button onClick={ ()=>setNum(num - 1) } >num--</button>
            </div>
            <div>
                改变number： 当前值 { number }
                <button onClick={ ()=>setNumber(number + 1) } > number ++</button>
                <button onClick={ ()=>setNumber(number - 1) } > number -- </button>
            </div>
            <NewTexMemo num={ num } number={number}  />
        </div>
    )
}

export default withRouter(ExampleMemo)
