// ELEMENTOS DA 1a CARTA APENAS
let nome = document.querySelector('#nome')
let rota = document.querySelector('#rota')
let horario = document.querySelector('#horario')
let tempo = document.querySelector('#tempo')

// section que acomoda todas as cartas
let sectionConteudos = document.querySelector('.conteudos')

// ENDERECO DO ARQUIVO JSON
const url = 'bus.json';


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
    nome.textContent = dados.regiao[i].nome
    rota.textContent = dados.regiao[i].rota
    horario.textContent = dados.regiao[i].horario
    tempo.textContent = dados.regiao[i].tempo
}

// SELECIONAR TODOS OS CARDS por class
let nomeRegiao = document.getElementsByClassName('nome')
let rotaRegiao = document.getElementsByClassName('rota')
let horarioRegiao = document.getElementsByClassName('horario')
let tempoRegiao = document.getElementsByClassName('tempo')

// ATRIBUIR DADOS PARA TODOS OS CARDs
// Selecionamos eles por class, com isso temos um array para cada elemento
// agora vamos atribuir para cada posicao os valores que pegamos
function atribuirDados2(dados, i) {
    nomeRegiao[i].textContent = dados.regiao[i].nome
    rotaRegiao[i].textContent = dados.regiao[i].rota
    horarioRegiao[i].textContent = dados.regiao[i].horario
    tempoRegiao[i].textContent = dados.regiao[i].tempo
}

// usamos as funcoes createElement e appendChild
// para criar article (elemento html que vai acomodar cada carta)
// criamos tambem img, h2 e h3. Depois colocamos eles dentro do article
function montarCarta(dados) {

    for (let i = 0; i < dados.regiao.length; i++) {
        const rota = dados.regiao[i];
        // CARD
        let carta = document.createElement("article")
        carta.setAttribute('class', 'card')
        sectionConteudos.appendChild(carta)

        // NOME DA ROTA
        let nomeRegiao = document.createElement("h2")
        nomeRegiao.setAttribute('class', 'nome')
        carta.appendChild(nomeRegiao)
        nomeRegiao.textContent = rota.nome 

        // NUMERO DA ROTA
        let rotaRegiao = document.createElement("h3")
        rotaRegiao.setAttribute('class', 'rota')
        carta.appendChild(rotaRegiao)
        rotaRegiao.textContent = rota.rota + ': Linha'

        // HORARIO DA ROTA
        let horarioRegiao = document.createElement("h3")
        horarioRegiao.setAttribute('class', 'horario')
        carta.appendChild(horarioRegiao)
        horarioRegiao.textContent = rota.horario + ':00'

        // TEMPO 
        let tempoRegiao = document.createElement("h3")
        tempoRegiao.setAttribute('class', 'tempo')
        carta.appendChild(tempoRegiao)
        tempoRegiao.textContent = rota.tempo + ' min'
    }

}


document.body.onload = () => {
    pegarDados()
}



