const { app, BrowserWindow, screen, globalShortcut } = require('electron')

let win = null

function createWindow () {
	const mainScreen = screen.getPrimaryDisplay();
    const dimensions = mainScreen.size;

  // Create the browser window.
  // Notes for windows 10 compatility:
  // Limitations of the transparent window described in:
  // https://www.electronjs.org/docs/api/frameless-window
  // A Transparent image in Css style works to make screen clickable

  win = new BrowserWindow({
    width: dimensions.width,
    height: dimensions.height,
    transparent:true,
    frame:false,
	//alwaysOnTop: true,
    //titleBarStyle: 'hidden',
    // alwaysOnTop: true,
    // webPreferences: {
    //   nodeIntegration: true
    // }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
}




function createShortcuts() {
    globalShortcut.register('Command+F12', recreateWindow)
    globalShortcut.register('Control+F12', relauchApp)
    globalShortcut.register('CommandOrControl+F11', minimazeWindow)
    globalShortcut.register('CommandOrControl+B', clearWindow)
    
    // to register Shotchuts for both macOS and windows you can use: 
    // CommandOrControl+F12
    
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady()
// Notes for Linux compatility:
// When ready event is fired. Electron is not really ready has transparency does not work.
// We should add delay to make app working :
// https://github.com/electron/electron/issues/16809

.then(setTimeout(createWindow, 500))
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
  
    //
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      setTimeout(createWindow, 500)
    }
}

function relauchApp() {
  
  // Notes for windows 10 compatility:
  // With command we can Relaunch de app
  //
  app.relaunch({ args: process.argv.slice(1).concat(['--relaunch']) })
  app.exit(0)
  //
  //

}

function clearWindow(){

  // Notes for windows 10 compatility:
  // With command you can clear de screen windows and linux
  // code from https://github.com/cl4udino
  win.loadFile('index.html')
}


function minimazeWindow(){

  // Notes for  Linux compatility:
  // With command you maximize and minimeze windows with 
  // code from https://github.com/cl4udino

  if (win.isMaximized()) {
    win.minimize();
  }
  if (win.isMinimized()) {
    win.maximize();
  }
 
}

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.