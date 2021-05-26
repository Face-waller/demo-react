/*
redux-thunk允许action为一个函数,
 */

import React from "react";
import {withRouter} from "react-router-dom";
import UserList from "src/component/example/redux/redux-thunk-example/users/user-list";

function ReduxThunkExample(props) {
    return <div>
        Redux-Thunk
        <UserList/>
    </div>
}

export default withRouter(ReduxThunkExample)