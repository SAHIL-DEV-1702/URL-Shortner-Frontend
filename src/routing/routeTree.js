import { createRootRoute } from "@tanstack/react-router"
import { RootLayout } from "../RootLayout"
import { homePageRoute } from "./HomePage"
import { authRoute } from "./AuthRoute"
import { dashBoardRoute } from "./dashBoard"

export const rootRoute = createRootRoute({
    component: RootLayout,
})


export const routeTree = rootRoute.addChildren([
    homePageRoute,
    authRoute,
    dashBoardRoute
])

