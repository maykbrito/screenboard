const { app, BrowserWindow, screen, globalShortcut } = require('electron')

let win = null

function createWindow () {
    const mainScreen = screen.getPrimaryDisplay();
    const dimensions = mainScreen.size;

    // Create the browser window.
    app.allowRendererProcessReuse = true
    win = new BrowserWindow({
      width: dimensions.width,
      height: dimensions.height,
      transparent: true,
      frame: false,
      titleBarStyle: 'hidden',
      webPreferences: {
        nodeIntegration: true
      }
    })

    // and load the index.html of the app.
    win.loadFile('index.html')
}


function createShortcuts() {
    globalShortcut.register('Cmd+F12', recreateWindow)
    globalShortcut.register('Cmd+C', () => win.webContents.send('clear'))
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady()
.then(createWindow)
.then(createShortcuts)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', recreateWindow)


function recreateWindow() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
}

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
