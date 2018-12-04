block('project').tag()('a');
block('project').content()(function() {
	var _ctx = this.ctx;

	return [
		{
			elem: 'row',
			mix: { block: 'decorator', mods: { 'indent-b': 's' }},
			content: [
				{
					elem: 'col-75',
					content: [
						{
							content: _ctx.tags
						},
						{
							block: 'text',
							mods: { size: 'xxl', weight: 'bold', view: 'primary' },
							mix: { block: 'decorator', mods: { 'indent-t': 's' }},
							content: _ctx.heading
						},
					]
				},
				{
					elem: 'col-20',
					content: _ctx.logo
				},
			]
		},
		{
			elem: 'row',
			elemMods: { align: 'baseline' },
			content: [
				{
					elem: 'col-75',
					content: {
						block: 'text',
						mods: { size: 'm', view: 'primary' },
						content: [
							_ctx.text,
							{
								block: 'text',
								mods: { size: 'm', view: 'link', display: 'inline' },
								content: ' Читать далее'
							},
						]
					},
				},
				{
					elem: 'col-20',
					content: [
						{
							block: 'text',
							mods: { size: 'xs', transform: 'uppercase', weight: 'semibold', spacing: 'xs', view: 'secondary'  },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
							content: 'Срок проекта',
						},
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: _ctx.dates
						},
					]
				},
			]
		},
		{
			block: 'text',
			mods: { size: 'xs', transform: 'uppercase', weight: 'semibold', spacing: 'xs', view: 'secondary'  },
			mix: { block: 'decorator', mods: { 'indent-t': 's', 'indent-b': 'xs' }},
			content: 'В поиске'
		},
		{
			content: _ctx.vacancies
		}
	]
});
