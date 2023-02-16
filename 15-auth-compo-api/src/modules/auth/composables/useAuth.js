import { computed } from 'vue'
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

    const logout = () => {
        store.commit('auth/logOut')
        store.commit('journal/clearEntries')
    }

    return {
        checkAuthStatus,
        createUser,
        loginUser,
        logout,
        authStatus: computed(() => store.getters['auth/currentState']),
        userName: computed(() => store.getters['auth/userName'])
    }
}

export default useAuth

