
import axios from 'axios'

//api AIzaSyAmwI18kr_C_q6QUUgDtERsKcCWBTrBTFE
//:signUp?key=[API_KEY]

const signUp = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyAmwI18kr_C_q6QUUgDtERsKcCWBTrBTFE'
    }
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default signUp


