import "src/component/index-menu.scss"
import React from "react";
import "./index-content.scss"
import {Route, Switch, withRouter} from "react-router-dom";
import ExamplePureComponent from "src/component/example/example-pure-component";
import ExampleMemo from "src/component/example/example-memo";
function IndexContent (props) {
    console.log(props)
    return (
        <div className='index-content'>
            <Switch>
                <Route path={`/index/pure-component`} component={ExamplePureComponent}/>
                <Route path={`/index/memo`} component={ExampleMemo}/>
            </Switch>
        </div>
    )
}

export default withRouter(IndexContent)