import CriarCard from './CriarCardDoPersonagem';
import FazRequisicao from './Requisicao';
import InserirDados from './InserirElementosNoHtml';

async function setaDados(){
    const requisicao = new FazRequisicao();
    let data = await requisicao.GetData();
    let array = CriarCard(data);
    InserirDados(array);    
}

export default async () =>{

    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    setaDados();

    next.addEventListener('click', () => setaDados());

    prev.addEventListener('click', () => setaDados());
};