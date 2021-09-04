const { app, BrowserWindow} = require('electron')
const path = require('path')

var teste = "Texto de teste"

function createWindow () {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences : {
            // path.join - junta pedaços de diretórios | __dirname - o diretório em que o script está
            // sendo executado
            preload: path.join(__dirname, 'preload.js') 
        }
    })

    window.loadFile(path.join(__dirname, 'index.html'))
}


app.whenReady().then(() => {
    createWindow()

    // Garante que uma nova janela seja criada caso o app esteja rodando em segundo plano no MacOS
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Fecha o app ao fechar todas as janelas se o sistema for Linux ou Windows
app.on('close-all-windows', () => {
    if (process.plataform !== 'darwin') app.quit()  
})