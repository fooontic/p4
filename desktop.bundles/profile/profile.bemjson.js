module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'profile.min.css' },
		{ elem: 'css', url: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'profile.min.js' }],
	mods: { theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'p4', space: 'default', size: 'default', gap: 'small', menu: 'default', breakpoint: 'default', font: 'roboto' }
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
						},
					]
				},
				{
					elem: 'container',
					elemMods: { size: 'm', align: 'center' },
					mix: { block: 'decorator', mods: { 'space-t': 'xxxxxl', 'space-b': 'xxxxl' }},
					content: [
						{
							block: 'pt-icon-plus',
							content: [
								{
									elem: 'icon',
									mix: { block: 'decorator', mods: { 'indent-r': 'xl' }},
									content: {
										block: 'image',
										attrs: { style: 'width: 140px; height: 140px' },
										url: '../../assets/dolgov-big.png'
									},
								},
								{
									elem: 'block',
									mix: { block: 'decorator', mods: { 'space-t': 'm' }},
									content: [
										{
											block: 'text',
											mods: { size: 'xxxl', weight: 'bold', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
											content: 'Николай Долгов'
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'secondary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
											content: 'Мужчина, 40 лет'
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'xs'},
													attrs: { style: 'margin: 0 10px 0 2px; height: 16px' },
													content: {
														html: `<svg width="12" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 16C2 11.54 0 8.2 0 6a6 6 0 0 1 12 0c0 2.2-2 5.54-6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="#223D54" fill-rule="nonzero" opacity=".7"/></svg>` },
												},
												{
													elem: 'block',
													content: {
														block: 'text',
														mods: { size: 's', view: 'secondary' },
														content: 'Санкт-Петербург, Россия'
													},
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											mix: { block: 'decorator', mods: { 'indent-t': 'xs' }},
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'xs'},
													content: { block: 'icon', mods: { name: 'mail-1', size: 's', view: 'secondary' }},
												},
												{
													elem: 'block',
													content: {
														block: 'text',
														mods: { size: 's', view: 'secondary' },
														attrs: { style: 'margin-top: -6px' },
														content: 'dolgov@yandex.ru'
													},
												}
											]
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'link' },
											mix: { block: 'decorator', mods: { 'indent-t': 's' }},
											content: 'Почитать резюме'
										},
									]
								}
							]
						},
					]
				},
				{
					block: 'section',
					mix: { block: 'decorator', mods: { 'space-t': 'xxxxl', 'space-b': 'xxxxxl' }},
					mods: { view: 'gray' },
					content: [
						{
							block: 'tpl-layout',
							elem: 'container',
							elemMods: { size: 'ms', align: 'center' },
							content: [
								{
									block: 'text',
									mods: { size: 'l', weight: 'bold', view: 'primary' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
									content: 'Цифровой профиль'
								},
								{
									block: '',
									attrs: { style: 'position: relative' },
									content: [
										{
											block: 'image',
											attrs: { style: 'margin: 0 -8px' },
											url: '../../assets/digital-profile.webp'
										},
										{
											block: 'btn',
											mods: { view: 'secondary' },
											attrs: { style: 'position: absolute; bottom: 70px; left: 50%; transform: translateX(-50%)' },
											content:	'Посмотреть подробнее'
										},
									]
								},
								{
									block: '',
									attrs: { style: 'position: relative' },
									mods: { 'indent-t': 's', 'indent-b': 'xxxxl' },
									content: [
										{
										},
										{
											block: 'btn',
											mods: { view: 'secondary' },
											attrs: { style: 'position: absolute; bottom: 453px; left: 390px;' },
											content:	'Посмотреть подробнее'
										},
										{
											block: 'btn',
											mods: { view: 'action' },
											tag: 'a',
											attrs: { href: '../index/index.html', style: 'position: absolute; bottom: 638px; right: 0; width: 240px;' },
											content:	'Подобрать проект'
										},
										{
											block: 'btn',
											mods: { view: 'secondary' },
											attrs: { style: 'position: absolute; bottom: 580px; right: 0; width: 240px;' },
											content:	'Подобрать обучение'
										},
									]
								},
							]
						},
					]
				},
				{
					block: 'section',
					mods: { view: 'gray' },
					mix: { block: 'decorator', mods: { 'space-t': 'xxl', 'space-b': 'xxxxl' }},
					content: {
						block: 'footer',
					},
				},
			]
		},
	]
};