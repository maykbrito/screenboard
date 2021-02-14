/**
 * options : {
 *	controls: array of controls to initialize with the drawingboard. 
        'Colors', 'Size', and 'Navigation' by default instead of simple strings, 
        you can pass an object to define a control opts
        ie ['Color', { Navigation: { reset: false }}]
 *	color: pencil color ("#000000" by default)
 *	size: pencil size (3 by default)
 *	webStorage: 'session', 'local' or false ('session' by default). 
        store the current drawing in session or local storage and restore 
        it when you come back
 *	droppable: true or false (false by default). 
        If true, dropping an image on the canvas will include it 
        and allow you to draw on it,
 *	errorMessage: html string to put in the board's element on browsers that 
        don't support canvas.
 *	stretchImg: default behavior of image setting on the canvas: set to the 
    canvas width/height or not? false by default
 * }
 */
export default {
    controls: [
        'Color',
        { Size: { type: "range" } },
        { DrawingMode: { filler: false } },
        'Navigation',
        'Download'
    ],
    background: false,
    borderColor: 'transparent', // window border color: Omni Green > '#67e480'
    size: 5,
}