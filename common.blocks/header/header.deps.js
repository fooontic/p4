([
	{
		shouldDeps: [
			{ block: 'decorator', mods:
				{
					'indent-b':
						['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
					'indent-t':
						['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
					'indent-r':
						['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
					'indent-l':
						['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
					'indent-v':
						['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
					'indent-h':
						['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],

					'space-b':
						['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
					'space-t':
						['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
					'space-v':
						['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
					'space-h':
						['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
					'space-r':
						['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
					'space-l':
						['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
				}
			},
			{ block: 'text', mods: { size: ['l', 'm', 's', 'xs'], view: ['link', 'primary', 'secondary'], weight: ['bold', 'semibold'], transform: 'uppercase', spacing: 'xs' } },
			{ block: 'image' },
			{ block: 'pt-icon-plus', mods: { 'vertical-align': 'center' } },
			{ block: 'pt-icon-plus', elem: 'block' },
			{ block: 'pt-icon-plus', elem: 'icon', mods: { 'indent-r': 's' } },
			{ block: 'pt-list', elem: 'item', mods: { border: 'top', 'space-v': ['xs', 'm'], 'indent-t': 's' }, }
		]
	}
]);
