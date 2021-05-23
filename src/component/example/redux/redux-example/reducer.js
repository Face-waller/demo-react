import defaultStatus from "src/component/example/redux/redux-example/default-status";

const reducer = (state = defaultStatus, action) => {  // ----------> ⑴
    switch (action.type){
        case 'INCREASE': return {count: state.count + 1};
        case 'DECREASE': return {count: state.count - 1};
        default: return state;
    }
}

export default reducer