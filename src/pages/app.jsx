import React, { Component } from 'react'
import {withRouter, Route, Switch, Redirect, } from "react-router-dom";
import "src/pages/app.css"
import Index from "src/pages/index";

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
            <div>
                <div className="header">
                    <div onClick={()=>{this.goIndex()}} className="logo-ico" />
                </div>
                <div className="placeholder" />
                <div className="content">
                    <Switch>
                        <Route path='/' component={Index} />
                        <Redirect to='/index' />
                    </Switch>
                </div>

                <div className="footer">友情链接</div>
            </div>
        )
    }
}

export default withRouter(App)