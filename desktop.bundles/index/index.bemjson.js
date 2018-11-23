module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'index.min.css' },
		{ elem: 'css', url: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'index.min.js' }],
	mods: { theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', breakpoint: 'default', font: 'roboto' }
		},
	],
	content: [
		{
			block: 'tpl-layout',
			content: [
				{
					elem: 'container',
					elemMods: { size: 'm', align: 'center' },
					content: [
						{
							block: 'header',
							content: [
								{
									elem: 'logo',
									content: [
										{
											block: 'text',
											mods: { size: 'l', view: 'link', weight: 'bold' },
											attrs: { style: 'margin-top: -4px' },
											content: 'Профессионалы 4.0'
										},
									]
								},
								{
									elem: 'menu',
									content: [
										{
											elem: 'item',
											mix: { block: 'decorator', mods: { 'space-h': 'l' }},
											content: {
												block: 'text',
												mods: { size: 's', view: 'primary', transform: 'uppercase', weight: 'semibold', spacing: 'xs' },
												content: 'Все проекты'
											},
										},
										{
											elem: 'item',
											mix: { block: 'decorator', mods: { 'space-h': 'l' }},
											content: {
												block: 'text',
												mods: { size: 's', view: 'primary', transform: 'uppercase', weight: 'semibold', spacing: 'xs' },
												content: 'Заказчику'
											},
										},
										{
											elem: 'item',
											mix: { block: 'decorator', mods: { 'space-h': 'l' }},
											content: {
												block: 'text',
												mods: { size: 's', view: 'primary', transform: 'uppercase', weight: 'semibold', spacing: 'xs' },
												content: 'Исполнителю'
											},
										},
										{
											elem: 'item',
											mix: { block: 'decorator', mods: { 'space-h': 'l' }},
											content: {
												block: 'text',
												mods: { size: 's', view: 'primary', transform: 'uppercase', weight: 'semibold', spacing: 'xs' },
												content: 'Как это работает'
											},
										},
									]
								},
								{
									elem: 'lk',
									content: [
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 's'},
													content: {
														block: 'image',
														attrs: { style: 'width: 32px; height: 32px; display: block; margin-top: -2px' },
														url: '../../assets/onotole.jpg'
													}
												},
												{
													elem: 'block',
													attrs: { style: 'margin-top: -2px' },
													content: {
														block: 'text',
														mods: { size: 'm', view: 'primary' },
														content: 'Анатолий Вассерман'
													},
												}
											]
										},
									]
								},
							]
						},
					]
				},
			]
		},
	]
};
