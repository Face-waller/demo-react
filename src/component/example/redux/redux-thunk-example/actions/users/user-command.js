import ActionTypes from 'src/component/example/redux/redux-thunk-example/actions/action-types'

export default class UserCommand {
    static addUser(inputUser){
        return (dispatch)=>{
            dispatch({
                type: ActionTypes.SET_IS_LOADING,
                isLoading: true
            })
            setTimeout(()=>{
                dispatch({
                    type: ActionTypes.USER_ADD,
                    inputUser
                });
                dispatch({
                    type: ActionTypes.SET_IS_LOADING,
                    isLoading: false
                })
            },2000);
        }
    }
}