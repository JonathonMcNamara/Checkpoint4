import { Pop } from "../Utils/Pop.js";
import { quotesService } from "../Services/QuotesService.js";
import { ProxyState } from "../AppState.js";


function _draw(){
  let quote = ProxyState.quote
  document.getElementById('quote').innerHTML = quote.QuoteTemplate
}

export class QuotesController{
  constructor(){
    console.log('quotes controller loaded');
    ProxyState.on('quote',_draw)
    this.getQuotes()
  }
  
  
  async getQuotes(){
    try {
      await quotesService.getQuotes()  
    } catch (error) {
      console.error("[Getting Quotes]",error)
      Pop.error(error)
      
    }
  }
}