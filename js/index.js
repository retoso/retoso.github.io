function queDiaEHoje() {
    dayName = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado")
    monName = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
    now = new Date
    document.getElementById("hojeDia").innerText = (dayName[now.getDay()] + ", " + now.getDate() + " de " + monName[now.getMonth()] + " de " + now.getFullYear() + ".");
}

queDiaEHoje();



function btnUm() {
    let pontos = document.getElementById("pontoUm");
    let maisTexto = document.getElementById("maisUm");
    let btnLeiaMais = document.getElementById("btnUm");

    if (pontos.style.display == "none") {

        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia Mais";

    } else {

        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia Menos";
    }
}


function btnDois() {
    let pontos = document.getElementById("pontoDois");
    let maisTexto = document.getElementById("maisDois");
    let btnLeiaMais = document.getElementById("btnDois");

    if (pontos.style.display == "none") {

        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia Mais";

    } else {

        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia Menos";
    }
}

function btnTres() {
    let pontos = document.getElementById("pontoTres");
    let maisTexto = document.getElementById("maisTres");
    let btnLeiaMais = document.getElementById("btnTres");

    if (pontos.style.display == "none") {

        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia Mais";

    } else {

        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia Menos";
    }
}

function btnQuatro() {
    let pontos = document.getElementById("pontoQuatro");
    let maisTexto = document.getElementById("maisQuatro");
    let btnLeiaMais = document.getElementById("btnQuatro");

    if (pontos.style.display == "none") {

        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia Mais";

    } else {

        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia Menos";
    }
}

function btnCinco() {
    let pontos = document.getElementById("pontoCinco");
    let maisTexto = document.getElementById("maisCinco");
    let btnLeiaMais = document.getElementById("btnCinco");

    if (pontos.style.display == "none") {

        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia Mais";

    } else {

        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia Menos";
    }
}

function btnSeis() {
    let pontos = document.getElementById("pontoSeis");
    let maisTexto = document.getElementById("maisSeis");
    let btnLeiaMais = document.getElementById("btnSeis");

    if (pontos.style.display == "none") {

        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia Mais";

    } else {

        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia Menos";
    }
}