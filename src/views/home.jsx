import React, { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import { logout } from './login/slice'
import { removeToken } from '@/utils/auth'
export default function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    // const getData = async() => {
    //   const rs = await getAction('http://47.93.4.29:81/test/')
    // }
    // getData()
  })
  const handleUseSelector = () => {
  }
  const logOut = () => {
    dispatch(logout())
  }
  return <div className='App'>
    <button onClick={() => logOut()}>退出登录</button>
  </div>
}

