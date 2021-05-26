import ActionTypes from 'src/component/example/redux/redux-saga-example/actions/action-types'

const defaultState={
    isLoading: false,
};
export default function Common(state = defaultState, action) {
    switch(action.type){
        case ActionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        default:
            return state;
    }
}