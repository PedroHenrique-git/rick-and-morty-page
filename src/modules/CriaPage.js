import FazRequisicao from './Requisicao';
import CriarElementos from './CriarElementos';

export default (objeto) =>{

    const divContainer = CriarElementos.criaDiv();
    const divStatus = CriarElementos.criaDiv();
    const divStatusColor = CriarElementos.criaDiv();
    const divPrincipal = CriarElementos.criaDiv();
    const divInformacoes = CriarElementos.criaDiv();
    const name = CriarElementos.criaH1();
    const img = CriarElementos.criaImg();
    let dados = '';

    divStatusColor.classList.add('status');

    if(objeto.status === 'Dead'){
        divStatusColor.classList.add('dead');   
    }else{
        divStatusColor.classList.add('alive');     
    }

    if(objeto.origin.url === '' || objeto.type === ''){
        dados = `
            <p>Espécie: ${objeto.species}</p>
            <p>Tipo: não possui</p>
            <p>Genero: ${objeto.gender}</p>
            <p>Origem : ${objeto.origin.name}</p>
            <p>Local: ${objeto.location.name}</p>
        `;
    }else{
        dados = `
            <p>Espécie: ${objeto.species}</p>
            <p>Tipo: ${objeto.type}</p>
            <p>Genero: ${objeto.gender}</p>
            <p>Origem : ${objeto.origin.name}</p>
            <p>Local: ${objeto.location.name}</p>
        `;   
    }

    divInformacoes.innerHTML = dados;

    divStatus.classList.add('divStatus');
    divStatus.appendChild(divStatusColor);
    divStatus.append(objeto.status);

    name.innerText = objeto.name;
    img.setAttribute('src',objeto.image);

    divPrincipal.appendChild(name);
    divPrincipal.appendChild(img);

    divContainer.classList.add('more-information');
    divContainer.appendChild(divPrincipal);
    divContainer.appendChild(divInformacoes);
    divContainer.appendChild(divStatus);

    return divContainer;
};