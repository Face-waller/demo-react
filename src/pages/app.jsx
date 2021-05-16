import React, { Component } from 'react'
import {withRouter, Route, Switch, Redirect, } from "react-router-dom";
import "src/pages/app.scss"
import Index from "src/pages/index";
import newLogo from "src/static/images/newLogo.png"

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className='app'>
                <div className="header">
                    <img src={newLogo}  alt=""/>
                </div>
                <div className="placeholder" />
                <div className="content">
                    <Switch>
                        <Route path='/' component={Index} />
                        <Redirect to='/index' />
                    </Switch>
                </div>
                <div className="footer-spring"/>
                <div className="footer">react使用-番茄博客</div>
            </div>
        )
    }
}

export default withRouter(App)