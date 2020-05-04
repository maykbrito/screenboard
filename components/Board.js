import { Controls } from "./Controls.js"

export function Board (canvas) {

    // Working inside canvas, but it's a 2d or 3d context?
    const context = canvas.getContext('2d')

    // catch painting
    let isDrawning = false

    // setup controls
    const controls = new Controls(context)

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

        

    }

    // when change window size, resize canvas
    function resize() {
        console.log('resize')
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
        // Am I drawning?
        if (!isDrawning) return;

        // style of line
        // context.lineWidth = 5;
        context.lineCap = 'round'
        // context.strokeStyle = 'red'
        controls.updateStyle()

        // drawning the line geting mouse position
        context.lineTo(event.clientX, event.clientY)
        context.stroke() // visualize the line

        // I need to start small circle and update his position
        // to get more round line
        context.beginPath()
        context.moveTo(event.clientX, event.clientY)
    }

}