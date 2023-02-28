import axios from "axios";
import qs from "qs";
const service = axios.create({
  baseURL: "",
  withCredentials: true, // 允许携带 cookie
  timeout: 50000, // 请求超时时间
  transformRequest: [
    function (data, config) {
      // 在请求之前对data传参进行格式转换
      data = qs.stringify(data); // 请求参数序列化
      // 如果后台接收形式为json对象
      if (config["Content-Type"] === "application/json;charset=UTF-8") {
        data = JSON.stringify(data);
      }
      return data;
    },
  ],
});
// request拦截器   请求拦截器   可对请求参数信息做统一处理
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// respone拦截器   响应拦截器
service.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    const errMsg = error.toString();
    const code = errMsg.substr(errMsg.indexOf("code") + 5);
    switch (code) {
      case "401":
        break;
      case "404":
        break;
      default:
        break;
    }
    if (error.message.includes("timeout")) {
    }
    return Promise.reject(error);
  }
);
// post get 请求
const fetch = (method, url, data = {}, config) => {
  config = config || {};
  config.method = method;
  config.url = url;
  method.toLocaleLowerCase() === "get"
    ? (config["params"] = data)
    : method.toLocaleLowerCase() === "delete"
    ? (config["params"] = data)
    : (config["data"] = data);
  return service(config).then(function (res) {
    return res.data;
  });
};
export function getAction(url, parameter, config) {
  return fetch("get", url, parameter, config);
}

export function postAction(url, parameter, config) {
  return fetch("post", url, parameter, config);
}
