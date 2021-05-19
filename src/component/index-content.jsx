import "src/component/index-menu.scss"

import React, {useEffect} from "react";

import "./index-content.scss"
import {useRouteMatch} from "react-router";
import examplePureComponent from "src/component/example/example-pure-component";
import {Route, Switch} from "react-router-dom";

function IndexContent (props) {

    let match = useRouteMatch();

    useEffect(()=>{

    },[])

    return (
        <div className='index-content'>
            <Switch>
                <Route path={`${props.match.path}/pure`} component={examplePureComponent}/>
            </Switch>
        </div>
    )
}

export default IndexContent