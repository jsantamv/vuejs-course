import authApi from '@/api/authApi.js'

export const createUser = async ({ commit }, user) => {

    const { name, email, password } = user

    try {

        const { data } = await authApi.post(':signUp', { email, password, returnSecureToken: true })
        const { idToken, refreshToken } = data

        const resp = await authApi.post(':update', {
            displayName: name,
            idToken
        })

        //TODO mutation
        //no requiere el password
        delete user.password
        commit('loginUser', {
            user,
            idToken,
            refreshToken
        })

        return { ok: true }

    } catch (error) {
        return {
            ok: false,
            message: error.response.data.error.message
        }
    }

}

export const singInUser = async ({ commit }, user) => {

    const { name, email, password } = user

    try {

        const { data } = await authApi.post(':signInWithPassword', { email, password, returnSecureToken: true })
        const { displayName, idToken, refreshToken } = data

        user.name = displayName

        //TODO mutation
        //no requiere el password
        delete user.password
        commit('loginUser', {
            user,
            idToken,
            refreshToken
        })

        return { ok: true }

    } catch (error) {
        return {
            ok: false,
            message: error.response.data.error.message
        }
    }

}

