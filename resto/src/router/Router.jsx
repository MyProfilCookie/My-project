import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import Home from "../pages/home/Home"
import Recettes from "../pages/recette/Recettes"
import Register from "../components/Register"


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
                element: <Recettes />
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
                path: "/dashboard",
                element: <div>Dashboard</div>
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