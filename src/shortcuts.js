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
        modes: {
            pencil:"w",
            eraser:"e"
        },
        size: {
            increase: "d",
            decrease: "s",
        },
        colors: {
             '#FF0000': "r", // red
             '#00FF00': "g", // green
             '#0000FF': "b", // blue
             '#FDFD1F': "y", // yellow
             '#000000': "a" //black
        }
    }
}