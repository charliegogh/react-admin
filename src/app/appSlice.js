import { createSlice } from '@reduxjs/toolkit'
// 创建redux模块
export const appSlice = createSlice({
  name: 'app',
  // 初始化状态数据
  initialState: {
    title: '0'
  },
  // reducer函数 --> 会自动生成同步action函数
  reducers: {
    setTitle(state, action) {
      state.title = action.payload
    }
  }
})
// 暴露同步action
export const { setTitle } = appSlice.actions
// 暴露reducer函数
export const appReducer = appSlice.reducer
// 暴露用来获取数据的select函数
export const selectApp = (state) => state.app
