import { computed } from 'vue'
import { useStore } from 'vuex'

const useUI = () => {

    const store = useStore()

    return {
        
        /**propiedad computada */
        sideMenuOpen: computed({
            get() {
                return store.getters['ui/isSideMenuOpen']
            },
            set(val) {
                store.commit('ui/toggleSideMenu')
            }
        }),
        /**funcion commit del evento */
        toggleSideMenu() { store.commit('ui/toggleSideMenu') },
    }

}

export default useUI
