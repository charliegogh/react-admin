import { useLocation, Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { selectUser, getUserInfoAsync } from './views/login/slice'
import { Spin } from 'antd'
/*
  高阶组件HOC
    本质上是一个函数，接受组件作为参数，返回一个新组件
*/
function permission(WrappedComponent) {
  WrappedComponent.displayName = 'permission'
  return () => {
    // 只要状态数据发生了改变, 当前组件函数就会自动重新执行
    const { token, userInfo } = useAppSelector(selectUser)
    const { pathname } = useLocation()
    const dispatch = useAppDispatch()
    if (token) {
      if (['/login', '/'].includes(pathname)) {
        return <Navigate to='/home' />
      }
      // 已登录
      if (userInfo && Object.keys(userInfo).length > 0) {
        return <WrappedComponent />
      }
      dispatch(getUserInfoAsync())
      // loading
      return <Spin size='large' />
    } else {
      if (pathname === '/login') {
        return <WrappedComponent />
      }
      return <Navigate to='/login' />
    }
  }
}
export default permission
