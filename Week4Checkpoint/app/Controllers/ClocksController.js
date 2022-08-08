

function _updateTime(){
    let time = new Date().toLocaleTimeString();
    document.getElementById('time').innerHTML = time
}

setInterval(_updateTime,1000)

export class ClocksController{
    constructor(){
        console.log('clocks controller loaded')
        _updateTime()
    }
}