import { Board } from './Board.js'
import { Draggable } from './Draggable.js'

window.addEventListener('load', () => {
    const canvas = document.querySelector('#board')
    const controllers = document.querySelector('#controllers')

    new Board(canvas)
    new Draggable(controllers)
})
