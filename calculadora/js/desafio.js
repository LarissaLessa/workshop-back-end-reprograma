/*  
LARISSA LESSA - DESAFIO REPROGRAMA -21/02/2021
Estrutura do desafio
1- Capturar os elementos html
2- ligar o clique do botao e mostrar no console que está funcionando
3- Calcular quantidade o valor total do custo, usando a quantidade de valor horas * hora projeto. Converti para 2 casas o resultado
5 - Trocar resposta pelo resultado da multiplicação

*/

//1- Capturar os elementos html 

//Valor Hora 
var valorHora = document.getElementById("valor-hora")
console.log(valorHora)

//Horas projeto
var horasProjeto = document.getElementById("horas-projeto")
console.log(horasProjeto)

//Resposta
var resposta = document.getElementById("resposta")
console.log(resposta)

//2- ligar o clique do botao e mostrar no console que está funcionando
function calcular(){
   console.log("Clique está funcionando") //mostrar no console que está funcionando

    //3- Calcular quantidade o valor total do custo, usando a quantidade de valor horas * hora projeto.
    var valorTotal = (valorHora.valueAsNumber * horasProjeto.valueAsNumber).toFixed(2) //Converti para 2 casas o resultado
    console.log(valorTotal)

    //5 - Trocar resposta pelo resultado da multiplicação
    resposta.textContent = "R$ " + valorTotal

}