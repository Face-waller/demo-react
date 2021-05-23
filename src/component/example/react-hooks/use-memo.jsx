/*
useMemo接受两个参数
第一个参数是一个函数，返回值用于产生保存值。
第二个参数是一个数组，作为dep依赖项，数组里面的依赖项发生变化，重新执行第一个函数，产生新的值。
 */

import React, {useEffect, useMemo, useState} from "react";
import {withRouter} from "react-router-dom";

function Test1(props) {
    const markString = useMemo(()=>{
        console.log(`Test1的useMemo的markString计算了，只有我的props.markString改变，我才重新计算`)
        return props.markString + `---> Test组件 ---> ${new Date()}`
    },[ props.markString ]) // 只有 props.number 改变的时候，重新计算number的值。

    /* 只有当props中，list列表改变的时候，子组件才渲染 */
    const  goodListChild = useMemo(()=> <Children1 list={ props.list } /> ,[ props.list ])

    return <div>
        Test1组件props的markString值:  {markString}
        <div style={{ border: '1px solid purple', margin: '10px 0' }}>
            <div>3.减少子组件渲染:</div>
            {goodListChild}
        </div>
    </div>
}

function Children1(props) {
    console.log('Children1组件渲染了,只有我的props.list改变,我才重新渲染')
    return <div>
        Children1组件,list为: {props.list.toString()}
    </div>
}

function UseMemo(props) {
    const [markString, setMarkString] = useState('initial markString')

    const [list,setList] = useState([1,2,3])

    const [selectList,setSelectList] = useState([
        {patentName: '小李'},{patentName: '小王'},{patentName: '小周'}
    ])

    useEffect(()=>{
        setTimeout(()=>{
            // setMarkString('first markString change')
            // setList([4,5,6])
            setSelectList([{patentName: '小赵'},{patentName: '小王'},{patentName: '小周'}])
        },3000)
    },[])

    return <div>
        <div style={{ border: '1px solid green', marginBottom: 10 }}>
            <div>1. 缓存一些值，避免重新执行上下文</div>
            <Test1 markString={markString} list={list} />
        </div>
        <div style={{ border: '1px solid yellow', marginBottom: 10 }}>
            <div>2.减少不必要的dom循环:</div>
            {
                useMemo(() => (
                <div>{
                    selectList.map((i, v) => (
                        <span
                            key={v} >
                  {i.patentName}
              </span>
                    ))}
                </div>
            ), [selectList])
            }
        </div>
    </div>
}

export default withRouter(UseMemo)