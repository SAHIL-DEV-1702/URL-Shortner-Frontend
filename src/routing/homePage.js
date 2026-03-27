import { createRoute } from "@tanstack/react-router"
import { rootRoute } from './routeTree'
import AuthPage from "../pages/Authpage"
import HomePage from "../pages/HomePage"

export const homePageRoute = createRoute({

    getParentRoute: () => rootRoute,
    path: '/',
    component: HomePage ,

})