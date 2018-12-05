module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'all-projects.min.css' },
		{ elem: 'css', url: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'all-projects.min.js' }],
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
							changeUrl: '../gpn-all-projects/gpn-all-projects.html'
						},
					]
				},
				{
					block: 'section',
					mix: { block: 'decorator', mods: { 'space-t': 'xxxxxxl' }},
					mods: { view: 'gray' },
					content: [
						{
							block: 'tpl-layout',
							elem: 'container',
							elemMods: { size: 'ms', align: 'center' },
							content: [
								{
									block: 'text',
									mods: { size: 'xxxl', weight: 'bold', view: 'primary' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
									content: [
										'Все проекты компании ',
										{
											block: 'text',
											mods: { view: 'link', display: 'inline' },
											content: 'Газпром Нефть'
										},
									]
								},
								{
									block: 'text',
									mods: { size: 'xl', weight: 'bold', view: 'primary' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
									content: 'Поиск команды'
								},


								{
									block: 'project',
									tag: 'a',
									attrs: { style: 'display: block; text-decoration: none', href: '../project/project.html' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
									tags: [
										{
											block: 'tag',
											mods: { size: 'xs' },
											content: 'Капитальное строительство'
										},
										{
											block: 'tag',
											mods: { size: 'xs' },
											content: 'IT-разработка'
										},
										{
											block: 'tag',
											mods: {size: 'xs' },
											content: 'Нефть и газ'
										},
									],
									heading: 'Создание инструмента для оценки хода строительства на основании данных с беспилотных летательных аппаратов',
									logo: {
										block: 'image',
										attrs: { style: 'margin-top: 28px' },
										url: '../../assets/logos/gpn.svg'
									},
									text: 'Автоматизированная оценка хода строительства на основании полученных данных с БПЛА – видеопоток,: 1. Расчет количества погруженных свай (до 8000 свай на обьекте): Количество свай на участке на момент облета БРЛА. Отчет о динамике …',
									dates: '01.12.2018–01.06.2018',
									vacancies: [
										{
											block: 'vacancy-tag',
											content: 'Fullstack-разработчик'
										},
										{
											block: 'vacancy-tag',
											content: 'Системный аналитик'
										},
									]
								},

								{
									block: 'project',
									attrs: { style: 'display: block; text-decoration: none' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
									tags: [
										{
											block: 'tag',
											mods: { size: 'xs' },
											content: 'Новые технологии'
										},
										{
											block: 'tag',
											mods: { size: 'xs' },
											content: 'Математическое моделирование'
										},
										{
											block: 'tag',
											mods: {size: 'xs' },
											content: 'Нефть и газ'
										},
									],
									heading: 'Анализ характеристик плоско-сворачиваемого шланга на основе вычислительных экспериментов с математической моделью',
									logo: {
										block: 'image',
										attrs: { style: 'margin-top: 28px' },
										url: '../../assets/logos/gpn.svg'
									},
									text: 'Выполнить стационарные гидромеханические расчеты проточной части в согласованном диапазоне изменения чисел Рейнольдса для одной ступени насоса. Построить зависимости КПД РВМ от частоты вращения в диапазоне … ',
									dates: '22.01.2019–04.09.2019',
									vacancies: [
										{
											block: 'vacancy-tag',
											content: 'Проектировщик машин и оборудования для эксплуатации нефтяных и газовых скважин'
										},
										{
											block: 'vacancy-tag',
											content: 'Специалист по математическому моделированию'
										},
									]
								},

								{
									block: 'text',
									mods: { size: 'xl', weight: 'bold', view: 'primary', display: 'inline-block' },
									mix: { block: 'decorator', mods: { 'indent-t': 'xxxl', 'indent-b': 'xl', 'indent-r': 'm' }},
									content: 'В стадии реализации'
								},
								{
									block: 'badge',
									mods: { view: 'success' },
									attrs: { style: 'top: 5px' },
									content: 'Активные'
								},
								{
									block: 'project',
									attrs: { style: 'display: block; text-decoration: none' },
									mods: { state: 'active' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
									tags: [
										{
											block: 'tag',
											mods: { size: 'xs' },
											content: 'Новые технологии'
										},
										{
											block: 'tag',
											mods: { size: 'xs' },
											content: 'Нефть и газ'
										},
										{
											block: 'tag',
											mods: {size: 'xs' },
											content: 'Гидроэнергетика'
										},
									],
									heading: 'Рассчет параметров роторно-вихревых машин',
									logo: {
										block: 'image',
										attrs: { style: 'margin-top: 28px' },
										url: '../../assets/logos/gpn.svg'
									},
									text: 'Выполнить стационарные гидромеханические расчеты проточной части в согласованном диапазоне изменения чисел Рейнольдса для одной ступени насоса. Построить зависимости КПД РВМ от частоты вращения в диапазоне … ',
									dates: '12.02.2019–20.06.2019',
									vacancies: [
										{
											block: 'vacancy-tag',
											content: 'Аналитик'
										},
										{
											block: 'vacancy-tag',
											content: 'Инженер'
										},
										{
											block: 'vacancy-tag',
											content: 'Руководитель проекта'
										},
									]
								},

								{
									block: 'text',
									mods: { size: 'xl', weight: 'bold', view: 'primary' },
									mix: { block: 'decorator', mods: { 'indent-t': 'xxxl', 'indent-b': 'xl' }},
									content: 'Завершенные'
								},
								{
									block: 'project',
									mods: { view: 'disabled' },
									attrs: { style: 'display: block; text-decoration: none' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
									tags: [
										{
											block: 'tag',
											mods: { size: 'xs' },
											content: 'Новые технологии'
										},
										{
											block: 'tag',
											mods: { size: 'xs' },
											content: 'Нефть и газ'
										},
									],
									heading: 'Интерактивные браслеты датчики для водителей, позволяющие передавать диспетчерам данные о состоянии здоровья и перемещении сотрудников',
									logo: {
										block: 'image',
										attrs: { style: 'margin-top: 28px' },
										url: '../../assets/logos/gpn.svg'
									},
									text: 'Выполнить стационарные гидромеханические расчеты проточной части в согласованном диапазоне изменения чисел Рейнольдса для одной ступени насоса. Построить зависимости КПД РВМ от частоты вращения в диапазоне … ',
									dates: '12.07.2018–20.11.2018',
									vacancies: [
										{
											block: 'vacancy-tag',
											mods: { view: 'disabled' },
											content: 'Инженер-технолог'
										},
										{
											block: 'vacancy-tag',
											mods: { view: 'disabled' },
											content: 'Java-разработчик'
										},
									]
								},

								{
									block: 'project',
									mods: { view: 'disabled' },
									attrs: { style: 'display: block; text-decoration: none' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
									tags: [
										{
											block: 'tag',
											mods: { size: 'xs' },
											content: 'Новые технологии'
										},
										{
											block: 'tag',
											mods: { size: 'xs' },
											content: 'Нефть и газ'
										},
										{
											block: 'tag',
											mods: {size: 'xs' },
											content: 'Логистика'
										},
									],
									heading: 'Оперативная доставка проб топлива на нефтебазы с помощью беспилотных летательных аппаратов',
									logo: {
										block: 'image',
										attrs: { style: 'margin-top: 28px' },
										url: '../../assets/logos/gpn.svg'
									},
									text: 'Выполнить стационарные гидромеханические расчеты проточной части в согласованном диапазоне изменения чисел Рейнольдса для одной ступени насоса. Построить зависимости КПД РВМ от частоты вращения в диапазоне … ',
									dates: '18.05.2018–11.10.2018',
									vacancies: [
										{
											block: 'vacancy-tag',
											mods: { view: 'disabled' },
											content: 'Аналитик'
										},
										{
											block: 'vacancy-tag',
											mods: { view: 'disabled' },
											content: 'Инженер'
										},
										{
											block: 'vacancy-tag',
											mods: { view: 'disabled' },
											content: 'Руководитель проекта'
										},
									]
								},

								{
									block: 'see-more',
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													block: 'icon',
													mods: { name: 'arrow-down', view: 'secondary', size: 's' },
													mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 'xs' }},
												},
												{
													elem: 'block',
													content: {
														block: 'text',
														mods: { size: 'm', view: 'primary' },
														content: 'Посмотреть все завершённые проекты'
													},
												}
											]
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
