import { shallowMount } from '@vue/test-utils'
import AboutView from '@/views/AboutView'

describe('AboutView.vue', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(AboutView)
    })
    
    test('debe de renderizar el componente correctamente', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})
