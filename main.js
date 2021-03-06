const electron = require('electron');
const url = require('url');
const path = require('path');
const menu = require('./mainMenuTemplate.js');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

// listen for app to be ready
app.on('ready', function () {
    // create new window
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800
    });

    // open dev tools
    mainWindow.webContents.openDevTools();

    // load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    // build menu from template
    const mainMenu = Menu.buildFromTemplate(menu);

    // insert menu template
    Menu.setApplicationMenu(mainMenu);
});

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})