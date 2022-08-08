import { ProxyState } from "../AppState.js"
import { sandboxApi } from "./AxiosService.js"
import { Weather } from "../Models/Weather.js";

class WeathersService{
    async getWeather(){
        let res = await sandboxApi.get('/weather')
        console.log(res.data);
        let weather = new Weather(res.data)
        ProxyState.weather = weather
        console.log(ProxyState.weather)
    }
}




export const weathersService = new WeathersService()