import { lazy } from 'react'
const Login = lazy(() => import('@/views/login'))
const Home = lazy(() => import('@/views/home'))
import { EmptyLayout, Layout } from '@/layout'
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
        element: <Home />
      }
    ]
  }
]
