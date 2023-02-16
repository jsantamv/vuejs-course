import { useStore } from 'vuex'

const useAuth = () => {

    const store = useStore()

    const createUser = async (user) => {
        const resp = await store.dispatch('auth/createUser', user)
        return resp
    }

    const loginUser = async (user) => {
        const resp = await store.dispatch('auth/singInUser', user)
        return resp
    }

    const checkAuthStatus = async () => {
        return await store.dispatch('auth/checkAuthentication')
    }

    return {
        checkAuthStatus,
        createUser,
        loginUser,
    }
}

export default useAuth

