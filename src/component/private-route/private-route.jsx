import React, {Component} from "react";
import { Route, Redirect} from  'react-router-dom'

import {message} from "antd";

export default class PrivateRoute extends Component{

    componentDidMount() {
        console.log('PrivateRoute 组件挂载了 : ', (new Date()).valueOf())
        let {component:Component, ...rest} = this.props
        let authed = true
        if (!authed) {
            // 权限不通过，将要访问的地址存入sessionStorage，以便成功登录后跳转
            sessionStorage.setItem('redirectPath', !rest.path === false ? (rest.path) : encode('/index'))
            message.warning('未登录')
        }
    }

    render() {
        let {component:Component, ...rest} = this.props
        let authed = true
        return (
            <Route
                {...rest}
                render = {(props) => authed === true
                    ? <Component {...props} />
                    : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
                }
            />
        )
    }
}