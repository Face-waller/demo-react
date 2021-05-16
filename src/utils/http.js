/*
* 配置axios
* */

import axios from 'axios'
import { message} from 'antd';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'; /*application/x-www-form-urlencoded*/
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;

const antMessage = (type, msg) => {
    let duration = 3
    switch (type) {
        case 'success':
            message.success(msg, duration);
            break;
        case 'error':
            message.error(msg, duration);
            break;
        case 'warning':
            message.warning(msg, duration)
            break
        default:
            message.info(msg, duration)
    }
};

//配置发送请求前的拦截器 可以设置token信息
axios.interceptors.request.use(config => {
        return config
    }, error => {
        return Promise.reject(error)
    }
);

// 配置响应拦截器
axios.interceptors.response.use(
    res => {
        if (res.data.code === -1) {
            if (res.message === "用户异常, 请重新登录") {
                antMessage('用户异常，请重新登录')
                setTimeout(function () {
                    window.location.href = "loginUser.html";
                }, 1000);
                return Promise.reject(res);
            }
        } else if (res.data && res.data.code !== 0 ) {
            antMessage('error', res.data.msg);
            return Promise.reject(res);
        }
        // 成功
        return Promise.resolve(res.data) // 这里直接返回data, 即接口返回的所有数据
    }, error => {
        console.log(error)
        antMessage('error', '请求异常')
        // 判断是否登录失效，按照实际项目的接口返回状态来判断
        return Promise.reject(error);
    }
)

export default axios