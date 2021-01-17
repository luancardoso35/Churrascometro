let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...")

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qtdeCarne = adultos * carnePorPessoa(duracao) + (carnePorPessoa(duracao)/2 * criancas)
    let qtdeCerveja = adultos * cervejaPorPessoa(duracao)
    let qtdeBebida = adultos * bebidaPorPessoa(duracao) + (bebidaPorPessoa(duracao)/2 * criancas)

    resultado.innerHTML = '<p>' + qtdeCarne/1000 +'kg de Carne</p>'
    resultado.innerHTML += '<p>' + Math.ceil(qtdeCerveja/355) +' latas de cerveja</p>'
    resultado.innerHTML += '<p>' + Math.ceil(qtdeBebida/2000) +' garrafas de bebidas</p>'
}

function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function bebidaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}

