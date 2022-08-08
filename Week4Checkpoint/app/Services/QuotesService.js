import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { sandboxApi } from "./AxiosService.js"

class QuotesService{
    async getQuotes(){
    let res = await sandboxApi.get('/quotes')
    console.log(res.data);
    let quote = new Quote(res.data)
    ProxyState.quote = quote
    console.log(ProxyState.quote);
    }
}






export const quotesService = new QuotesService()