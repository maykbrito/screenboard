export default function (context) {
    let isErasing = false

    // get initial state, to restore it back
    const eraser = context.globalCompositeOperation

    document
        .querySelector('#eraser')
        .addEventListener("click", change)

    function change(event) {
        isErasing = event.target.checked

        console.log(event.target)
    }

    function update() {
        context.globalCompositeOperation = isErasing 
        ? "destination-out"
        : eraser;
    }

    return {
        update
    }
}