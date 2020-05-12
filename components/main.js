import { Board } from './Board.js'
import { Draggable } from './Draggable.js'
import { Settings } from './Settings.js'

window.addEventListener('load', () => {
    const canvas = document.querySelector('#board')
    const controllers = document.querySelector('#controllers')

    new Board(canvas)
    new Draggable(controllers)
    new Settings()
})
