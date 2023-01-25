import { shallowMount } from "@vue/test-utils"
import Indecision from '@/components/Indecision'

describe('Componont Indecision', () => {

    let wrapper
    let clgSpy

    //requiero un MOCK del fetch API
    // y la promesa resuelve then
    //la resulucion de la promes json()
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))



    beforeEach(() => {
        wrapper = shallowMount(Indecision)

        clgSpy = jest.spyOn(console, 'log')

        jest.clearAllMocks()
    })

    test('debe hacer match con Snapshoot', () => {

        expect(wrapper.html()).toMatchSnapshot()
    })

    test('escribir en el input no dispare nada (console.log)', async () => {
        //aca todavia no he escrito el simbolo de ?

        // aca colocamos con .vm que es el obejto de vue
        // ver documentacion de vue al respecto
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('hola Mundo')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).not.toHaveBeenCalled()

    })

    test('al escribir el signo "?", debe disparar el getAnswer', async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('soy feliz?')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalled()
    })

    test('pruebas en getAnswer', () => {

    })

    test('pruebas en getAnswer - fallo en el API', () => {

    })

})