export function Controls(context) {
    this.updateStyle = updateStyle

    const controls = document.querySelector('#controllers')
    const colorInput = controls.querySelector('#color')
    const sizeInput = controls.querySelector('#size')

    let color = 'red'
    let size = 5


    init()

    function init() {
        colorInput.addEventListener("change", changeColor)
        sizeInput.addEventListener("change", changeSize)
    }
    
    function updateStyle() {
        context.strokeStyle = color
        context.lineWidth = size;
    }

    function changeColor(event) {
        color = event.target.value
        updateStyle()
    }

    function changeSize( event ) {
        size = event.target.value
        updateStyle()
    }
}