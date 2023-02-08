import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView'

describe('HomeView.vue', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(HomeView)
    })
    
    test('debe de renderizar el componente correctamente', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})
