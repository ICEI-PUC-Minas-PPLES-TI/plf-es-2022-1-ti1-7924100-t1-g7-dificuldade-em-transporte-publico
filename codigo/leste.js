// ELEMENTOS DA 1a CARTA APENAS
let nome = document.querySelector('#nome')
let rota = document.querySelector('#rota')
let horario = document.querySelector('#horario')
let tempo = document.querySelector('#tempo')

// section que acomoda todas as cartas
let sectionConteudos = document.querySelector('.conteudos')

// ENDERECO DO ARQUIVO JSON
const url = 'leste.json';


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
    nome.textContent = dados.leste[i].nome
    rota.textContent = dados.leste[i].rota
    horario.textContent = dados.leste[i].horario
    tempo.textContent = dados.leste[i].tempo
}

// SELECIONAR TODOS OS CARDS por class
let nomeLeste = document.getElementsByClassName('nome')
let rotaLeste = document.getElementsByClassName('rota')
let horarioLeste = document.getElementsByClassName('horario')
let tempoLeste = document.getElementsByClassName('tempo')

// ATRIBUIR DADOS PARA TODOS OS CARDs
// Selecionamos eles por class, com isso temos um array para cada elemento
// agora vamos atribuir para cada posicao os valores que pegamos
function atribuirDados2(dados, i) {
    nomeLeste[i].textContent = dados.leste[i].nome
    rotaLeste[i].textContent = dados.leste[i].rota
    horarioLeste[i].textContent = dados.leste[i].horario
    tempoLeste[i].textContent = dados.leste[i].tempo
}

// usamos as funcoes createElement e appendChild
// para criar article (elemento html que vai acomodar cada carta)
// criamos tambem img, h2 e h3. Depois colocamos eles dentro do article
function montarCarta(dados) {

    for (let i = 0; i < dados.leste.length; i++) {
        const rota = dados.leste[i];
        // CARD
        let carta = document.createElement("article")
        carta.setAttribute('class', 'card')
        sectionConteudos.appendChild(carta)

        // NOME DA ROTA
        let nomeLeste = document.createElement("h2")
        nomeLeste.setAttribute('class', 'nome')
        carta.appendChild(nomeLeste)
        nomeLeste.textContent = rota.nome 

        // NUMERO DA ROTA
        let rotaLeste = document.createElement("h3")
        rotaLeste.setAttribute('class', 'rota')
        carta.appendChild(rotaLeste)
        rotaLeste.textContent = rota.rota + ': Linha'

        // HORARIO DA ROTA
        let horarioLeste = document.createElement("h3")
        horarioLeste.setAttribute('class', 'horario')
        carta.appendChild(horarioLeste)
        horarioLeste.textContent = rota.horario + ':00'

        // TEMPO 
        let tempoLeste = document.createElement("h3")
        tempoLeste.setAttribute('class', 'tempo')
        carta.appendChild(tempoLeste)
        tempoLeste.textContent = rota.tempo + ' min'
    }

}


document.body.onload = () => {
    pegarDados()
}



