import Router from '../router'
import Nav from './Nav'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Nav/>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}
export default App
