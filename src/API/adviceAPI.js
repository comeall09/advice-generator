import * as axios from 'axios';

export const adviceAPI = {
    async getAdvice(){
      try {
        const response = await axios.get('https://api.adviceslip.com/advice')
        return response.data.slip.advice
      } catch (error) {
        console.log(error)
      }
    }
}
