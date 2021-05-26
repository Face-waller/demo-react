import ActionTypes from 'src/component/example/redux/redux-saga-example/actions/action-types'

const defaultState={
    userList: [],
    inputUserName: '',
};
export default function Users(state = defaultState, action) {
    switch(action.type){
        case ActionTypes.SET_USER_ADD:
            return state
        case ActionTypes.UPDATE_USER_ADD:
            return {
                ...state,
                userList: state.userList.concat(action.inputUserName),
            };
        case ActionTypes.SET_INPUT_USER:
            return state;
        case ActionTypes.UPDATE_INPUT_USER:
            return {
                ...state,
                inputUserName: action.inputUserName,
            }
        default:
            return state;
    }
}