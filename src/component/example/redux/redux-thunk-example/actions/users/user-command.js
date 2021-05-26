import ActionTypes from 'src/component/example/redux/redux-thunk-example/actions/action-types'

const UserCommand = {
    addUser(inputUserName) {
        return (dispatch)=>{
            dispatch({
                type: ActionTypes.UPDATE_IS_LOADING,
                isLoading: true
            })
            setTimeout(()=>{
                dispatch({
                    type: ActionTypes.UPDATE_USER_ADD,
                    inputUserName
                });
                dispatch({
                    type: ActionTypes.UPDATE_IS_LOADING,
                    isLoading: false
                })
            },2000);
        }
    }
}

export default UserCommand
