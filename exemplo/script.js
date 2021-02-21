//Olá mundo
console.log("Olá Mundo!")

var resposta = document.getElementById("respostaAno")
console.log(resposta)


var ano = document.getElementById("ano")
console.log(ano)



function cliquei(){
    resposta.textContent = ano.value
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
