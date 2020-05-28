//backend
const {app, BrowserWindow } = require('electron');


function createWindow(){
    let mainWindow = new BrowserWindow({
    width: 800,
    height: 600
    });

mainWindow.loadFile(__dirname + '/src/index.html');
mainWindow.on('closed', function(){
    mainWindow = null;
})

}

app.on('ready', createWindow);