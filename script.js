"use strict";

const cep = document.getElementById("cep");
const btnPesquisar = document.getElementById("btnPesquisar");
const saida = document.getElementById("saida");


function getCep(){
    return cep.value;
}


async function buscarCep(){ 
    try{
    let urlCEP= `https://viacep.com.br/ws/${getCep()}/json/`
    const trazerCEP = fetch(urlCEP); 
    const resposta = await trazerCEP;
    const dadosJSON = await resposta.json();
    saida.innerText = apresentarDadosCEP(dadosJSON);
    }
    catch(e){
        saida.textContent = `Erro: ${e}`;
    }
    
}

function apresentarDadosCEP(obj){
    return (!obj.erro)? 
    `Cep: ${obj.cep} 
    Logradouro: ${obj.logradouro}
    Bairro: ${obj.bairro}
    Localidade: ${obj.localidade}
    Uf: ${obj.uf}`: 
    "CEP inexistente.";

}


btnPesquisar.addEventListener("click", buscarCep);


