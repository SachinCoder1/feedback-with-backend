import axios from 'axios'

const URL = "http://localhost:8000"

export const sendFeedback = async(input)=>{
    try {   
        return await axios.post(`${URL}/feedback`, input)
    } catch (error) {
        console.log('500 there is error')
    }
}