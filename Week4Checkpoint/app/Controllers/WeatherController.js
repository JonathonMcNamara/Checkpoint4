import { Pop } from "../Utils/Pop.js";
import { weathersService } from "../Services/WeathersService.js";
import { ProxyState } from "../AppState.js";

function _draw(){
let weather = ProxyState.weather
document.getElementById('weather').innerHTML = weather.WeatherTemplate
}

export class WeatherController{
    constructor(){
        ProxyState.on('weather', _draw)
        console.log('Weather Controller loaded');
        this.getWeather()
    }



    async getWeather(){
        try {
        await weathersService.getWeather()
        } catch (error) {
            console.error("[Getting weather]",error)
            Pop.error(error)
            
        }
    }  
}