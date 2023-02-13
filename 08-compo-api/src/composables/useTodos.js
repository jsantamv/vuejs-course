import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
    //composables
    const store = useStore()
    const currentTab = ref('all')

    return {
        currentTab,

        pending: computed(() => store.getters['pendingTodos']),
        all: computed(() => store.getters['all']),
        completed: computed(() => store.getters['completed']),
        getTodosbyTab: computed(() => store.getters['getTodosbyTab'](currentTab.value)),

        //methods
        toggleTodo: (id) => store.commit('toggleTodo', id),
    }
}

export default useTodos

