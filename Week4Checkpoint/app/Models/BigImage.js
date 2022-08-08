
export class BigImage{
    constructor(data){
        this.img = data.largeImgUrl
    }


    get LargeTemplate(){
        return `
        <p>${this.img}</p>
        `
    }
}