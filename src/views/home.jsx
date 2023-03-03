import React, { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import { setTitle } from '../app/appSlice'
import { removeToken } from '../utils/auth'
export default function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    // const getData = async() => {
    //   const rs = await getAction('http://47.93.4.29:81/test/')
    // }
    // getData()
  })
  const handleUseSelector = () => {
    dispatch(setTitle(10))
  }
  const logOut = () => {
    removeToken()
    dispatch(setTitle(1))
  }
  return <div className='App'>
    <button onClick={() => handleUseSelector()}>测试useSelector钩子函数</button>
    <button onClick={() => logOut()}>退出登录</button>
  </div>
}

