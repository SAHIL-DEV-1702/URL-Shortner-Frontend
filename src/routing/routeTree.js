import { rootRoute } from './rootRoute.js'
import { homePageRoute } from './homePage.js'
import { authroute } from './authroute.js'
import { dashBoardRoute } from './dashBoard.js'

export const routeTree = rootRoute.addChildren([
    homePageRoute,
    authroute,
    dashBoardRoute,
])

