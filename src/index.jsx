import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.less'
import store from './app/store'
import { Provider } from 'react-redux'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
