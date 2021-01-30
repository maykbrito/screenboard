DrawingBoard.Control.DrawingMode = DrawingBoard.Control.extend({

	name: 'drawingmode',

	defaults: {
		pencil: true,
		eraser: true,
		filler: true
	},

	initialize() {
		this.prevMode = this.board.getMode();

		["pencil", "eraser", "filler"].forEach(this.drawingMode.bind(this));

		this.$el.on('click', 'button[data-mode]', this.updateMode.bind(this));

		this.board.ev.bind('board:mode', this.toggleButtons.bind(this));

		this.toggleButtons( this.board.getMode() );
	},

	drawingMode(value) {
		if (this.opts[value]) {
			this.$el.append(`<button class="drawing-board-control-drawingmode-${value}-button" data-mode="${value}"></button>`);
		}
	},

	updateMode(e) {
		let value = $(e.currentTarget).attr('data-mode');
		let mode = this.board.getMode();
		if (mode !== value) this.prevMode = mode;
		let newMode = mode === value ? this.prevMode : value;
		this.board.setMode( newMode );
		e.preventDefault();
	},

	toggleButtons(mode) {
		this.$el.find('button[data-mode]').each((_, item) => {
			var $item = $(item);
			$item.toggleClass('active', mode === $item.attr('data-mode'));
		});
	}

});
