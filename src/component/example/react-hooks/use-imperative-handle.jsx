import React, {forwardRef, useImperativeHandle, useRef, useState} from "react";
import {withRouter} from "react-router-dom";

function Son (props,ref) {
    console.log(props)
    const inputRef = useRef(null)
    const [ inputValue , setInputValue ] = useState('')

    useImperativeHandle(ref,()=>{
        return {
            /* 声明方法用于聚焦input框 */
            onFocus() {
                inputRef.current.focus()
            },
            /* 声明方法用于改变input的值 */
            onChangeValue(value) {
                setInputValue(value)
            }
        }
    },[])

    return <div>
        <input
            placeholder="请输入内容"
            ref={inputRef}
            value={inputValue}
        />
    </div>
}

const ForwardSon = forwardRef(Son)

function UseImperativeHandle(props) {
    let inputValue = null
    const handlerClick = ()=> {
        const { onFocus , onChangeValue } = inputValue
        onFocus()
        onChangeValue('let us learn React!')
    }
    return <div style={{ marginTop:'50px' }} >
        <ForwardSon ref={node => inputValue = node} />
        <button onClick={handlerClick} >操控子组件</button>
    </div>
}

export default withRouter(UseImperativeHandle)