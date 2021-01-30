DrawingBoard.Control.Navigation = DrawingBoard.Control.extend({

	name: 'navigation',

	defaults: {
		back: true,
		forward: true,
		reset: true
	},

	initialize() {
		this.buildElement()

		if (this.opts.back) {
			let $back = this.$el.find('.drawing-board-control-navigation-back');
			this.board.ev.bind('historyNavigation', this.updateBack.bind(this, $back));
			
			this.$el.on('click', '.drawing-board-control-navigation-back', function(e) {
				this.board.goBackInHistory();
				e.preventDefault();
			}.bind(this));

			this.updateBack($back);
		}

		if (this.opts.forward) {
			let $forward = this.$el.find('.drawing-board-control-navigation-forward');
			this.board.ev.bind('historyNavigation', this.updateForward.bind(this, $forward));
			this.$el.on('click', '.drawing-board-control-navigation-forward', function(e) {
				this.board.goForthInHistory();
				e.preventDefault();
			}.bind(this));

			this.updateForward($forward);
		}

		if (this.opts.reset) {
			this.$el.on('click', '.drawing-board-control-navigation-reset', function(e) {
				this.board.reset({ background: true });
				e.preventDefault();
			}.bind(this));
		}
	},

	buildElement() {
		const template = (name, content) => 
		`<button class="drawing-board-control-navigation-${name}">${content}</button>`

		let el = this.opts.back ? template('back', '&larr;') : '';
		el += this.opts.forward ? template('forward', '&rarr;') : '';
		el += this.opts.reset ? template('reset', '&times;') : '';

		this.$el.append(el);
	},

	updateBack($back) {
		if (this.board.history.canUndo()) {
			$back.removeAttr('disabled');
		} else {
			$back.attr('disabled', 'disabled');
		}
	},

	updateForward($forward) {
		if (this.board.history.canRedo()) {
			$forward.removeAttr('disabled');
		} else {
			$forward.attr('disabled', 'disabled');
		}
	}
});
