//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xmlhttp = new XMLHttpRequest();
var urlApi = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72/';
xmlhttp.onreadystatechange = function() {
    //    console.log('entrou na function');
    if (this.readyState == 4 && this.status == 200) {
        //        console.log('entro no if ' + this.status + this.readyState);
        var listaHospedagens = JSON.parse(this.responseText);
        trataHospedagens(listaHospedagens, "Todas");
    }
};
xmlhttp.open("GET", urlApi, true);
xmlhttp.send();

function trataHospedagens(hospedagens, tipoAcomodacao) {
    //console.log('entrou em myfunction ' + hospedagens + hospedagens.length);
    var linhaHospedagem;
    let linhaCards = document.getElementById("linhaCards");
    linhaCards.innerHTML = "";
    console.log("função " + hospedagens + tipoAcomodacao);
    for (linhaHospedagem = 0; linhaHospedagem < hospedagens.length; linhaHospedagem++) {
        // Obtem a div principal
        //console.log('entrou no for ' + hospedagens[linhaHospedagem].name)
        // Cria a divisÃ£o de coluna principal  para inclusÃ£o dos cards de hospedagens
        var tipoHospedagem = hospedagens[linhaHospedagem].property_type;
        var colunaCards = document.createElement("div");
        // Adiciona a classe e ID  da coluna principal
        colunaCards.className = "col-md-4";
        colunaCards.id = "colunaCards";

        //Cria a divisÃ£o  de cada card e define as propriedades
        var cardEstadia = document.createElement("div");
        cardEstadia.className = "card";
        cardEstadia.id = "cardEstadia";

        //Cria a divisÃ£o  para inclusao da imagem no card e define as propriedades
        var imagemEstadia = document.createElement("div");
        // Adiciona a classe, ID e estilo na divisao de imagem do card
        imagemEstadia.className = "card-img-top card-image image-back";
        imagemEstadia.id = "imagemEstadia";
        imagemEstadia.style.backgroundImage = "url(" + hospedagens[linhaHospedagem].photo + ")";
        var imgImagem = document.createElement("img");
        imgImagem.className = "imagemHospedagem";
        //imgImagem.src = hospedagens[linhaHospedagem].photo;


        //Cria a divisÃ£o  para inclusao do nome da hospedagem
        var nomeEstadia = document.createElement("div");
        // Adiciona a classe, ID e estilo na divisao de imagem do card
        nomeEstadia.className = "card-body";
        nomeEstadia.id = "nomeEstadia";
        var paragrafoEstadia = document.createElement("p");
        paragrafoEstadia.className = "card-text-nome";
        paragrafoEstadia.innerHTML = hospedagens[linhaHospedagem].name;

        //Cria a divisÃ£o  para inclusao do preÃ§o da hospedagem
        var precoEstadia = document.createElement("div");
        // Adiciona a classe, ID e estilo na divisao de imagem do card
        precoEstadia.className = "card-body";
        precoEstadia.id = "precoEstadia";
        var paragrafoPreco = document.createElement("p");
        paragrafoPreco.className = "card-text-preco";
        //paragrafoPreco.responseText = "R$ " + hospedagens[linhaHospedagem].price + " diaria por adulto";
        paragrafoPreco.innerHTML = "R$ " + hospedagens[linhaHospedagem].price + " diaria por adulto";

        //Cria a divisÃ£o  para inclusao das propriedades
        var detalheEstadia = document.createElement("div");
        // Adiciona a classe, ID e estilo na divisao de imagem do card
        detalheEstadia.className = "card-footer";
        detalheEstadia.id = "detalheEstadia";

        // chama função para tratar cores por tipo de propriedade

        trataTipoPropriedade(tipoHospedagem, detalheEstadia);

        detalheEstadia.innerHTML = hospedagens[linhaHospedagem].property_type;


        // retorna no consolde os dados obtidos no Json da API por ocorrencia
        // console.log("nome " + linhaHospedagem + hospedagens[linhaHospedagem].name);
        console.log("acomodacao informada " + tipoAcomodacao);
        console.log("acomodacao API " + tipoHospedagem);
        if (tipoAcomodacao === "Todas" || tipoAcomodacao == tipoHospedagem) {
            // Montar o html da linha de cards
            colunaCards.appendChild(cardEstadia);
            cardEstadia.appendChild(imagemEstadia);
            imagemEstadia.appendChild(imgImagem);
            cardEstadia.appendChild(nomeEstadia);
            nomeEstadia.appendChild(paragrafoEstadia);
            cardEstadia.appendChild(precoEstadia);
            precoEstadia.appendChild(paragrafoPreco);
            cardEstadia.appendChild(detalheEstadia);
            linhaCards.appendChild(colunaCards);
        }
    }
};

function trataTipoPropriedade(tipoPropriedade, elemento) {
    switch (tipoPropriedade) {
        case "Apartamento":
            elemento.style.color = "deeppink";
            break;
        case "Casa":
            elemento.style.color = "blue";
            break;
        case "Chácara":
            elemento.style.color = "green";
            break;
        case "Quarto":
            elemento.style.color = "blueviolet";
            break;
        case "Sítio":
            elemento.style.color = "darkgreen";
            break;
        case "Estúdio":
            elemento.style.color = "orange";
            break;
    }
    return;
};

function buscaAcomodacao() {
    var xmlhttp = new XMLHttpRequest();
    var urlApi = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72/';
    xmlhttp.onreadystatechange = function() {
        //    console.log('entrou na function');
        if (this.readyState == 4 && this.status == 200) {
            //        console.log('entro no if ' + this.status + this.readyState);
            var tipoBusca = document.getElementById("inputGroupSelect03");
            console.log("Acomodacao escolhida " + tipoBusca);
            var acomodacaoSelecionada = tipoBusca.options[tipoBusca.selectedIndex].value;
            console.log("Acomodacao escolhida " + acomodacaoSelecionada);
            var listaHospedagens = JSON.parse(this.responseText);
            console.log("Entrada função " + listaHospedagens + acomodacaoSelecionada);
            trataHospedagens(listaHospedagens, acomodacaoSelecionada);
        };

    };
    xmlhttp.open("GET", urlApi, true);
    xmlhttp.send();

};