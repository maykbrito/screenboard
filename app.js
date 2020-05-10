const { app, BrowserWindow, screen, globalShortcut } = require('electron')
const shortcuts = require('./shortcuts')

let win = null
app.allowRendererProcessReuse = true

function createWindow () {
    const mainScreen = screen.getPrimaryDisplay();
    const dimensions = mainScreen.size;

  // Create the browser window.
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
  const { 
    reopen = 'CmdOrCtrl+F12', 
    clear = 'CmdOrCtrl+Shift+C', 
    minimize = 'CmdOrCtrl+F11'
  } = shortcuts
  
  globalShortcut.register(reopen, recreateWindow)
  globalShortcut.register(minimize, minimizeWindow)
  globalShortcut.register(clear, () => win.webContents.send('clear'))
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady()
.then(setTimeout(createWindow, 200))
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
      setTimeout(createWindow, 200)
    }
}

function minimizeWindow(){
  if (win.isMaximized()) {
    win.minimize();
  }
  if (win.isMinimized()) {
    win.maximize();
  }
}

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
