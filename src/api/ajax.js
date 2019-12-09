import axios from 'axios'
import qs from 'qs';

// axios.defaults.baseURL = '/api';
// 是否添加请求头 // 全局请求头添加
// axios.defaults.headers.common['Authorization'] = '1234';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求发送前数据拦截拦截器   => 全局请求拦截
axios.interceptors.request.use(function(config) {
    /* TODOS使用store进行loading添加 */
    config.data = qs.stringify(config.data)
        // console.log('loading开始');
    return config;
}, function(error) {
    return Promise.reject(error);
})

// 请求成功数据拦截器      =>   全局请求拦截
axios.interceptors.response.use(function(response) {
    /* TODOS 使用store进行loading方法解除 */
    // console.log('loading结束');
    return response.data;
}, function(error) {
    return Promise.reject(error);
})


export default function({ params = null, url = '', type = 'get' }) {
    let data = (type == 'get' || type == 'delete') ? { params } : params;
    return new Promise((resolve, reject) => {
        axios[type](url, data).then(resolve).catch(reject)
    })
}