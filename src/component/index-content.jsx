import "src/component/index-menu.scss"
import React from "react";
import "./index-content.scss"
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import NotFound from "src/component/not-found";
import ExamplePureComponent from "src/component/example/example-pure-component";
import ExampleMemo from "src/component/example/example-memo";
import ForwardRef from "src/component/example/example-forward-ref";
import Lazy from "src/component/example/example-lazy";
import Suspense from "src/component/example/example-suspense"
import CreateElementApi from "src/component/example/example-create-element-api";
import CloneElementApi from "src/component/example/example-clone-element-api";
import CreateContextApi from "src/component/example/example-create-context-api";
import CreateRefApi from "./example/example-create-ref-api";

function IndexContent (props) {
    return (
        <div className='index-content'>
            <Switch>
                <Route path={`/index/create-ref-api`} component={CreateRefApi}/>
                <Route path={`/index/create-context-api`} component={CreateContextApi}/>
                <Route path={`/index/clone-element-api`} component={CloneElementApi}/>
                <Route path={`/index/create-element-api`} component={CreateElementApi}/>
                <Route path={`/index/404`} component={NotFound}/>
                <Route path={`/index/pure-component`} component={ExamplePureComponent}/>
                <Route path={`/index/memo`} component={ExampleMemo}/>
                <Route path={`/index/forward-ref`} component={ForwardRef}/>
                <Route path={`/index/lazy`} component={Lazy}/>
                <Route path={`/index/suspense`} component={Suspense}/>
                <Redirect to='/index/404'/>
            </Switch>
        </div>
    )
}

export default withRouter(IndexContent)