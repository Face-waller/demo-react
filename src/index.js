import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {message} from 'antd';
import 'antd/dist/antd.css';

import axios from 'src/utils/http'

import App from 'src/pages/app';
import {BrowserRouter} from "react-router-dom";

// import store from 'src/component/example/redux/redux-thunk-example/store'
import store from "src/component/example/redux/redux-saga-example/store";

import {Provider} from "react-redux";

// AntD 的消息弹窗配置
message.config({
    top: 100,
    duration: 2,
    maxCount: 3,
    rtl: true,
});

// 将axios加到Component原型链
React.Component.prototype.axios = axios;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
