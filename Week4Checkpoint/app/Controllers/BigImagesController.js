import { ProxyState } from "../AppState.js"
import { bigImagesService } from "../Services/BigImagesService.js"
import { Pop } from "../Utils/Pop.js"


function _draw(){
let image = ProxyState.bigImage
document.body.style.backgroundImage = `url(${image.img})`
document.body.style.backgroundSize = `cover`
}

export class BigImagesController{
    constructor(){
        console.log('big images controller loaded')
        ProxyState.on('bigImage',_draw)
        this.getBigImages()
    }


    async getBigImages(){
        try {
        await bigImagesService.getBigImages() 
        }catch (error) {
        console.error("[Getting Images]",error)
        Pop.error(error)
        }
    }
}