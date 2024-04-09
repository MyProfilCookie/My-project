import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import Home from "../pages/home/Home"


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
        path: "/menu",
        element: <div>Menu 🍔</div>
    },
    {
        path: "/contact",
        element: <div>Contact 📞</div>
    }
])

export default router