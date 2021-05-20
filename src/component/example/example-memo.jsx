import React, {memo, useState} from "react";
import {withRouter} from "react-router-dom";

function ExampleMemo(props) {
    const [num,setNum] = useState(1)
    const [number,setNumber] = useState(1)

    function TextMemo(props){
        console.log('子组件渲染')
        if(props)
            return <div>hello,world</div>
    }
    const controlIsRender = (pre,next)=>{
        debugger
        if(pre.number === next.number  ){ // number 不改变 ，不渲染组件
            return true
        }else if(pre.number !== next.number && next.number > 5 ) { // number 改变 ，但值大于5 ， 不渲染组件
            return true
        }else { // 否则渲染组件
            return false
        }
    }
    const NewTexMemo = memo(TextMemo,controlIsRender)

    return (
        <div>
            <div>
                改变num：当前值 { num }
                <button onClick={ ()=>setNum(num + 1) } >num++</button>
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
