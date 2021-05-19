import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";

function examplePureComponent(props) {
    const [data,setData] = useState({
        name: 'alien',
        age: 28,
    })
    const handlerClick = ()=>{
        data.age ++
        setData(data)
    }
    return (
        <div className="box" >
            <div className="show" >
                <div> 你的姓名是: { data.name } </div>
                <div> 年龄： { data.age  }</div>
                <button onClick={ handlerClick } >age++</button>
            </div>
        </div>
    )
}

export default withRouter(examplePureComponent())