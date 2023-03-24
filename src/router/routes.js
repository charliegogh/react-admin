import { lazy, Suspense } from 'react'
const Login = lazy(() => import('@/views/login'))
const Home = lazy(() => import('@/views/home'))
import { EmptyLayout, Layout } from '@/layout'
const load = (Comp) => {
  return (
  // 因为路由懒加载，组件需要一段网络请求时间才能加载并渲染
  // 在组件还未渲染时，fallback就生效，来渲染一个加载进度条效果
  // 当组件渲染完成时，fallback就失效了
  //     <Suspense fallback={<Loading />}>
    <Suspense >
      {/* 所有lazy的组件必须包裹Suspense组件，才能实现功能 */}
      <Comp />
    </Suspense>
  )
}
export const constantRoutes = [
  {
    path: '/',
    name: '/',
    element: <EmptyLayout />,
    children: [
      {
        name: 'login',
        path: 'login',
        element: <Login />
      }
    ]
  }
]

export const asyncRoute = [
  {
    path: '/',
    name: '/',
    element: <Layout />,
    children: [
      {
        name: 'home',
        path: 'home',
        element: load(Home)
      }
    ]
  }
]
