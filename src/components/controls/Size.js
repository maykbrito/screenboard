DrawingBoard.Control.Size = DrawingBoard.Control.extend({

	name: 'size',

	defaults: {
		type: "auto",
		dropdownValues: [1, 3, 6, 10, 20, 30, 40, 50],
		min: 1,
		max: 50
	},

	types: ['dropdown', 'range'],

	initialize() {
		const hasType = this.types.includes(this.opts.type) 

		if(!hasType) {
			throw new Error(`Control Size ${this.opts.type} do not exists. Choose one of: ${this.types}`)
		}

		let tpl = this['_' + this.opts.type + 'Template']() 
		this.$el.append(tpl);
		this.$el.attr('data-drawing-board-type', this.opts.type);

		this.val = this.board.opts.size;

		this.updateView();

		if (this.opts.type == "range") {
			this.$el.on('change', '.drawing-board-control-size-range-input', function(e) {
				this.val = e.currentTarget.value;
				this.updateView();

				this.board.ev.trigger('size:changed', this.val);

				e.preventDefault();
			}.bind(this));
		}

		if (this.opts.type == "dropdown") {
			this.$el.on('click', '.drawing-board-control-size-dropdown-current', function() {
				this.$el.find('.drawing-board-control-size-dropdown').toggleClass('drawing-board-utils-hidden');
			}.bind(this));

			this.$el.on('click', '[data-size]', function(e) {
				this.val = parseInt($(e.currentTarget).attr('data-size'), 0);
				this.updateView();

				this.board.ev.trigger('size:changed', this.val);

				e.preventDefault();
			}.bind(this));
		}
	},

	_rangeTemplate() {

		const min = this.opts.min
		const max = this.opts.max
		const size = this.board.opts.size

		return `<div class="drawing-board-control-inner" title="${size}">
			<input type="range" min="${min}" max="${max}" value="${size}" step="1" class="drawing-board-control-size-range-input">
			<span class="drawing-board-control-size-range-current"></span>
			</div>`
	},

	_dropdownTemplate() {
		const li = size => `<li title="${size}" data-size="${size}">
		<span style="width: ${size}px; height: ${size}px; border-radius: ${size}px;"></span>
		</li>`

		const list = this.opts.dropdownValues.reduce((acc, size) => acc += li(size) , '')

		return `<div class="drawing-board-control-inner" title="${this.board.opts.size}">
			<div class="drawing-board-control-size-dropdown-current">
				<span></span>
			</div>
			<ul class="drawing-board-control-size-dropdown"> 
				${list}
			</ul>
		</div>`
	},

	onBoardReset() {
		this.updateView();
	},

	updateView() {
		let val = this.val;
		this.board.ctx.lineWidth = val;

		this.$el.find('.drawing-board-control-size-range-current, .drawing-board-control-size-dropdown-current span').css({
			width: val + 'px',
			height: val + 'px',
			borderRadius: val + 'px',
			marginLeft: -1*val/2 + 'px',
			marginTop: -1*val/2 + 'px'
		});

		this.$el.find('.drawing-board-control-inner').attr('title', val);

		if (this.opts.type == 'dropdown') {
			let closest = null;
			this.opts.dropdownValues.forEach(size => {
				if (closest === null || Math.abs(size - val) < Math.abs(closest - val))
					closest = size;
			});
			this.$el.find('.drawing-board-control-size-dropdown').addClass('drawing-board-utils-hidden');
		}
	},
});
