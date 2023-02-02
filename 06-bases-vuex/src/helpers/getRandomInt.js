const getRandomInt = () => {
    return new Promise(resolve => {
        
        const rndint = Math.floor((Math.random() * 20) + 1)

        setTimeout(() => {
            resolve(rndint)
        }, 1000);

    })
}


export default getRandomInt