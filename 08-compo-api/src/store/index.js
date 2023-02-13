import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Recolectar las piedras del infinito', completed: false },
      { id: '2', text: 'Piedra del alma', completed: true },
      { id: '3', text: 'Piedra del poder', completed: true },
      { id: '4', text: 'Piedra de realidad', completed: false },
      { id: '5', text: 'Conseguir nuevos secuaces comptentes', completed: false }
    ]
  },
  getters: {
    pendingTodos(state, getters, rootState) {
      return state.todos.filter(todo => !todo.completed)
    },

    all(state, getters, rootState) {
      return state.todos
    },

    completed(state, getters, rootState) {
      return state.todos.filter(todo => todo.completed)
    },

    /** puedo poner un guion bajo 
     * si el parametro no lo necesito 
     * en este caso no necesito el 'state'
     * */
    getTodosbyTab: (_, getters) => (tab) => {
      switch (tab) {
        case 'all': return getters.all
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.completed
      }
    }

  },
  mutations: {
    toggleTodo(state, id) {
      const todoIdx = state.todos.findIndex(todo => todo.id === id)

      state.todos[todoIdx].completed = !state.todos[todoIdx].completed
    }
  },
  actions: {
  },
  modules: {
  }
})
