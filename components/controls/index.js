import Size from './Size.js'
import Color from './Color.js'
import Eraser from './Eraser.js'

export default function(context) {

    const controls = [
        Size(context),
        Eraser(context),
        Color(context)
    ]

    function updateAll() {
        controls.forEach( control => control.update())
    }
    
    return {
        updateAll
    }
}