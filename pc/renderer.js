// Script que vai funcionar no lado web

var body = document.getElementsByTagName('body')[0]
var botao = document.querySelector('#botao')

botao.addEventListener('click', texto)

function texto(){
    var par = document.createElement('p')
    par.innerText = "Texto adicionado via código"
    
    body.appendChild(par)
}