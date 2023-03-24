import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./appSlice";
import { userReducer } from "@/views/login/slice";
// 配置reducer, 生成store
const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
});
// 默认暴露store
export default store;
