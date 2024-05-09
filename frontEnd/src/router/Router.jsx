import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import Home from "../pages/home/Home"
import Recettes from "../pages/recette/Recettes"
import Register from "../components/Register"
import PrivateRouter from "../PrivateRouter/PrivateRouter"
import UpdateProfile from "../pages/dashboard/UpdateProfile"
import RecetteDetail from "../pages/recette/RecetteDetail"
import AdminPanel from "../pages/dashboard/admin/AdminPanel"
import DashboardLayout from "../layout/DashboardLayout"
import Dashboard from "../pages/dashboard/admin/Dashboard"
import Users from "../pages/dashboard/admin/Users"
// import Login from "../components/Login"
// import UpdateRecette from "../pages/dashboard/admin/UpdateRecette"
// import UpdateUser from "../pages/dashboard/admin/UpdateUser"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/recettes",
                element: <PrivateRouter><Recettes /></PrivateRouter>
            },
            {
                path: "/admin-panel",
                element: <PrivateRouter><AdminPanel /></PrivateRouter>

            },
            {
                path: "/contact",
                element: <div>Contact 📞</div>
            },
            {
                path: "/about",
                element: <div>About 📧</div>
            },
            {
                path: "/*",
                element: <div>404</div>
            },
            
            {
                path: "/update-profile",
                element: <UpdateProfile />
            },
            {
                path: "/recettes/nouvelles",
                element: <div>Nouvelle</div>
            },
            {
                path: "/recettes/populaires",
                element: <div>Populaire</div>
            },
            {
                path: "/recettes/best",
                element: <div>Best</div>
            },
            {
                path: "/recettes/:id",
                element: <RecetteDetail />
            }
        ]
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <div>Login</div>
    },
    {
        path: 'dashboard',
        element: <PrivateRouter><DashboardLayout /></PrivateRouter>,
        children: [
            {
                path: '',
                element: <Dashboard />
            },
            {
                path: 'users',
                element: <Users />
            },
        ]
    }
])

export default router