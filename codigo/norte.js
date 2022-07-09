// ELEMENTOS DA 1a CARTA APENAS
let nome = document.querySelector('#nome')
let rota = document.querySelector('#rota')
let horario = document.querySelector('#horario')
let tempo = document.querySelector('#tempo')

// section que acomoda todas as cartas
let sectionConteudos = document.querySelector('.conteudos')

// ENDERECO DO ARQUIVO JSON
const url = 'norte.json';


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
    nome.textContent = dados.norte[i].nome
    rota.textContent = dados.norte[i].rota
    horario.textContent = dados.norte[i].horario
    tempo.textContent = dados.norte[i].tempo
}

// SELECIONAR TODOS OS CARDS por class
let nomeNorte = document.getElementsByClassName('nome')
let rotaNorte = document.getElementsByClassName('rota')
let horarioNorte = document.getElementsByClassName('horario')
let tempoNorte = document.getElementsByClassName('tempo')

// ATRIBUIR DADOS PARA TODOS OS CARDs
// Selecionamos eles por class, com isso temos um array para cada elemento
// agora vamos atribuir para cada posicao os valores que pegamos
function atribuirDados2(dados, i) {
    nomeNorte[i].textContent = dados.norte[i].nome
    rotaNorte[i].textContent = dados.norte[i].rota
    horarioNorte[i].textContent = dados.norte[i].horario
    tempoNorte[i].textContent = dados.norte[i].tempo
}

// usamos as funcoes createElement e appendChild
// para criar article (elemento html que vai acomodar cada carta)
// criamos tambem img, h2 e h3. Depois colocamos eles dentro do article
function montarCarta(dados) {

    for (let i = 0; i < dados.norte.length; i++) {
        const rota = dados.norte[i];
        // CARD
        let carta = document.createElement("article")
        carta.setAttribute('class', 'card')
        sectionConteudos.appendChild(carta)

        // NOME DA ROTA
        let nomeNorte = document.createElement("h2")
        nomeNorte.setAttribute('class', 'nome')
        carta.appendChild(nomeNorte)
        nomeNorte.textContent = rota.nome 

        // NUMERO DA ROTA
        let rotaNorte = document.createElement("h3")
        rotaNorte.setAttribute('class', 'rota')
        carta.appendChild(rotaNorte)
        rotaNorte.textContent = rota.rota + ': Linha'

        // HORARIO DA ROTA
        let horarioNorte = document.createElement("h3")
        horarioNorte.setAttribute('class', 'horario')
        carta.appendChild(horarioNorte)
        horarioNorte.textContent = rota.horario + ':00'

        // TEMPO 
        let tempoNorte = document.createElement("h3")
        tempoNorte.setAttribute('class', 'tempo')
        carta.appendChild(tempoNorte)
        tempoNorte.textContent = rota.tempo + ' min'
    }

}


document.body.onload = () => {
    pegarDados()
}



