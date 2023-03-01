import useAppRoutes from './router'
import permission from './permission'
const App = () => {
  return useAppRoutes()
}
export default permission(App)
