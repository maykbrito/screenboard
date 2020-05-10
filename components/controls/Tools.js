export default function (context) {

    const toolsFunction = {
        pencil: function update() {
            context.globalCompositeOperation = 'source-over'
        },
        eraser: function update() {
            context.globalCompositeOperation = "destination-out"
        }
    }

    function changeToolSelect(event) {
        setTool(event.target.value)
    }

    function setTool(toolName) {
        selectedTool = toolsFunction[toolName]
    }

    function update(){
        selectedTool()
    }


    let selectedTool = ''

    setTool('pencil')

    document
        .querySelectorAll('.tool')
        .forEach(el => el.addEventListener("click", changeToolSelect))


    return {
        update
    }

}