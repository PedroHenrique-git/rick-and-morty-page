import CriarCard from './CriarCardDoPersonagem';
import FazRequisicao from './Requisicao';
import InserirDados from './InserirElementosNoHtml'; 

const baseUrl = 'https://rickandmortyapi.com/api/character/';

export default async () =>{
    const requisicao = new FazRequisicao();
    let data = await requisicao.GetData('https://rickandmortyapi.com/api/character/');;
    let array = CriarCard(data);
    InserirDados(array);
};