DrawingBoard.Control.Download = DrawingBoard.Control.extend({

	name: 'download',

	initialize: function() {
		this.$el.append('<button class="drawing-board-control-download-button"></button>');
		this.$el.on('click', '.drawing-board-control-download-button', function(e) {
			this.board.downloadImg();
			e.preventDefault();
		}.bind(this));
	}

});
