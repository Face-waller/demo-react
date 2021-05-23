/*
getState: 当前时刻的 State，可以通过store.getState()拿到
subscribe: subscribe方法设置监听函数,Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数
dispatch: View 发出 Action 的唯一方法
 */
import React, {useState} from "react";
import {withRouter} from "react-router-dom";

import { createStore } from 'redux'
import reducer from "src/component/example/redux/redux-example/reducer";
import actions from "src/component/example/redux/redux-example/actions";

const store = createStore(reducer);

function ReduxExample(props) {
    const [value, setValue] = useState(0)
    store.subscribe(()=>{
        setValue(store.getState().count)
    })
    return <div>
        当前值: {value}
        <div style={{margin: 10}}>
            <button onClick={()=> store.dispatch(actions.increase())}>increase</button>
            <button onClick={()=> store.dispatch(actions.decrease())}>decrease</button>
        </div>
    </div>
}

export default withRouter(ReduxExample)