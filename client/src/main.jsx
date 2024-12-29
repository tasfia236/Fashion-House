import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import routes from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProviders from './Providers/AuthProviders.jsx'
import {Provider} from 'react-redux'
import store from './redux/store'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <AuthProviders>
      <RouterProvider router={routes} />
      <ToastContainer />
    </AuthProviders>
    </Provider>
  </StrictMode>,
)
