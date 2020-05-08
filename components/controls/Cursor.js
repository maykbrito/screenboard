export default function Cursor (context) {
    const cursor = document.querySelector('#cursor')
        
    document.addEventListener('mousemove', setCursorPosition)

    function setCursorPosition(event){
        cursor.style.top = event.clientY + 'px'
        cursor.style.left = event.clientX + 'px'
    }


    const cursorTypes = {
        pencil: function update() {
            cursor.style.height = context.lineWidth + 'px'
            cursor.style.width = context.lineWidth + 'px'
            cursor.style.background = context.strokeStyle
        },
        eraser: function update() {
            cursor.style.height = context.lineWidth + 'px'
            cursor.style.width = context.lineWidth + 'px'
            cursor.style.background = 'white'
            cursor.style.border = 'dotted 1px ' + context.strokeStyle
        }
    }


    function changeToolSelect(event) {
        setCursor(event.target.value)
    }


    function setCursor(cursorType) {
        selectedCursorType = cursorTypes[cursorType]
    }



    let selectedCursorType = ''
    
    setCursor('pencil')

    document
        .querySelectorAll('.tool')
        .forEach(el => el.addEventListener("click", changeToolSelect))




    function update(){
        selectedCursorType()
    }

    return {
        update
    }
}