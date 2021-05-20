const add = (count) => {
    return (dispatch) => {
        (() => {
            console.log('123',count)
            dispatch({
                type : 'addCount',
                count
            })
        })()
    }
}

const reduce = (count) => {
    return (dispatch) => {
        (() => {
            dispatch({
                type : 'reduceCount',
                count
            })
        })()
    }
}

export {
    add,
    reduce
}