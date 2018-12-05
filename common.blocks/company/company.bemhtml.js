block('company').tag()('a');
block('company').content()(function() {
	var _ctx = this.ctx;

	return [
		{
			elem: 'header',
			attrs: { style: 'background: ' + _ctx.bgColor },
			content: {
				block: 'image',
				mix: { block: 'company', elem: 'logo' },
				attrs: _ctx.imgAttrs ? _ctx.imgAttrs : '',
				url: _ctx.imgUrl ? _ctx.imgUrl : ''
			},
		},
		{
			elem: 'content',
			content: [
				{
					block: 'tag',
					mods: { size: 'xs' },
					mix: { block: 'decorator', mods: { 'indent-r': 'xs' }},
					attrs: { style: 'margin-left: -2px' },
					content: _ctx.tag1
				},
				_ctx.tag2 ? {
					block: 'tag',
					mods: { size: 'xs' },
					mix: { block: 'decorator', mods: { 'indent-r': 'xs' }},
					content: _ctx.tag2
				} : '',
				_ctx.tagExtra ? {
					block: 'text',
					mods: { size: 's', view: 'ghost', display: 'inline-block' },
					content: _ctx.tagExtra
				} : '',
				{
					block: 'text',
					mods: { size: 's', view: 'primary' },
					mix: { block: 'company', elem: 'desc' },
					content: _ctx.desc
				},
				_ctx.stats ? {
					block: 'tpl-grid',
					mods: { 's-ratio': '1-1-1' },
					mix: [
						{ block: 'decorator', mods: { 'space-v': 's' }},
						{ block: 'company', elem: 'stats' }
					],
					content: [
						{
							content: [
								{
									block: 'text',
									mods: { size: 'xxxl', view: 'primary' },
									content: _ctx.stats.num1
								},
								{
									block: 'text',
									mods: { size: 'xs', view: 'primary' },
									content: 'В поиске'
								},
							]
						},
						{
							content: [
								{
									block: 'text',
									mods: { size: 'xxxl', view: 'primary' },
									content: _ctx.stats.num2
								},
								{
									block: 'text',
									mods: { size: 'xs', view: 'primary' },
									content: 'Реализуется'
								},
							]
						},
						{
							content: [
								{
									block: 'text',
									mods: { size: 'xxxl', view: 'primary' },
									content: _ctx.stats.num3
								},
								{
									block: 'text',
									mods: { size: 'xs', view: 'primary' },
									content: 'Завершено'
								},
							]
						},
					]
				} : {
					block: 'text',
					mods: { size: 'm', view: 'secondary', align: 'center' },
					mix: { block: 'decorator', mods: { 'indent-t': 'l' }},
					content: 'Пока нет проектов'
				},
			]
		},
	]
});
