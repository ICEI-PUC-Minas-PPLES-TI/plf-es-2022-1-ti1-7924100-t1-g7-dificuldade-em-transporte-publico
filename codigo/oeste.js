// ELEMENTOS DA 1a CARTA APENAS
let nome = document.querySelector('#nome')
let rota = document.querySelector('#rota')
let horario = document.querySelector('#horario')
let tempo = document.querySelector('#tempo')

// section que acomoda todas as cartas
let sectionConteudos = document.querySelector('.conteudos')

// ENDERECO DO ARQUIVO JSON
const url = 'oeste.json';


function pegarDados() {
    fetch(url)
        .then(response => response.json())
        .then(dados => {
            if (dados.erro) {
                console.log("Erro ao acessar o JSON")
                return
            }

            montarCarta(dados);

            // // console.log(dados)
            // // Quantidade de regiões
            // let qtdRegiao = (dados.regiao.length)
            // console.log("Quant. de regioes " + qtdRegiao)
            // // passe o valor de i no parametro
            // atribuirDados2(dados, i)
        })
} // fim pegarDados

// atribuir dados individualmente, ou seja, so para uma carta
// ela so funciona se for chamada dentro da funcao pegarDados
function atribuirDados(dados, i) {
    nome.textContent = dados.oeste[i].nome
    rota.textContent = dados.oeste[i].rota
    horario.textContent = dados.oeste[i].horario
    tempo.textContent = dados.oeste[i].tempo
}

// SELECIONAR TODOS OS CARDS por class
let nomeOeste = document.getElementsByClassName('nome')
let rotaOeste = document.getElementsByClassName('rota')
let horarioOeste = document.getElementsByClassName('horario')
let tempoOeste = document.getElementsByClassName('tempo')

// ATRIBUIR DADOS PARA TODOS OS CARDs
// Selecionamos eles por class, com isso temos um array para cada elemento
// agora vamos atribuir para cada posicao os valores que pegamos
function atribuirDados2(dados, i) {
    nomeOeste[i].textContent = dados.oeste[i].nome
    rotaOeste[i].textContent = dados.oeste[i].rota
    horarioOeste[i].textContent = dados.oeste[i].horario
    tempoOeste[i].textContent = dados.oeste[i].tempo
}

// usamos as funcoes createElement e appendChild
// para criar article (elemento html que vai acomodar cada carta)
// criamos tambem img, h2 e h3. Depois colocamos eles dentro do article
function montarCarta(dados) {

    for (let i = 0; i < dados.oeste.length; i++) {
        const rota = dados.oeste[i];
        // CARD
        let carta = document.createElement("article")
        carta.setAttribute('class', 'card')
        sectionConteudos.appendChild(carta)

        // NOME DA ROTA
        let nomeOeste = document.createElement("h2")
        nomeOeste.setAttribute('class', 'nome')
        carta.appendChild(nomeOeste)
        nomeOeste.textContent = rota.nome 

        // NUMERO DA ROTA
        let rotaOeste = document.createElement("h3")
        rotaOeste.setAttribute('class', 'rota')
        carta.appendChild(rotaOeste)
        rotaOeste.textContent = rota.rota + ': Linha'

        // HORARIO DA ROTA
        let horarioOeste = document.createElement("h3")
        horarioOeste.setAttribute('class', 'horario')
        carta.appendChild(horarioOeste)
        horarioOeste.textContent = rota.horario + ':00'

        // TEMPO 
        let tempoOeste = document.createElement("h3")
        tempoOeste.setAttribute('class', 'tempo')
        carta.appendChild(tempoOeste)
        tempoOeste.textContent = rota.tempo + ' min'
    }

}


document.body.onload = () => {
    pegarDados()
}



