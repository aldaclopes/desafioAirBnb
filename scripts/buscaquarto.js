//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xmlhttp = new XMLHttpRequest();
var urlApi = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72/';
xmlhttp.onreadystatechange = function() {
    //    console.log('entrou na function');
    if (this.readyState == 4 && this.status == 200) {
        //        console.log('entro no if ' + this.status + this.readyState);
        var listaHospedagens = JSON.parse(this.responseText);
        trataHospedagens(listaHospedagens);
    }
};
xmlhttp.open("GET", urlApi, true);
xmlhttp.send();

function trataHospedagens(hospedagens) {
    console.log('entrou em myfunction ' + hospedagens + hospedagens.length);
    var linhaHospedagem;
    for (linhaHospedagem = 0; linhaHospedagem < hospedagens.length; linhaHospedagem++) {
        // Obtem a div principal
        console.log('entrou no for ' + hospedagens[linhaHospedagem].name);
        var linhaCards = document.getElementById("linhaCards");

        // Cria a divisão de coluna principal  para inclusão dos cards de hospedagens
        var colunaCards = document.createElement("div");
        // Adiciona a classe e ID  da coluna principal
        colunaCards.className = "col-md-4";
        colunaCards.id = "colunaCards";

        //Cria a divisão  de cada card e define as propriedades
        var cardEstadia = document.createElement("div");
        cardEstadia.className = "card";
        cardEstadia.id = "cardEstadia";

        //Cria a divisão  para inclusao da imagem no card e define as propriedades
        var imagemEstadia = document.createElement("div");
        // Adiciona a classe, ID e estilo na divisao de imagem do card
        imagemEstadia.className = "card-img-top card-image image-back";
        imagemEstadia.id = "imagemEstadia";
        imagemEstadia.style.backgroundImage = "url(" + hospedagens[linhaHospedagem].photo + ")";
        var imgImagem = document.createElement("img");
        imgImagem.className = "imagemHospedagem";
        //imgImagem.src = hospedagens[linhaHospedagem].photo;


        //Cria a divisão  para inclusao do nome da hospedagem
        var nomeEstadia = document.createElement("div");
        // Adiciona a classe, ID e estilo na divisao de imagem do card
        nomeEstadia.className = "card-body";
        nomeEstadia.id = "nomeEstadia";
        var paragrafoEstadia = document.createElement("p");
        paragrafoEstadia.className = "card-text";
        paragrafoEstadia.innerHTML = hospedagens[linhaHospedagem].name;

        //Cria a divisão  para inclusao do preço da hospedagem
        var precoEstadia = document.createElement("div");
        // Adiciona a classe, ID e estilo na divisao de imagem do card
        precoEstadia.className = "card-body";
        precoEstadia.id = "precoEstadia";
        var paragrafoPreco = document.createElement("p");
        paragrafoPreco.className = "card-text";
        paragrafoPreco.responseText = "R$ " + hospedagens[linhaHospedagem].price + " por dia";
        paragrafoPreco.innerHTML = "R$ " + hospedagens[linhaHospedagem].price + " por dia";

        //Cria a divisão  para inclusao das propriedades
        var detalheEstadia = document.createElement("div");
        // Adiciona a classe, ID e estilo na divisao de imagem do card
        detalheEstadia.className = "card-footer";
        detalheEstadia.id = "detalheEstadia";
        detalheEstadia.innerHTML = hospedagens[linhaHospedagem].property_type;

        // retorna no consolde os dados obtidos no Json da API por ocorrencia
        // console.log("nome " + linhaHospedagem + hospedagens[linhaHospedagem].name);


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