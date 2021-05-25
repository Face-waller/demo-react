import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/component/example/redux/react-redux-example/reducer';

import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
const loggerMiddleware = createLogger({ collapsed: true });

/*
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension(): f=>f    //调用chrome的redux插件
const store = createStore(
    reducer,
    compose(
    applyMiddleware(thunk),
    reduxDevtools
))
*/


const store = createStore(
    reducer,
    compose(
        applyMiddleware(loggerMiddleware),
        composeWithDevTools()
    )
);

export default store;