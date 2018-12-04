module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'gpn-all-companies.min.css' },
		{ elem: 'css', url: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'gpn-all-companies.min.js' }],
	mods: { theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'p4', space: 'default', size: 'p4', gap: 'small', menu: 'default', breakpoint: 'default', font: 'roboto' }
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
							user: 'gpn',
							changeUrl: '../project-in/project-in.html'
						},
					]
				},
				{
					block: 'section',
					mix: { block: 'decorator', mods: { 'space-v': 'xxxxxxl' }},
					// mods: { view: 'gray' },
					content: [
						{
							block: 'tpl-layout',
							elem: 'container',
							elemMods: { size: 'm', align: 'center' },
							content: [
								{
									block: 'text',
									mods: { size: 'xxxl', weight: 'bold', view: 'primary' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
									content: 'Все компании'
								},
								{
									block: 'tpl-grid',
									mods: { 'col-gap': 'half', 'row-gap': 'half', 's-ratio': '1-1-1' },
									content: [
										{
											block: 'company',
											imgUrl: '../../assets/logos/aeroflot.jpg',
											heading: 'Аэрофлот',
											num1: 2, num2: 0, num3: 4
										},
										{
											block: 'company',
											imgUrl: '../../assets/logos/gpn.svg',
											imgAttrs: { style: 'width: 120px' },
											heading: 'Газпром нефть',
											num1: 2, num2: 1, num3: 3
										},
										{
											block: 'company',
											imgUrl: '../../assets/logos/inter-rao.jpg',
											heading: 'Интер РАО ЕЭС',
											num1: 0, num2: 2, num3: 3
										},
										{
											block: 'company',
											imgUrl: '../../assets/logos/nornickel.jpg',
											heading: 'Норильский никель',
											num1: 0, num2: 1, num3: 0
										},
										{
											block: 'company',
											imgUrl: '../../assets/logos/rosatom.jpg',
											heading: 'Росатом',
											num1: 0, num2: 2, num3: 3
										},
										{
											block: 'company',
											imgUrl: '../../assets/logos/roskosmos.jpg',
											heading: 'Роскосмос',
											num1: 0, num2: 1, num3: 0
										},
										{
											block: 'company',
											imgUrl: '../../assets/logos/rosneft.jpg',
											heading: 'Роснефть',
											num1: 1, num2: 2, num3: 3
										},
										{
											block: 'company',
											imgUrl: '../../assets/logos/rosseti.jpg',
											heading: 'Россети',
											num1: 3, num2: 0, num3: 0
										},
										{
											block: 'company',
											imgUrl: '../../assets/logos/rostech.jpg',
											heading: 'Ростех',
											num1: 1, num2: 2, num3: 11
										},
										{
											block: 'company',
											imgUrl: '../../assets/logos/rostelecom.jpg',
											heading: 'Ростелеком',
											num1: 5, num2: 1, num3: 1
										},
										{
											block: 'company',
											imgUrl: '../../assets/logos/rusal.jpg',
											heading: 'Русал',
											num1: 1, num2: 2, num3: 13
										},
										{
											block: 'company',
											imgUrl: '../../assets/logos/rushydro.jpg',
											heading: 'Русгидро',
											num1: 3, num2: 1, num3: 5
										},
										{
											block: 'company',
											imgUrl: '../../assets/logos/rzd.jpg',
											heading: 'РЖД',
											num1: 0, num2: 2, num3: 3
										},
										{
											block: 'company',
											imgUrl: '../../assets/logos/sberbank.jpg',
											heading: 'Сбербанк',
											num1: 0, num2: 1, num3: 2
										},
										{
											block: 'company',
											imgUrl: '../../assets/logos/severstal.jpg',
											heading: 'Северсталь',
											num1: 2, num2: 2, num3: 3
										},
										{
											block: 'company',
											imgUrl: '../../assets/logos/sibur.png',
											imgAttrs: { style: 'width: 140px; padding: 12.5px 0; height: auto;' },
											heading: 'Сибур',
											num1: 0, num2: 1, num3: 0
										},
										{
											block: 'company',
											imgUrl: '../../assets/logos/sirius.jpg',
											heading: 'Сириус',
											num1: 1, num2: 1, num3: 1
										},
									]
								},
							]
						}
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
		}
	]
};
