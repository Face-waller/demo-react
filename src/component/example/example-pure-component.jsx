/*
纯组件PureComponent会浅比较，props和state是否相同，来决定是否重新渲染组件。
所以一般用于性能调优，减少render次数。
 */

import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";

function ExamplePureComponent(props) {
    const [data,setData] = useState({
        name: 'alien',
        age: 28,
    })
    const handlerClick = (mark)=>{
        switch (mark) {
            case '浅拷贝':{
                data.age ++
                setData(data)
                break
            }
            case '深拷贝':{
                data.age ++
                setData({...data})
                break;
            }
        }
    }
    return (
        <div className="box" >
            <div className="example1" >
                <div> 你的姓名是: { data.name } </div>
                <div> 年龄： { data.age  }</div>
                <button onClick={ handlerClick.bind(this,'浅拷贝') } >age++浅拷贝</button>
                <button onClick={ handlerClick.bind(this,'深拷贝')}>age++深拷贝</button>
            </div>
        </div>
    )
}

export default withRouter(ExamplePureComponent)