import { createRootRoute } from "@tanstack/react-router"
import { RootLayout } from "../RootLayout"
import { homePageRoute } from "../pages/HomePage.jsx"
import { authroute } from "../routing/authroute.js"
import { dashBoardRoute } from "../routing/dashBoard.js"

export const rootRoute = createRootRoute({
    component: RootLayout,
})


export const routeTree = rootRoute.addChildren([
    homePageRoute,
    authroute,
    dashBoardRoute
])

