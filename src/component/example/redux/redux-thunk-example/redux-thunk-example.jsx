import React from "react";
import {withRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store from "src/component/example/redux/redux-thunk-example/store";
import UserList from "src/component/example/redux/redux-thunk-example/users/user-list";

function ReduxThunkExample(props) {
    return <Provider store={store}>
        <UserList/>
    </Provider>
}

export default withRouter(ReduxThunkExample)