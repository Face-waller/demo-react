/*
useEffect可以弥补函数组件没有生命周期的缺点。
我们可以在useEffect第一个参数回调函数中，做一些请求数据，事件监听等操作
第二个参数作为dep依赖项，当依赖项发生变化，重新执行第一个函数。
useEffect可以用作事件监听，还有一些基于dom的操作。
别忘了在useEffect第一个参数回调函数，返一个函数用于清除事件监听等操作。
 */

import React, {useEffect, useRef, useState} from "react";
import {withRouter} from "react-router-dom";

/* 模拟数据交互 */
function getUserInfo(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                name:'小乔',
                age:16,
            })
        },1000)
    })
}

function UseEffect(props) {
    const [ userMessage , setUserMessage ] = useState({})
    const div= useRef()
    const [number, setNumber] = useState(0)
    /* 模拟事件监听处理函数 */
    const handleResize =()=>{
        console.log('resize')
    }
    useEffect(()=>{
        /* 请求数据 */
        getUserInfo().then(res=>{
            setUserMessage(res)
        })
        /* 操作dom  */
        console.log(div.current) /* div */
        /* 事件监听等 */
        window.addEventListener('resize', handleResize)
        /*
        只有当props->number改变的时候 ,useEffect副作用函数重新执行
        如果此时数组为空[]，证明函数只有在初始化的时候执行一次相当于componentDidMount
        */
    },[ number ])
    return (
        <div ref={div} >
            <span>{ userMessage.name }</span>
            <span>{ userMessage.age }</span>
            <div onClick={ ()=> setNumber(1) } >{ number }</div>
        </div>
    )
}

export default withRouter(UseEffect)