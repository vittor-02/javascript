function mostrarAlerta(){
   alert("bom dia turma do 1°ano adiministrativo")
}


function pedirNome(){
   let nome = prompt("informe o seu nome: ")
   alert("bom dia, " + nome)
}


function somarNumeros(){
   let primeiroValor = Number(prompt("informe o priemeiro numero: "))
   let segundoValor = Number(prompt("informe o segundo numero: "))
   let soma = primeiroValor + segundoValor
   alert("A soma dos numerosé: " + soma)
}


function mudarFormatacao(){
   let resultado = document.getElementById("resultado")
   let nome = prompt("informe o seu nome: ")
   resultado.textContent = "bom dia " + nome
   resultado.style.background = "pink"
}
