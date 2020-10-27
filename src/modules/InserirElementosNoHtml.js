export default async (array) =>{
    array.forEach( (div) =>{
        document.querySelector('.conteudo').appendChild(div);
    })
}