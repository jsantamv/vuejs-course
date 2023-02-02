//si puede ser asincronas => dispatch
//las acciones hace un commit mutation
/**
 * context tiene el contecto de una aplicacion
 */

export const increment = (state) => {
    state.count++
    state.lastMutation = 'increment'
}
export const incrementBy = (state, val) => {
    state.count += val
    state.lastMutation = 'increment-by: ' + val
    state.lastRandomInt = val
    state.isLoading = true
}
export const setIsLoading = (state, val) => {
    state.isLoading = val
}