/**
 *  react 路由动态加载
 *  1. 直接加载
 *  2. react lazy 方式加载
 */
import { useRoutes, Navigate } from 'react-router-dom'
const modulesFiles = require.context('../views', false, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
const lazyLoad = (moduleName) => {
  const Module = modules[moduleName]
  // const Module = lazy(() => import(`../views/${moduleName}`));
  return <Module/>
}
export const routes = Object.keys(modules).map((i) => {
  return {
    path: '/' + i,
    element: lazyLoad(i)
  }
})
const Router = () => {
  return useRoutes([
    {
      path: '/',
      index: true,
      element: <Navigate to='/home'/>
    },
    ...routes
  ])
}
export default Router
