import ReactDOM from 'react-dom/client'
import './assets/scss/index.scss'

import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <RouterProvider router={router} />

    </AuthProvider>
)
