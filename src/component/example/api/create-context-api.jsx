import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";

const MyContext = React.createContext()

function ComponentC(){
    console.log('组件C渲染了',new Date())
    return <div>组件C</div>
}

function ComponentB(){
    /* 用 Consumer 订阅， 来自 Provider 中 value 的改变  */
    return <MyContext.Consumer>
        {
            (value) => <ComponentA  {...value} />
        }
    </MyContext.Consumer>
}

function ComponentA(props){
    const { name , mes } = props
    return <div>
        <div> 姓名： { name }  </div>
        <div> 想对大家说： { mes }  </div>
    </div>
}

function CreateContextApi(props) {
    const [ value , setValue] = React.useState({
        name:'alien',
        mes:'let us learn React '
    })
    useEffect(()=>{
        let timeout = setTimeout(()=>{
            setValue({
                name: '小李',
                mes: 'are you ok?'
            })
            clearTimeout(timeout)
        },3000)
    },[])
    return <div style={{ marginTop:'50px' }} >
        <MyContext.Provider value={value}  >
            <ComponentB />
            <ComponentC />
        </MyContext.Provider>
    </div>
}

export default withRouter(CreateContextApi)