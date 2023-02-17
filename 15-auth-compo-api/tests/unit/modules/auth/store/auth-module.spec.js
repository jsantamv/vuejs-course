import axios from 'axios'
import createVuexStore from '../../../mock-data/mock-store'

describe('Vuex: Pruebas en el auth-module', () => {
    test('estado inicial', () => {
        const store = createVuexStore({
            status: 'authenticating', //'authenticated', 'not-authenticating','authenticating'
            user: null,
            idToken: null,
            refreshToken: null
        })

        const { status, user, idToken, refreshToken } = store.state.auth

        expect(status).toBe('authenticating')
        expect(user).toBe(null)
        expect(idToken).toBe(null)
        expect(refreshToken).toBe(null)
    })

    test('mutaciones: loginUser', () => {
        const store = createVuexStore({
            status: 'authenticating', //'authenticated', 'not-authenticating','authenticating'
            user: null,
            idToken: null,
            refreshToken: null
        })

        const payload = {
            user: { name: 'Juan Carlos', email: 'fernando@gmail.com' },
            idToken: 'ABC-123',
            refreshToken: 'XYZ-123'
        }

        store.commit('auth/loginUser', payload)

        const { status, user, idToken, refreshToken } = store.state.auth

        expect(status).toBe('authenticated')
        expect(user).toEqual({ name: 'Juan Carlos', email: 'fernando@gmail.com' })
        expect(idToken).toBe('ABC-123')
        expect(refreshToken).toBe('XYZ-123')
    })


    test('mutaciones: logOut', () => {

        localStorage.setItem('idToken', 'abc-123');
        localStorage.setItem('refreshToken', 'xyz-123');

        const store = createVuexStore({
            status: 'authenticated', //'authenticated', 'not-authenticating','authenticating'
            user: { name: 'Juan Carlos', email: 'fernando@gmail.com' },
            idToken: 'ABC-123',
            refreshToken: 'XYZ-123'
        })



        store.commit('auth/logOut')
        const { status, user, idToken, refreshToken } = store.state.auth

        // console.log(localStorage.getItem('idToken'));
        // console.log(localStorage.getItem('refreshToken'));

        expect(status).toBe('not-authenticated')
        expect(user).toBeFalsy()
        expect(idToken).toBeFalsy()
        expect(refreshToken).toBeFalsy()
        //test refresh token
        expect(localStorage.getItem('idToken')).toBeFalsy()
        expect(localStorage.getItem('refreshToken')).toBeFalsy()
    })

    test('getters: currentState userName', () => {
        const store = createVuexStore({
            status: 'authenticated', //'authenticated', 'not-authenticating','authenticating'
            user: { name: 'Juan Carlos', email: 'fernando@gmail.com' },
            idToken: 'ABC-123',
            refreshToken: 'XYZ-123'
        })

        expect(store.getters['auth/currentState']).toBe('authenticated')
        expect(store.getters['auth/userName']).toBe('Juan Carlos')
    })

    //actions
    test('actions createUser - error usuario ya existe', async () => {
        const store = createVuexStore({
            status: 'not-authenticated', //'authenticated', 'not-authenticating','authenticating'
            user: null,
            idToken: null,
            refreshToken: null
        })

        const newUser = { user: 'Test user', email: 'test@test.com', password: '123456' }

        const resp = await store.dispatch('auth/createUser', newUser)
        //console.log(resp);

        expect(resp).toEqual({ ok: false, message: 'EMAIL_EXISTS' })

    })

    test('actions createUser singInUser - Crear un usuario', async () => {
        const store = createVuexStore({
            status: 'not-authenticated', //'authenticated', 'not-authenticating','authenticating'
            user: null,
            idToken: null,
            refreshToken: null
        })
        
        let newUser = { user: 'Test user', email: 'test2@test.com', password: '123456' }

        //SingInUser
        await store.dispatch('auth/singInUser', newUser)
        const { idToken } = store.state.auth
        
        //borrar el usuario
        const API_KEY = 'AIzaSyAmwI18kr_C_q6QUUgDtERsKcCWBTrBTFE'
        const deleteResponse = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${API_KEY}`, {
            idToken
        })
                
        //crear el usuario
        newUser = { user: 'Test user', email: 'test2@test.com', password: '123456' }
        const resp = await store.dispatch('auth/createUser', newUser)

        expect(resp).toEqual({ ok: true})

        


    })

})