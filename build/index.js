"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let win;
electron_1.app.allowRendererProcessReuse = true;
function createWindow() {
    const mainScreen = electron_1.screen.getPrimaryDisplay();
    const dimensions = mainScreen.size;
    // Create the browser window.
    win = new electron_1.BrowserWindow({
        width: dimensions.width,
        height: dimensions.height,
        transparent: true,
        frame: false,
        titleBarStyle: 'customButtonsOnHover',
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true
        }
    });
    // and load the index.html of the app.
    win.loadFile('public/index.html');
    // win.webContents.toggleDevTools()
}
function createShortcuts() {
    const { reopen = 'Alt+Shift+w' } = require('../src/shortcuts');
    electron_1.globalShortcut.register(reopen, WindowVisibility.toggle);
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app
    .whenReady()
    .then(() => setTimeout(createWindow, 200))
    .then(createShortcuts);
// Quit when all windows are closed.
electron_1.app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', recreateWindow);
function recreateWindow() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        setTimeout(createWindow, 200);
    }
}
/**
 *
 *  Toggle Window Visibility
 *  in macOS we can use win.show() or win.hide() to toggle visibility.
 *
 *  in Win and Linux we can use win.minimize() or win.maximize() to toggle visibility.
 */
const isMacOS = process.platform === 'darwin';
const WindowVisibility = {
    isVisible: true,
    toggle() {
        const show = isMacOS ? () => recreateWindow() : () => win.maximize();
        const hide = isMacOS ? () => win.close() : () => win.minimize();
        this.isVisible ? show() : hide();
        this.isVisible = !this.isVisible;
    }
};
// Allows app display on top of fullscreen apps
if (isMacOS) {
    electron_1.app.dock.hide();
}
