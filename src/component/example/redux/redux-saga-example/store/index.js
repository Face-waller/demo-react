import { createStore , applyMiddleware ,compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from 'src/component/example/redux/redux-saga-example/reducers'
import rootSaga from "src/component/example/redux/redux-saga-example/sagas/index";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore( reducers, enhancer)
sagaMiddleware.run(rootSaga)

export default store
