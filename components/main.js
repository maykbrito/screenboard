import { Board } from './Board.js'
import { Draggable } from './Draggable.js'
import { Settings } from './Settings.js'

window.addEventListener('load', () => {
    const canvas = document.querySelector('#board')   
    const settings = new Settings()

    let state = {
        canvas,
        settings
    }

    new Board(state)

    
    const controllers = document.querySelector('#controllers')
    new Draggable(controllers)
})
