

import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter component', () => {
    test('h2 debe de tener el valor por defecto', () => {
        const wrapper = shallowMount(Counter)

        expect(wrapper.find('h2').exists).toBeTruthy

        const h2value = wrapper.find('h2').text()
        expect(h2value).toBe('Counter!');
    })

    test('El valor por defecto debe de ser 100 en el p', () => { 
        // wraper
        const wrapper = shallowMount(Counter)

        //ptags

        const ptags = wrapper.find('[data-testid="counter"]').text()

        //console.log(ptags)
        
        //expect segundo p == 100
        expect(ptags).toEqual('100');
    })
})