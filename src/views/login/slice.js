import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setToken, getToken } from '@/utils/auth'
const initialState = {
  token: getToken()
}
import { postAction } from '@/api'
import { removeToken } from '@/utils/auth'
// 登陆
export const loginAsync = createAsyncThunk('user/loginAsync', (params) =>
  postAction('/loginPc', params)
)
// 获取用户信息
export const getUserInfoAsync = createAsyncThunk(
  'user/getUserInfoAsync',
  () => postAction('/getUserInfo')
)
const userSlice = createSlice({
  name: 'user',
  initialState,
  // 配置同步action对应的reducer => 同步action会自动生成
  reducers: {
    setToken: (state, action) => {
      const token = action.payload
      state.token = token
      setToken(token)
    },
    logout: (state, action) => {
      state.token = undefined
      state.userInfo = null
      removeToken()
    }
  },
  // 接口更适合在这处理
  extraReducers(builder) {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.token = action.payload.msg
        setToken(state.token)
      })
      .addCase(getUserInfoAsync.fulfilled, (state, action) => {
        const res = action.payload
        if (res.code === 200) {
          const { data } = res
          state.userInfo = data.sysUser
        }
      })
  }
})
// 暴露同步action
export const { logout } = userSlice.actions
// 暴露reducer
export const userReducer = userSlice.reducer
// 暴露用来获取数据的select函数
export const selectUser = (state) => state.user
