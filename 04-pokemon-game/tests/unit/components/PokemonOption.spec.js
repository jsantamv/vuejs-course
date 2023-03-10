import { shallowMount } from "@vue/test-utils";
//import mis mocks
import { pokemons } from '../mocks/pokemons.mock'
//sujeto de pruebas
import PokemonOption from "@/components/PokemonOption";


let wrapper

beforeEach(() => {
    wrapper = shallowMount(PokemonOption, {
        props: {
            pokemons
        }
    })
})


describe('PokemonOption', () => {
    test('Debe de ser hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de emitir "selection" con sus respectivos parametros al hacer click', () => {
        //que existan 4 li
        const liTags = wrapper.findAll('li')
        expect(liTags.length).toBe(4)
        //cada uno tuviera su respectivo list Item
        expect(liTags[0].text()).toBe('bulbasaur')
        expect(liTags[1].text()).toBe('ivysaur')
        expect(liTags[2].text()).toBe('venusaur')
        expect(liTags[3].text()).toBe('charmander')
    })

    test('Debe de emite "selection-pokemon" con sus respectivos parametros al hacer click', () => {
        const [li1, li2, li3, li4] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        console.log(wrapper.emitted('selection-pokemon'));

        expect(wrapper.emitted('selection-pokemon').length).toBe(4)
        expect(wrapper.emitted('selection-pokemon')[0]).toEqual([1])
        expect(wrapper.emitted('selection-pokemon')[1]).toEqual([2])
        expect(wrapper.emitted('selection-pokemon')[2]).toEqual([3])
        expect(wrapper.emitted('selection-pokemon')[3]).toEqual([4])

    })



})