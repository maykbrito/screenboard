new DrawingBoard.Board('board', {
    controls: [
        'Color',
        { Size: { type: "range" } },
        { DrawingMode: { filler: false } },
        'Navigation',
        'Download'
    ],
    color: '#FDFD1F',
    background: false,
    size: 5,
    webStorage: 'session',
    enlargeYourContainer: false,
    droppable: true, //try dropping an image on the canvas!
    stretchImg: true //the dropped image can be automatically ugly resized to to take the canvas size
});
