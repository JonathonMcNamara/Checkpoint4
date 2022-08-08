
export class Quote{
    constructor(data){
        this.content = data.content
        this.author = data.author
    }

    get QuoteTemplate(){
        return `
        <p class="no-select">${this.content}</p>
        <p class="on-hover no-select">${this.author}</p>
        `
    }
}