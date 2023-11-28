// IDs: inCandidato, inAcertos, btAdicionar, btListar, btEtapa, outResposta.

var informacoes = [];

function Adicionar(){
    var inCandidato = document.getElementById("inCandidato");
    var candidato = inCandidato.value;

    var inAcerto = document.getElementById("inAcertos");
    var acertos = Number(inAcerto.value);

    if(inCandidato == "" || inAcerto == "" || isNaN(acertos)){
        alert("Por favor, insira valores válidos!")
        inCandidato.focus()
        return;
    }

    informacoes.push({candidato: candidato, acertos: acertos});

    console.log(informacoes);
    Listar();
}

function Listar(){
    var outResposta = document.getElementById("outResposta");

    var lista = "";
    
    for(var i = 0; i < informacoes.length; i++){
        lista += informacoes[i].candidato + " - " + informacoes[i].acertos + "<br>";
    }

    outResposta.innerHTML = lista;
}

function Etapa(){
    var outResposta = document.getElementById("outResposta");

    var aprovacao = prompt("Qual o número de acertos para aprovação?");

    if(isNaN(aprovacao) || aprovacao == ""){
        alert("Por favor informe o número necessário para aprovar...");
        var aprovacao = Number(prompt("Qual o número de acertos para aprovação?"));
    }

    var aprovados = [];
    var listaAprovados = "";

    for(var i = 0; i < informacoes.length; i++){
        if(informacoes[i].acertos >= aprovacao){
            aprovados.push({candidato: informacoes[i].candidato, acertos: informacoes[i].acertos})
        }
    }
    for(var i = 0; i < aprovados.length; i++){
        listaAprovados += aprovados[i].candidato + " - " + aprovados[i].acertos + "<br>";
    }

    outResposta.innerHTML = listaAprovados;
}

var adicionar = document.getElementById("btAdicionar");
adicionar.addEventListener("click", Adicionar);

var listar = document.getElementById("btListar");
listar.addEventListener("click", Listar);

var etapa = document.getElementById("btEtapa");
etapa.addEventListener("click", Etapa);