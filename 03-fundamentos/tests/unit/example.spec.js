

describe('example Component', () => {
    test('Debe de ser mayor a 10', () => {

        //arreglar
        let value = 9;


        //Estimulo
        value = value + 2;

        //observar el resultado
        expect(value).toBeGreaterThan(10)
        
        
    })
})
