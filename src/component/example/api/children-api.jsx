/*
React.Children 提供了用于处理 this.props.children 不透明数据结构的实用方法。
 */

import React from "react";
import {withRouter} from "react-router-dom";

function Text(props) {
    return <div>hello,world</div>
}

function WarpComponent(props){
    console.log(props.children)
    // foreach
    React.Children.forEach(props.children, (item)=> console.log(item))
    // count
    console.log(`子组件总数量: => ${React.Children.count(props.children)}`)
    // only
    // 验证 children 是否只有一个子节点（一个 React 元素），如果有则返回它，否则此方法会抛出错误。
    // console.log(`是否只有一个子节点: => ${React.Children.only(props.children)}`)
    // map
    return React.Children.map(props.children, (item)=> item)
}

function ChildrenApi(props) {
    return <div style={{ marginTop:'50px' }} >
        <WarpComponent>
            {/*children不透明结构*/}
            { new Array(3).fill(0).map((n,index)=> <Text key={index} />) }
            <span>hello,world</span>
        </WarpComponent>
    </div>
}

export default withRouter(ChildrenApi)