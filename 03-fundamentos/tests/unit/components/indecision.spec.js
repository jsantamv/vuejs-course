import { shallowMount } from "@vue/test-utils"
import Indecision from '@/components/Indecision'

describe('Componont Indecision', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
    })

    test('debe hacer match con Snapshoot', () => {

        expect(wrapper.html()).toMatchSnapshot()
    })

})