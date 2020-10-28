import CriarCard from './CriarCardDoPersonagem';
import FazRequisicao from './Requisicao';
import InserirDados from './InserirElementosNoHtml';

let baseUrl = `https://rickandmortyapi.com/api/character/?page=${1}`;
let next = 0;

const requisicao = new FazRequisicao();

export default async () => {

    const prox = document.querySelector('.next');
    const ant = document.querySelector('.prev');

    prox.addEventListener('click', () => {
        next++;
        console.log(next);
        let url = `https://rickandmortyapi.com/api/character/?page=${next}`;
        requisicao.GetData(url).then( (data) => {
            document.querySelector('.conteudo').innerHTML = '';
            setTimeout(function(){
                InserirDados(CriarCard(data))   
            },500);

            if(next >= 34){;
                next = 0;
                url = `https://rickandmortyapi.com/api/character/?page=${1}`;
                setTimeout(function(){
                    InserirDados(CriarCard(data))   
                },500);
            }
            
        })
    });

    ant.addEventListener('click', () => {
        next--;
        console.log(next);
        let url = `https://rickandmortyapi.com/api/character/?page=${next}`;
        requisicao.GetData(url).then( (data) => {
            document.querySelector('.conteudo').innerHTML = '';

            setTimeout(function(){
                InserirDados(CriarCard(data))   
            },500);

            if(next <= 2){;
                next = 1;
                url = `https://rickandmortyapi.com/api/character/?page=${next}`;
                setTimeout(function(){
                    InserirDados(CriarCard(data))   
                },500);
            }
            
        })
    });
}