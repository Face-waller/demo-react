const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ],
    number: 0
}
export default (state = defaultState,action)=>{
    switch (action.type) {
        case 'addCount':
            return {...state,number : action.count+1}
        case 'reduceCount':
            return {...state,number : action.count-1}
        default:
            return state
    }
}