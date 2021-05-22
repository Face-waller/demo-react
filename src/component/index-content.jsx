import "src/component/index-menu.scss"
import React from "react";
import "./index-content.scss"
import {Route, Switch, withRouter} from "react-router-dom";
import ExamplePureComponent from "src/component/example/example-pure-component";
import ExampleMemo from "src/component/example/example-memo";
import ForwardRef from "src/component/example/example-forward-ref";
function IndexContent (props) {
    return (
        <div className='index-content'>
            <Switch>
                <Route path={`/index/pure-component`} component={ExamplePureComponent}/>
                <Route path={`/index/memo`} component={ExampleMemo}/>
                <Route path={`/index/forward-ref`} component={ForwardRef}/>

            </Switch>
        </div>
    )
}

export default withRouter(IndexContent)