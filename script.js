function mostrarMensagem() {
    document.getElementById("mensagem").innerHTML =
    "🌎 Produzir de forma sustentável é garantir alimento, renda e preservação para as futuras gerações!";
}

function animarNumero(id, alvo) {

    let valor = 0;
    let incremento = alvo / 100;

    let contador = setInterval(() => {

        valor += incremento;

        if (valor >= alvo) {
            valor = alvo;
            clearInterval(contador);
        }

        document.getElementById(id).innerText =
            Math.floor(valor).toLocaleString("pt-BR");

    }, 20);
}

window.onload = () => {

    animarNumero("num1", 250);
    animarNumero("num2", 15000);
    animarNumero("num3", 1200);

};