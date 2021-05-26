import React, {useContext} from 'react'
import {withRouter, Route, Switch, Redirect, } from "react-router-dom";
import "src/pages/app.scss"
import Index from "src/pages/index";
import logo from "src/static/images/logo.png"
import {Spin} from "antd";
import {connect} from "react-redux";

function App(props) {
    const {isLoading} = props
    return (
        <div className='app'>
            {
                isLoading ?
                <div className='loading-box'>
                    <Spin />
                </div>
                : null
            }
            <div className="header">
                <img src={logo}  alt=""/>
            </div>
            <div className="placeholder" />
            <div className="content">
                <Switch>
                    <Route path='/index' component={Index} />
                    <Redirect to='/index' />
                </Switch>
            </div>
            <div className="footer-spring"/>
            <div className="footer">react使用-番茄博客</div>
        </div>
    )
}

function mapSTP(store) {
    return {
        isLoading: store.common.isLoading
    }
}

export default withRouter(connect(mapSTP)(App))