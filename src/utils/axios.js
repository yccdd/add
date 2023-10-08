import axios from 'axios';

const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
  timeout: 15000,
});
// 请求拦截器(请求发出去了，请求没发出去)

http.interceptors.request.use(
  (config) =>
    // config.baseURL("http://baidu.com")
    config,

  // (error)=>
  // {
  //     console.log(error)

  // }
);

// 响应拦截器(收到响应，没有收到响应)

http.interceptors.response.use(
  (response) => {
    console.log(response);

    return response.data;
  },
  (error) => {
    console.log(error);
  },
);

export default http;
