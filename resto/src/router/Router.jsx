import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import Home from "../pages/home/Home"
import Recettes from "../pages/recette/Recettes"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "/about",
        element: <div>About 📧</div>
    },
    {
        path: "/recettes",
        element: <Recettes />
    },
    {
        path: "/contact",
        element: <div>Contact 📞</div>
    }
])

export default router