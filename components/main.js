import { Board } from "./Board.js"

window.addEventListener("load", () => {
    const canvas = document.querySelector('#board')
    new Board(canvas)
})