/*
 * react不允许ref通过props传递，
 * 因为组件上已经有 ref 这个属性,在组件调和过程中，已经被特殊处理，
 * forwardRef出现就是解决这个问题，
 * 把ref转发到自定义的forwardRef定义的属性上，让ref，可以通过props传递。
 */

import React,{useEffect, useState} from "react";
import {withRouter} from "react-router-dom";

// 孙组件
function GrandChildren (props){
    const { grandRef } = props
    return <div className='son'>
        <div> i am alien </div>
        <span ref={grandRef} >这个是想要获取元素</span>
    </div>
}

// 子组件
function Son(props){
    return <div className='father'>
        <GrandChildren grandRef={props.grandRef}  />
    </div>
}

const NewSon = React.forwardRef((props,ref)=><Son grandRef={ref}  {...props} />  )

// 父组件
function ForwardRef(props){
    const [node,setNode] = useState(null)
    useEffect(()=>{
        console.log(node)
    },[node])
    return <div className='grandfather'>
        <NewSon ref={(node)=> setNode(node) } />
    </div>
}

export default withRouter(ForwardRef)