console.log('JavaScript carregando...');

function validaCPF(cpf) {
    if(cpf.length != 11) {
        return false;
    } else {

        let numeros = cpf.substring(0, 9);
        let digitos = cpf.substring(9);

        let soma = 0;

        for(let index = 10; index > 1; index -= 1){
            soma += numeros.charAt(10 - index) * index;
        }

        let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        
        // validação do primeiro digito
        if(resultado != digitos.charAt(0)) {
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for(let cont = 11; cont > 1; cont -= 1) {
            soma += numeros.charAt(11 - cont) * cont;
        }
        
        //validação do segundo digito
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        if(resultado != digitos.charAt(1)) {
            return false;
        }

        return true;
    }
}

function validacao() {
    console.log('Iniciando validação CPF');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    let cpf = document.getElementById('CPF-digitado').value;
    console.log(cpf);

    let resultadoValidacao = validaCPF(cpf);

    if(resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}