/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom/client'
import './assets/scss/index.scss'

import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>

    </AuthProvider>
)
