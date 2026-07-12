import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './rootRoute.js'
import DashBoardPage from '../pages/DashBoardPage.jsx'
import { checkAuth } from '../utils/helper.js'

export const dashBoardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    component: DashBoardPage,
    beforeLoad: checkAuth,
})