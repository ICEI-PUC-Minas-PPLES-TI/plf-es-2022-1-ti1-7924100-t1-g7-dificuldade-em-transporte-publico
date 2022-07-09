
const limparFormulario = (endereco)=>
{
    document.getElementById('endereço').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('linhas').value = ''; //siafi = linha
}

const preencherFormulario = (endereco)=>
{
    document.getElementById('endereço').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
    
    var arr = [];
    while(arr.length <4){
        var r = Math.floor(Math.random() * 100) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);
    document.getElementById('linhas').value = arr; //siafi = linha , endereco.siafi

}

const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() =>
{
    limparFormulario();
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep))
    {
    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty('erro'))
    {
        document.getElementById('endereço').value = 'CEP não encontrado!';
    }else
    {
        preencherFormulario(endereco);
    }
    }else
    {
        document.getElementById('endereço').value = 'CEP incorreto';
    }
}


document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);