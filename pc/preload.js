// Script chamado antes do renderer, que tem acesso tanto ao DOM quanto ao
// ambiente Node.js

var body = document.getElementsByTagName('body')[0]

body.innerHTML = `<p>${teste}</p>` // pega variável do main.js