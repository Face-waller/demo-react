import { combineReducers } from 'redux'
import Users from 'src/component/example/redux/redux-thunk-example/reducers/users'

export default combineReducers({
    ...Users
});