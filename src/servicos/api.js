import axios from "axios";

export const api = axios.create({
    baseURL:"https://viacep.com.br/"

});
export const obterEndereco = async(cep, setLogradouro , setBairro , setCidade , setUf) =>{
    // await api.get("/ws"+ cep +JSON)                                   
    await api.get( `ws/${cep}/json`)
        .then((resposta) =>{             //resposta da api
           const endereco = resposta.data;
           
           setLogradouro(endereco?.logradouro);// so vai pegar o valor se for <> nullo udefinide
           setBairro(endereco?.bairro);
           setCidade(endereco?.localidade);
           setUf(endereco?.uf);
        }) 
        .catch((erro) => {
            console.error("erro ao chamar a api",erro);
        });       
    

}