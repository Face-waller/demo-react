import "src/component/index-menu.scss"

import React, {useEffect, useState} from "react";

import "./index-content.scss"
import {Route, Switch} from "react-router-dom";
import {useRouteMatch} from "react-router";

import {examplePureComponent} from "src/component/example/example-pure-component";

function IndexContent (props) {

    let match = useRouteMatch();

    useEffect(()=>{

    },[])

    return (
        <div className='index-content'>
            <Switch>
                <Route path={`${match.path}/abc`} component={examplePureComponent} />
            </Switch>
        </div>
    )
}

export default IndexContent