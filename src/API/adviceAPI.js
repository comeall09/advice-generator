import * as axios from 'axios';

export const adviceAPI = {
  async getAdvice(){
    const response = await axios.get('https://api.adviceslip.com/advice')
    return response.data.slip.advice
  }
}
