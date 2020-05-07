export default function (context) {
    let color = 'red'

    document
        .querySelector('#color')
        .addEventListener("change", change)

    function change(event) {
        color = event.target.value
    }

    function update() {
        context.strokeStyle = color
    }

    return {
        update
    }
}