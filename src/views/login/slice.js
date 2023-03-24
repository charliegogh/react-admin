import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setToken, getToken } from "@/utils/auth";
const initialState = {
  token: getToken(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  // 配置同步action对应的reducer => 同步action会自动生成
  reducers: {
    setToken: (state, action) => {
      const token = action.payload;
      state.token = token;
      setToken(token);
    },
  },
});
// 暴露reducer
export const userReducer = userSlice.reducer;
// 暴露用来获取数据的select函数
export const selectUser = (state) => state.user;
