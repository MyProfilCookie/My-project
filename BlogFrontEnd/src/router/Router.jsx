import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import Home from "../pages/home/Home"
import Recettes from "../pages/recette/Recettes"
import Register from "../components/Register"
import PrivateRouter from "../PrivateRouter/PrivateRouter"
import UpdateProfile from "../pages/dashboard/UpdateProfile"


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
                path: "/contact",
                element: <div>Contact 📞</div>
            },
            {
                path: "/about",
                element: <div>About 📧</div>
            },
            {
                path: "*",
                element: <div>404</div>
            },
            
            {
                path: "/update-profile",
                element: <UpdateProfile />
            },
            {
                path: "recettes/nouvelles",
                element: <div>Nouvelle</div>
            },
            {
                path: "recettes/populaires",
                element: <div>Populaire</div>
            },
            {
                path: "recettes/best",
                element: <div>Best</div>
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
])

export default router