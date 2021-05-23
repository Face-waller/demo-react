import React from "react";
import {withRouter} from "react-router-dom";
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from "redux-saga"
const sagaMiddleware = createSagaMiddleware() // 创建了一个saga中间件实例

import rootSaga from './sagas'
import rootReducer from './reducer'

// 下边这句话和下边的两行代码创建store的方式是一样的
// const store = createStore(reducers,applyMiddlecare(middlewares))

const createStoreWithMiddleware = applyMiddleware(middlewares)(createStore)
const store = createStoreWithMiddleware(rootReducer)

sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({ type })

function ReduxSagaExample(props) {
    return <Counter
        value={store.getState()}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
        onIncrementAsync={() => action('INCREMENT_ASYNC')} />
}

export default withRouter(ReduxSagaExample)