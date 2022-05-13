console.log('JavaScript carregando...');

function validaCPF(cpf) {
    return false;
}

function validacao() {
    console.log('Iniciando validação CPF');

    let cpf = document.getElementById('CPF-digitado').value;
    console.log(cpf);

    let resultadoValidacao = validaCPF(cpf);

    if(resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}