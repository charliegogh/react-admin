import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from './appSlice'
// 配置reducer, 生成store
const store = configureStore({
  reducer: {
    app: appReducer
  }
})
// 默认暴露store
export default store
