import FazRequisicao from './Requisicao';
import CriarPage from './CriaPage';
import CriarCard from './CriarCardDoPersonagem';
import InserirDados from './InserirElementosNoHtml';

const requisicao = new FazRequisicao();
let contaier = document.querySelector('.conteudo');

export default function(){
    console.log(contaier);
    document.addEventListener('click', (e) =>{
        const el = e.target;
        if(el.classList.contains('name-personagem')){
            requisicao.GetData(el.getAttribute('link')).then(
                data => {
                    console.log(data);
                    contaier.innerHTML = '';
                    contaier.appendChild(CriarPage(data));
                    document.querySelector('.card-buttons').style.visibility = "hidden";
                }
            )
        }
    });

    document.querySelector('.pesquisar').addEventListener('click',function(){
        let name = document.querySelector('input').value;
        requisicao.GetData(`https://rickandmortyapi.com/api/character/?name=${name}`).then(
            data => {
                console.log(data);
                if(data.error){
                    alert('O personagem não existe');
                    return;
                }
                contaier.innerHTML = '';
                InserirDados(CriarCard(data));
                document.querySelector('.card-buttons').style.visibility = "hidden";
            }
        )    
    });
}