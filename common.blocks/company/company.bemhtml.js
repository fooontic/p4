block('company').tag()('a');
block('company').content()(function() {
	var _ctx = this.ctx;

	return [
		{
			block: 'image',
			mix: { block: 'company', elem: 'logo' },
			attrs: _ctx.imgAttrs ? _ctx.imgAttrs : '',
			url: _ctx.imgUrl ? _ctx.imgUrl : ''
		},
		{
			elem: 'description',
			content: [
				{
					block: 'text',
					mods: { size: 'xxl', weight: 'bold', view: 'primary', align: 'center' },
					mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
					content: _ctx.heading
				},
				{
					block: 'tpl-grid',
					mods: { 's-ratio': '1-1-1' },
					mix: { block: 'decorator', mods: { 'space-v': 'm' }},
					// attrs: { style: 'border-top: 1px solid var(--color-bg-border)' },
					content: [
						{
							content: [
								{
									block: 'text',
									mods: { size: 'xxxl', view: 'primary' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
									content: _ctx.num1
								},
								{
									block: 'text',
									mods: { size: 'xs', view: 'secondary', weight: 'semibold', spacing: 'xs', transform: 'uppercase' },
									content: 'В поиске'
								},
							]
						},
						{
							content: [
								{
									block: 'text',
									mods: { size: 'xxxl', view: 'primary' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
									content: _ctx.num2
								},
								{
									block: 'text',
									mods: { size: 'xs', view: 'secondary', weight: 'semibold', spacing: 'xs', transform: 'uppercase' },
									content: 'Реализуется'
								},
							]
						},
						{
							content: [
								{
									block: 'text',
									mods: { size: 'xxxl', view: 'primary' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
									content: _ctx.num3
								},
								{
									block: 'text',
									mods: { size: 'xs', view: 'secondary', weight: 'semibold', spacing: 'xs', transform: 'uppercase' },
									content: 'Завершено'
								},
							]
						},
					]
				}
			]
		},
	]
});
