export class Weather{
    constructor(data){
        this.temp = parseInt(((data.main.temp -273.15)*1.8)+32)
        this.name = data.name
        
        
        
    }
    
    get WeatherTemplate() {
    return `
    <div class="text-white" >
    <p>${this.name}</p>
    <p>${this.temp}℉</p>
    </div>
    `
    }
} 