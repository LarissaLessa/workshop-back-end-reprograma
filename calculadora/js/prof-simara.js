//algoritmo
//1- Capturar os elementos html e guardar em variaveis - da linha 9 até a 23
//2- ligar o clique do botao e mostrar no console que está funcionando
//3- Calcular quantidade total de horas no mes, usando a quantidade de horas/dia digitado no input e mostre mo console
//4- Calcular a divisao do salario por total de horas e guardar numa variavel - converti para 2 casas o resultado
//5 - Trocar resposta pelo resultado da divisao


//pega elemento de ganhos no mes 
/*
var salario = document.getElementById("ganho-mes")
console.log(salario)

//pega elemento de horas dia

var horasDia = document.getElementById("horas-dia")
console.log(horasDia)


//pega resultado

var resposta = document.getElementById("resposta")
console.log(resposta)

//ligando o clique do botao 
function calcularValorHora(){
    //bloco de execução
    console.log("o clique está funcionando, gatinha")
    //calcula o valor total de horas no mes de acordo com o que é digitado no input de quantidade de horas/dia, 
    // considerando que sao 22 dias uteis no mes e guarda na variavel totalDeHoras
    var totalDeHoras = horasDia.valueAsNumber * 22
    console.log(totalDeHoras)
    //calcula resultado final e converte para duas casas
    var resultado = (salario.valueAsNumber/totalDeHoras).toFixed(2)
    console.log(resultado)
    //trocar o resultado na tela
    resposta.textContent = "R$ " + resultado
}


---------
Exemplo da parte da manha 

console.log("Olá Mundo!")

var resposta = document.getElementById("respostaAno")
console.log(resposta)

var ano = document.getElementById("ano")
console.log(ano)

function cliquei(){
    console.log(ano.valueAsNumber)
    resposta.textContent = "Resposta: "+ ano.value
}

//quero sobrescrever um elemento/conteúdo que está no meu html
//chamo o meu elemento que eu guardei na variavel ex: resposta.
//innerHTML
//innerText
//textContent - eu uso esse


//como pegar um valor de input 
//chamo a variavel que eu guardei o input ex: ano.
//value
//valueAsNumber

//concatenação 
*/