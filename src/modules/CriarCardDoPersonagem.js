import CriarElementos from './CriarElementos';

export default (data) => {

    const cards = data.results.map( (personagem) =>{
        const div = CriarElementos.criaDiv();
        const divInformacoes = CriarElementos.criaDiv();
        const divStatus = CriarElementos.criaDiv();
        const divStatusColor = CriarElementos.criaDiv();
        const divDados = CriarElementos.criaDiv();
        const h1 = CriarElementos.criaH1();
        const img = CriarElementos.criaImg();
        let dados = '';

        divStatusColor.classList.add('status');

        if(personagem.status === 'Dead'){
            divStatusColor.classList.add('dead');   
        }else{
            divStatusColor.classList.add('alive');     
        }

        if(personagem.origin.url === '' || personagem.type === ''){
            dados = `
                <p>Espécie: ${personagem.species}</p>
                <p>Tipo: não possui</p>
                <p>Genero: ${personagem.gender}</p>
            `;
        }else{
            dados = `
                <p>Espécie: ${personagem.species}</p>
                <p>Tipo: ${personagem.type}</p>
                <p>Genero: ${personagem.gender}</p>
            `;   
        }


        divDados.innerHTML = dados;

        divStatus.classList.add('divStatus');
        divStatus.appendChild(divStatusColor);
        divStatus.append(personagem.status);
        
        h1.innerHTML = `<a class="name-personagem" link="${personagem.url}">${personagem.name}</a>`;
        img.setAttribute('src',personagem.image);
        
        divInformacoes.classList.add('informacoes')
        divInformacoes.appendChild(h1);
        divInformacoes.appendChild(divDados);
        divInformacoes.appendChild(divStatus);

        div.classList.add('card');
        div.appendChild(img);
        div.appendChild(divInformacoes);

        return div;
    })

    return cards;
}
