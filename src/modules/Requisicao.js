export default class FazRequisicao{
    async GetData(url){
        const requisicao = await fetch(url);
        const response = await requisicao.json();
        return response;
    }
}
