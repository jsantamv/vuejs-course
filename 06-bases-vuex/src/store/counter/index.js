import getRandomInt from "@/helpers/getRandomInt"

const counterStore = {

    namespaced: true,

    state: () => ({
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastRandomInt: 0

    }),
    //esto no puede ser asincrones=> commit
    mutations: {
        increment(state) {
            state.count++
            state.lastMutation = 'increment'
        },
        incrementBy(state, val) {
            state.count += val
            state.lastMutation = 'increment-by: ' + val
            state.lastRandomInt = val
            state.isLoading = true
        },
        setIsLoading(state, val) {
            state.isLoading = val
        }
    },
    //si puede ser asincronas => dispatch
    //las acciones hace un commit mutation
    /**
     * context tiene el contecto de una aplicacion
     */
    actions: {
        //async incrementRandomInt(context) {
        async incrementRandomInt({ commit }) {
            commit('setIsLoading', true)
            const randomInt = await getRandomInt()
            commit('incrementBy', randomInt)
            commit('setIsLoading', false)
        }
    },
    //
    getters: {
        squareCount(state) {
            return Math.pow(state.count, 2)
        }

    }

}

export default counterStore