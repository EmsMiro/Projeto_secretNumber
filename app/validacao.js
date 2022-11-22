function verificaChuteValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `               
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="botao-restart" class="btn-restart" >Jogar novamente</button>
                <p class="footer-p">Coded with ❤️ by <a class= 'footer-p footer-a'href="https://www.linkedin.com/in/ednirli-miro-188b1513a/">Ems Miro</a></p>
                `
                document.body.style.backgroundColor = "black";
                document.body.style.color = "white";
        } else {

            elementoChute.innerHTML += `<div>Valor Inválido</div> 
            <button id='botao-restart' class='btn-restart'>Jogar novamente</button> `
        } return
    }

    if (numeroForaDosLimites(numero)){
        elementoChute.innerHTML += `<div>Valor inválido! Fale um valor que esteja entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto){

        document.body.innerHTML = `<h2>Parabéns, você acertou! </h2> 
        <h3>O número secreto era ${numeroSecreto}!</h3>
        
        <button id='botao-restart' class='btn-restart'>Jogar novamente</button>

        <p class="footer-p">Coded with ❤️ by <a class= 'footer-p footer-a'href="https://www.linkedin.com/in/ednirli-miro-188b1513a/">Ems Miro</a></p>
       `
        // animação de confetes na tela
        //início

        const start = () => {
            setTimeout(function() {
                confetti.start()
            }, 500); // 500 milisegundos setados para o início da animação ( lembre: 1000 = 1 sec)
        };

        //  código de parada da animação

        const stop = () => {
            setTimeout(function() {
                confetti.stop()
            }, 5000); // 5000 segundos setados como duração da animação na tela ( 5000 = 5 sec)
        };

        start();
        stop();

    } else if (numero > numeroSecreto) {

        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-circle-arrow-down"></i></div>`
    } else {

        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-circle-arrow-up"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForaDosLimites(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'botao-restart') {
        window.location.reload()
    }
})