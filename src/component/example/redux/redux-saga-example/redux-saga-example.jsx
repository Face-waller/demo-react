import React from "react";
import {withRouter} from "react-router-dom";
import UserList from "src/component/example/redux/redux-saga-example/users/user-list";

function ReduxSagaExample(props) {
    return <div>
        Redux-Saga-Example
        <UserList/>
    </div>
}

export default withRouter(ReduxSagaExample)
