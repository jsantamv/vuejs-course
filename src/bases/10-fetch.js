

const apiKey = 'Av8b5xov1TJC6U5fvuiLq3CqnBWspbVX'
// https://api.giphy.com/v1/gifs/random?api_key=YQnG8xqCyq2shbGATEpCX95u0Kb5biNc


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then( resp => resp.json() )
    .then(({ data })=> {
        const { url } = data.images.original

        
        const img = document.createElement('img')
        img.src = url

        document.body.append( img )

    })


