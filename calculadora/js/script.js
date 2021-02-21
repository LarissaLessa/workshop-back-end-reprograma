//algoritmo passo-a-passo
//1- Capturar os elementos html e guardar em variaveis - da linha 9 até a 23
//2- ligar o clique do botao e mostrar no console que está funcionando
//3- Calcular quantidade total de horas no mes, usando a quantidade de horas/dia digitado no input e mostre mo console. Levando em consideração que o mês possui 22 dias de trabalho
//4- Calcular a divisao do salario por total de horas e guardar numa variavel - converti para 2 casas o resultado
//5 - Trocar resposta pelo resultado da divisao

//Ola reprograma
console.log("Ola, Reprograma!")

//1- Capturar os elementos html e guardar em variaveis - da linha 9 até a 23

//Salario
var salario = document.getElementById("ganho-mes")
console.log(salario)

//horasDias
var horasDia = document.getElementById("horas-dia")
console.log(horasDia)

//Resposta
var resposta = document.getElementById("resposta")
console.log(resposta)

//2- ligar o clique do botao e mostrar no console que está funcionando
//Click
function calcularValorHora(){
    //Está funcionando
    console.log("Clique está funcionando")

    //3- Calcular quantidade total de horas no mes, usando a quantidade de horas/dia digitado no input e mostre mo console. Levando em consideração que o mês possui 22 dias de trabalho
    var totalHoras = horasDia.valueAsNumber * 22
    console.log (totalHoras)

    //calculo da hora
    var valorHora = (salario.valueAsNumber/totalHoras)
    console.log(valorHora)

    //4- Calcular a divisao do salario por total de horas e guardar numa variavel - converti para 2 casas o resultado
    var fixado = valorHora.toFixed(2)
    console.log(fixado)

    //5 - Trocar resposta pelo resultado da divisao
    resposta.textContent = "R$ " + fixado

}




