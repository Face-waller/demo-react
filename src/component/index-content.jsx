import "src/component/index-menu.scss"
import React from "react";
import "./index-content.scss"
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import NotFound from "src/component/not-found";
import PureComponent from "src/component/example/component/pure-component";
import Memo from "src/component/example/component/memo";
import ForwardRef from "src/component/example/component/forward-ref";
import Lazy from "src/component/example/component/lazy";
import Suspense from "src/component/example/component/suspense"
import CreateElementApi from "src/component/example/api/create-element-api";
import CloneElementApi from "src/component/example/api/clone-element-api";
import CreateContextApi from "src/component/example/api/create-context-api";
import CreateRefApi from "src/component/example/api/create-ref-api";
import ChildrenApi from "src/component/example/api/children-api";
import UseState from "src/component/example/react-hooks/use-state";
import UseEffect from "src/component/example/react-hooks/use-effect";
import UseMemo from "src/component/example/react-hooks/use-memo";
import UseCallback from "src/component/example/react-hooks/use-callback";
import UseRef from "src/component/example/react-hooks/use-ref";
import UseLayoutEffect from "src/component/example/react-hooks/use-layout-effect";
import UseReducer from "src/component/example/react-hooks/use-reducer";
import UseContext from "src/component/example/react-hooks/use-context";
import UseImperativeHandle from "src/component/example/react-hooks/use-imperative-handle";

function IndexContent (props) {
    return (
        <div className='index-content'>
            <Switch>
                <Route path={`/index/use-imperative-handle`} component={UseImperativeHandle}/>
                <Route path={`/index/use-context`} component={UseContext}/>
                <Route path={`/index/use-reducer`} component={UseReducer}/>
                <Route path={`/index/use-layout-effect`} component={UseLayoutEffect}/>
                <Route path={`/index/use-ref`} component={UseRef}/>
                <Route path={`/index/use-callback`} component={UseCallback}/>
                <Route path={`/index/use-memo`} component={UseMemo}/>
                <Route path={`/index/use-effect`} component={UseEffect}/>
                <Route path={`/index/use-state`} component={UseState}/>
                <Route path={`/index/children-api`} component={ChildrenApi}/>
                <Route path={`/index/create-ref-api`} component={CreateRefApi}/>
                <Route path={`/index/create-context-api`} component={CreateContextApi}/>
                <Route path={`/index/clone-element-api`} component={CloneElementApi}/>
                <Route path={`/index/create-element-api`} component={CreateElementApi}/>
                <Route path={`/index/404`} component={NotFound}/>
                <Route path={`/index/pure-component`} component={PureComponent}/>
                <Route path={`/index/memo`} component={Memo}/>
                <Route path={`/index/forward-ref`} component={ForwardRef}/>
                <Route path={`/index/lazy`} component={Lazy}/>
                <Route path={`/index/suspense`} component={Suspense}/>
                <Redirect to='/index/404'/>
            </Switch>
        </div>
    )
}

export default withRouter(IndexContent)