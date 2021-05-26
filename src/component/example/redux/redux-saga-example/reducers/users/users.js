import ActionTypes from 'src/component/example/redux/redux-thunk-example/actions/action-types'

const defaultState={
    userList: [],
    inputUser: {},
};
export default function Users(state = defaultState, action) {
    switch(action.type){
        case ActionTypes.USER_ADD:
            return {
                ...state,
                userList: state.userList.concat(action.inputUser.userName),
            };
        case ActionTypes.INPUT_USER:
            return {
                ...state,
                inputUser: action.inputUser,
            }
        default:
            return state;
    }
}