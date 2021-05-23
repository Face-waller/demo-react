/*
useRef的作用：

一 是可以用来获取dom元素，或者class组件实例 。
二 react-hooks原理文章中讲过，创建useRef时候，会创建一个原始对象
只要函数组件不被销毁，原始对象就会一直存在
那么我们可以利用这个特性，来通过useRef保存一些数据。
 */

import React, {useRef} from "react";
import {withRouter} from "react-router-dom";

function UseRef(props) {
    const dom= useRef(null)
    const handlerSubmit = ()=>{
        /*  <div >表单组件</div>  dom 节点 */
        console.log(dom.current)
    }
    return <div>
        {/* ref 标记当前dom节点 */}
        <div ref={dom} >表单组件</div>
        <button onClick={()=>handlerSubmit()} >提交</button>
    </div>
}

export default withRouter(UseRef)