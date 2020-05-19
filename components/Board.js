import Controls from "./controls/index.js"

export function Board (state) {

    // Working inside canvas, but it's a 2d or 3d context?
    const context = state.canvas.getContext('2d')

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
        state.canvas.addEventListener('mousedown', startPressPen)

        // when mouse up
        state.canvas.addEventListener('mouseup', stopPressPen)

        // when mouse moving
        state.canvas.addEventListener('mousemove', draw)
        
        // clear the canvas
        state.canvas.addEventListener('wheel', clearCanvas);

    }

    // when change window size, resize canvas
    function resize() {
        state.canvas.height = window.innerHeight
        state.canvas.width = window.innerWidth
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
        context.lineCap = 'round'

        // drawning the line geting mouse position
        context.lineTo(event.clientX, event.clientY)
        context.stroke() // visualize the line

        // I need to start small circle and update his position
        // to get more round line
        context.beginPath()
        context.moveTo(event.clientX, event.clientY)
    }

    
    // clear canvas fully
    function clearCanvas() {
        
        if (state.settings.askToCleanAll) {
            const msg = 'Are you sure you want to clear everthing?\r\n\r\nThis operation is irreversible.'
            
            if ( !confirm(msg) ) return
        }

        context.clearRect(0, 0, state.canvas.width, state.canvas.height);
    }

}
