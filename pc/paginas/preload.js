// Script chamado antes do renderer, que tem acesso tanto ao DOM quanto ao
// ambiente Node.js
/*
window.addEventListener('DOMContentLoaded', () => {

})
*/

const { contextBridge } = require('electron')

// Compartilha variáveis com o renderer
contextBridge.exposeInMainWorld('share', {
  //country_code = app.getLocaleCountryCode(),
  text: "sample text"
})

