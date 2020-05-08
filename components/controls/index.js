import Size from './Size.js'
import Color from './Color.js'
import Tools from './Tools.js'
import Cursor from './Cursor.js'

export default function(context) {

    const controls = [
        Size(context),
        Tools(context),
        Color(context),
        Cursor(context)
    ]

    function updateAll() {
        controls.forEach( control => control.update())
    }
    
    return {
        updateAll
    }
}