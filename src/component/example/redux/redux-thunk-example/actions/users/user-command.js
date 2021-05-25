import ActionTypes from 'src/component/example/redux/redux-thunk-example/actions/action-types'

export default class UserCommand {
    static addUser(inputUser){
        return (dispatch)=>{
            setTimeout(()=>{
                dispatch({
                    type: ActionTypes.USER_ADD,
                    inputUser
                });
            },2000);
        }
    }
}