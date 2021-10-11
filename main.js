let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputHoras = document.getElementById("horas");

let resultado = document.getElementById("resultado")

function calcularBbq() {
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let horas = inputHoras.value;

    let carneAdulto = carnePorPessoa(horas) * adultos + (carnePorPessoa(horas) / 2 * criancas)

    let cervejaAdulto = cervejaPorPessoa(horas) * adultos;

    let bebidasCrianca = bebidasPorPessoa(horas) * adultos + (bebidasPorPessoa(horas) / 2 * criancas)
    
    
    resultado.innerHTML = `<li class="carne">${carneAdulto/1000} Kg de Carne</li>`
    resultado.innerHTML += `<li class="cerveja">${Math.ceil(cervejaAdulto/1000)} Litros de Cerveja</li>`
    resultado.innerHTML += `<li class="cola">${Math.ceil(bebidasCrianca/1000)} Litros de Refrigerante/Água</li>`


}


function carnePorPessoa(horas) {
    if (horas >= 6) {
        return 600;
    }else{
        return 400;
    }
}

function cervejaPorPessoa(horas) {
    if (horas >= 6) {
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPorPessoa(horas) {
    if (horas >= 6) {
        return 1500;
    }else{
        return 1000;
    }
}



