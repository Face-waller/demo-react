import { combineReducers } from 'redux'
import Users from 'src/component/example/redux/redux-saga-example/reducers/users'
import Common from "src/component/example/redux/redux-saga-example/reducers/common";

export default combineReducers({
    ...Users,
    ...Common,
});
