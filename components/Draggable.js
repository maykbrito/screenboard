export function Draggable(element) {
  let pos = { iX: 0, iY: 0, lX: 0, lY: 0 }

  let dragArea = document.createElement('span')
  dragArea.classList.add('drag-area')

  element.append(dragArea)

  dragArea.onmousedown = (event) => {
    event.preventDefault()

    pos.iX = event.clientX
    pos.iY = event.clientY

    document.onmousemove = ({ clientX, clientY }) => {
      pos.lX = pos.iX - clientX
      pos.lY = pos.iY - clientY
      pos.iX = clientX
      pos.iY = clientY

      element.style.top = `${element.offsetTop - pos.lY}px`
      element.style.left = `${element.offsetLeft - pos.lX}px`
    }

    document.onmouseup = () => {
      document.onmouseup = null
      document.onmousemove = null
    }
  }
}
