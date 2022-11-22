const numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto)
const menorValor = 1;
const maiorValor = 1000;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1)
}



const elementoMenorValor = document.querySelector('#menor-valor')
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.querySelector('#maior-valor')
elementoMaiorValor.innerHTML = maiorValor