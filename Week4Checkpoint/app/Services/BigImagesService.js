import { ProxyState } from "../AppState.js";
import { BigImage } from "../Models/BigImage.js";
import { sandboxApi } from "./AxiosService.js";

export class BigImagesService{
    async getBigImages(){
        const res = await sandboxApi.get('/images')
        console.log(res.data);
        let bigImage = new BigImage(res.data)
        ProxyState.bigImage = bigImage
        console.log(ProxyState.bigImage);

    }
}


export const bigImagesService = new BigImagesService()