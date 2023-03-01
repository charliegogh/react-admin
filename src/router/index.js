import { useRoutes } from 'react-router-dom'
import { constantRoutes, asyncRoute } from './routes'
const useAppRoutes = () => {
  return useRoutes([...constantRoutes, ...asyncRoute])
}
export default useAppRoutes
