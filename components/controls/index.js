import Size from './Size.js'
import Color from './Color.js'

export default function(context) {

    const controls = [
        Size(context),
        Color(context)
    ]

    function updateAll() {
        controls.forEach( control => control.update())
    }
    
    return {
        updateAll
    }
}