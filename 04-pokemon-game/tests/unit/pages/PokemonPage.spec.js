import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'



describe('PokemonPage', ()=> {
    let wrapper

    beforeEach(()=>{
        wrapper = shallowMount(PokemonPage)
    })

    test('debe de hacer match con el snapshot', () => { 
        expect(wrapper.html()).toMatchSnapshot()
     })

     test('debe de llamar a mixPokemonArray al montar', () => { 
            //creamos un spy

            const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods,'mixPokemonArray')
    })
})