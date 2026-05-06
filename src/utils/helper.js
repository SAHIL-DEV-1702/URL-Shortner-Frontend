import { redirect } from "@tanstack/react-router"
import { getCurrentUser } from '../api/user.api.js'
import { login } from '../store/slice/authSlice.js'

export const checkAuth = async ({ context }) => {

    try {
        const { queryClient, store } = context

        const user = await queryClient.ensureQueryData({
            queryKey: ['currentUser'],
            queryFn: getCurrentUser,
        })

        console.log(user, "user")

        if (!user) {
            redirect({ to: "/auth" })
        }

        store.dispatch(login(user))

        return true

    } catch (error) {

        redirect({ to: "/auth" })
    }
}