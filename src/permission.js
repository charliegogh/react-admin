import { useLocation, Navigate } from 'react-router-dom'
import { getToken } from './utils/auth'
import { selectApp } from './app/appSlice'
import { useAppSelector } from './app/hooks'
/*
  高阶组件HOC
    本质上是一个函数，接受组件作为参数，返回一个新组件
*/
function permission(WrappedComponent) {
  WrappedComponent.displayName = 'permission'
  return () => {
    const state = useAppSelector(selectApp)
    // ==> 只要状态数据发生了改变, 当前组件函数就会自动重新执行
    console.log(state, '~~~~~')
    const { pathname } = useLocation()
    const token = getToken()
    if (token) {
      if (['/login', '/'].includes(pathname)) {
        return <Navigate to='/home' />
      }
      return <WrappedComponent />
    } else {
      if (pathname === '/login') {
        return <WrappedComponent />
      }
      return <Navigate to='/login' />
    }
  }
}
export default permission
