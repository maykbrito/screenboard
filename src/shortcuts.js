// Electron (globalShortcut)
if (typeof module != 'undefined') {
	module.exports = {
        reopen: 'Alt+Shift+w', 
    }
}

// browser shortcuts using Mousetrap lib
if (typeof window != 'undefined') {
	window.shortcuts = {
        undo: 'mod+z', // mod is same of Ctrl or Command
        redo: 'mod+y',
        clear: 'mod+backspace',
        toggleOptions: 'esc',
        colors: {
             r: '#FF0000',
             g: '#00FF00',
             b: '#0000FF',
             y: '#FDFD1F',
             a: '#000000'
        }
    }
}