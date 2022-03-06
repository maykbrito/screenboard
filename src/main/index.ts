import { app, BrowserWindow, screen, globalShortcut } from 'electron'

let win: BrowserWindow
app.allowRendererProcessReuse = true

function createWindow() {
  const mainScreen = screen.getPrimaryDisplay()
  const dimensions = mainScreen.size

  // Create the browser window.
  win = new BrowserWindow({
    width: dimensions.width,
    height: dimensions.height,
    transparent: true,
    frame: false,
    titleBarStyle: 'customButtonsOnHover',
    alwaysOnTop: true,
    hasShadow: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Allows the window stay on top of all other windows
  win.setAlwaysOnTop(true, "screen-saver")
  // Keep the window on all workspaces
  win.setVisibleOnAllWorkspaces(true) 

  // and load the index.html of the app.
  win.loadFile('src/renderer/index.html')
}

function createShortcuts() {
  const { reopen = 'Alt+Shift+w' } = require('../src/shortcuts.js')

  globalShortcut.register(reopen, WindowVisibility.toggle)
}

// To enable transparency on Linux
if(process.platform === "linux") {
  app.commandLine.appendSwitch('enable-transparent-visuals');
  app.disableHardwareAcceleration();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app
  .whenReady()
  .then(() => setTimeout(createWindow, 200))
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

/**
 *
 *  Toggle Window Visibility
 *  in macOS we can use win.show() or win.hide() to toggle visibility.
 *
 *  in Win and Linux we can use win.minimize() or win.maximize() to toggle visibility.
 */
const isMacOS = process.platform === 'darwin'

const WindowVisibility = {
  isVisible: true,

  toggle() {
    const show = isMacOS ? () => recreateWindow() : () => win.maximize()
    const hide = isMacOS ? () => win.close() : () => win.minimize()

    this.isVisible ? show() : hide()
    this.isVisible = !this.isVisible
  }
}

// Allows app display on top of fullscreen apps
if(isMacOS) {
  app.dock.hide()
}