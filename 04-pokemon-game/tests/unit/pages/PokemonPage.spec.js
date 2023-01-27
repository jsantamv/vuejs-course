import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons.mock'
import { shallowReactive } from 'vue'



describe('PokemonPage', () => {
    let wrapper
    let mixPokemonArraySpy

    beforeEach(() => {
        //creamos un spy, hay que llamarlo antes de que se monte
        //cuando lo utilizamos aca debemos de limipar el spy
        //mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')

        wrapper = shallowMount(PokemonPage)
    })

    test('debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de llamar a mixPokemonArray al montar', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        const wrapper = shallowMount(PokemonPage)

        expect(mixPokemonArraySpy).toHaveBeenCalled()

    })

    test('debe de hacer match con el snapshot cuando carga los pokemon', () => {
        //con esto monto el componente.
        const wrapper = shallowMount(PokemonPage, {
            //const wrapper = mount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[1],
                    showpokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de mostra los componentes de PokemonPincture y pokemon Options', () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[1],
                    showpokemon: true,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        //=========< pokemon picture >=========
        //PokemonPicture debe de existir
        const pokemonPicture = wrapper.find('pokemon-picture-stub')
        expect(pokemonPicture.exists()).toBeTruthy()

        //PokemonPicture attribute pokemonid === '5'        
        expect(pokemonPicture.attributes('pokemonid')).toBe('2')

        //=========< pokemon options >=========
        //PokemonOptions debe de existir        
        const pokemonOption = wrapper.find('pokemon-option-stub')
        expect(pokemonOption.exists()).toBeTruthy()

        //PokemonOptions attribute pokemons tobe true
        expect(pokemonOption.attributes('pokemons')).toBeTruthy()


    })
})