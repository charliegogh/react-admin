import axios from "axios";
import qs from "qs";
const service = axios.create({
  baseUrl: "",
  withCredentials: true, // 允许携带 cookie
  timeout: 50000, // 请求超时时间
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
