

import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })

    test('h2 debe de tener el valor por defecto', () => {
        expect(wrapper.find('h2').exists).toBeTruthy

        const h2value = wrapper.find('h2').text()
        expect(h2value).toBe('Counter!');
    })

    test('El valor por defecto debe de ser 100 en el p', () => {
        //ptags
        const ptags = wrapper.find('[data-testid="counter"]').text()

        //expect segundo p == 100
        expect(ptags).toEqual('100');
    })

    test('Increment en 1', async () => {
        //========< test for Incremet >==========
        const [btnInc, btnDec] = wrapper.findAll('button')

        await btnInc.trigger('click')
        await btnInc.trigger('click')
        await btnInc.trigger('click')

        //========< test for decrement >==========
        await btnDec.trigger('click')
        await btnDec.trigger('click')

        let value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toEqual('101')
    })
})