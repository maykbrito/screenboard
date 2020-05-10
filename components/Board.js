import Controls from "./controls/index.js"
const { ipcRenderer } = require("electron")

export function Board (canvas) {

    // Working inside canvas, but it's a 2d or 3d context?
    const context = canvas.getContext('2d')

    // catch painting
    let isDrawning = false

    // setup controls
    const controls = new Controls(context)

    // clear the canvas
    canvas.addEventListener('wheel', clearCanvas);

    function clearCanvas() { 
        context.clearRect(0, 0, canvas.width, canvas.height);
        var w = canvas.width;
        canvas.width = 1;
        canvas.width = w;   
    }

    init() // it will start here

    // it will start here
    function init() {
        resize()

        // when resize window
        window.addEventListener('resize', resize)

        // when mouse down
        canvas.addEventListener('mousedown', startPressPen)

        // when mouse up
        canvas.addEventListener('mouseup', stopPressPen)

        // when mouse moving
        canvas.addEventListener('mousemove', draw)

        // when pressed Cmd+Shift+C
        ipcRenderer.on('clear', clear)
    }

    // when change window size, resize canvas
    function resize() {
        canvas.height = window.innerHeight
        canvas.width = window.innerWidth
    }

    // When put pen on board and press to draw
    function startPressPen(event) {
        isDrawning = true

        // start draw here, go make some dots
        draw(event)
    }

    // When get out pen of board and stop
    function stopPressPen() {
        isDrawning = false

        // need to stop the line, so I need to restart the line
        context.beginPath()
    }

    // let's draw when press and moving pen
    function draw (event) {
        // update controls
        controls.updateAll()
        
        // Am I drawning?
        if (!isDrawning) return;

        

        // basic init style of line, in case of it's no control
        // context.lineWidth = 5;
        // context.strokeStyle = 'red'
        context.lineCap = 'round'



        // drawning the line geting mouse position
        context.lineTo(event.clientX, event.clientY)
        context.stroke() // visualize the line

        // I need to start small circle and update his position
        // to get more round line
        context.beginPath()
        context.moveTo(event.clientX, event.clientY)
    }

    // clears the entire screen
    function clear () {
        context.clearRect(0, 0, canvas.width, canvas.height)
    }

}
