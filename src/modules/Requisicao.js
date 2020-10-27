export default class FazRequisicao{
    constructor(data = 'character',pages = '1'){
        this.data = data;
        this.pages = pages;
    }
    async GetData(url = `https://rickandmortyapi.com/api/${this.data}/?page=${this.pages}`){
        const requisicao = await fetch(url);
        const response = await requisicao.json();
        return response;
    }
}
