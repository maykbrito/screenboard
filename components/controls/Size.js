export default function (context) {
    let size = 5

    const sizeInput = document.querySelector('#size')
    sizeInput.addEventListener("change", changeSize)

    function changeSize(event) {
        size = event.target.value
    }

    function update() {
        context.lineWidth = size
    }

    return {
        update
    }
}