module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'project.min.css' },
		{ elem: 'css', url: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'project.min.js' }],
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
							active: 'Все проекты'
						},
					]
				},
				{
					elem: 'container',
					elemMods: { size: 'm', align: 'center' },
					mix: { block: 'decorator', mods: { 'space-t': 'xxxxxl' }},
					content: [
						{
							block: 'tpl-grid',
							mods: { 'col-gap': 'full', 'row-gap': 'full', 'columns': '12' },
							content: [
								{
									elem: 'fraction',
									elemMods: { col: '8' },
									content: [
										{
											block: 'tag',
											mods: { size: 's' },
											content: 'Капитальное строительство'
										},
										{
											block: 'tag',
											mods: { size: 's' },
											content: 'IT-разработка'
										},
										{
											block: 'tag',
											mods: {size: 's' },
											content: 'Нефть и газ'
										},
										{
											block: 'text',
											mods: { size: 'xxxl', weight: 'bold', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-t': 'm', 'indent-b': 'xl' }},
											content: 'Создание инструмента для оценки хода строительства на основании данных с беспилотных летательных аппаратов'
										},
										{
											block: 'text',
											mods: { size: 'xs', transform: 'uppercase', weight: 'semibold', spacing: 'xs', view: 'secondary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
											content: 'Сроки проекта'
										},
										{
											block: 'text',
											mods: { size: 'l', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
											content: '01.12.2018–01.06.2019'
										},
										{
											block: 'text',
											mods: { size: 'xl', weight: 'bold', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
											content: 'Описание проекта'
										},
										{
											block: 'text',
											mods: { size: 'l', view: 'primary' },
											content: 'Автоматизированная оценка хода строительства на основании полученных данных с беспилотных летательных аппаратов:'
										},
										{
											tag: 'ol',
											attrs: { style: 'padding-left: 20px' },
											block: 'decorator', mods: { 'indent-b': 'xxxl' },
											content: [
												{
													block: 'text',
													tag: 'li',
													mods: { size: 'l', view: 'primary' },
													content: [
														'Расчет количества погруженных свай (до 8000 свай на обьекте):',
														{
															tag: 'ul',
															attrs: { style: 'padding-left: 20px' },
															content: [
																{
																	block: 'text',
																	tag: 'li',
																	mods: { size: 'l', view: 'primary' },
																	content: 'Количество свай на участке на момент облета БРЛА'
																},
																{
																	block: 'text',
																	tag: 'li',
																	mods: { size: 'l', view: 'primary' },
																	content: 'Отчет о динамике изменения количества свай на участке'
																},
															]
														},
													]
												},
												{
													block: 'text',
													tag: 'li',
													mods: { size: 'l', view: 'primary' },
													content: [
														'Расчет показателей о прокладке магистральных трубопроводов:',
														{
															tag: 'ul',
															attrs: { style: 'padding-left: 20px' },
															content: [
																{
																	block: 'text',
																	tag: 'li',
																	mods: { size: 'l', view: 'primary' },
																	content: 'Длина трубопровода (км)'
																}
															]
														},
													]
												},
											]
										},
										{
											block: 'text',
											mods: { size: 'xl', weight: 'bold', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
											content: 'Ожидаемый результат'
										},
										{
											block: 'text',
											mods: { size: 'l', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
											content: 'Прототип программного продукта'
										},
										{
											block: 'text',
											mods: { size: 'xl', weight: 'bold', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
											content: 'Критерии приемки результата разработки'
										},
										{
											tag: 'ul',
											attrs: { style: 'padding-left: 20px' },
											block: 'decorator', mods: { 'indent-b': 'xxxl' },
											content: [
												{
													block: 'text',
													tag: 'li',
													mods: { size: 'l', view: 'primary' },
													content: 'Практическая реализуемость идеи.'
												},
												{
													block: 'text',
													tag: 'li',
													mods: { size: 'l', view: 'primary' },
													content: 'Наличие работающего прототипа который на основании данных с БЛПА позволяет получать: отчет о динамике изменений в количестве свай на объекте, отчет о динамике изменения длины трубопроводов.'
												},
											]
										},
										{
											block: 'text',
											mods: { size: 'xl', weight: 'bold', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
											content: 'Исходные данные и материалы'
										},
										{
											block: 'text',
											mods: { size: 'l', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
											content: 'Заказчиком будут предоставлены доступ к видео и фоторесурсам: записи, трансляции и прочее, демонстрирующего облет площадки. '
										},
									]
								},
								{
									elem: 'fraction',
									elemMods: { col: '4' },
									content: [
										{
											block: '',
											content: {
												html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="357" height="459"><defs><path id="b" d="M0 0h341v443H0z"/><filter id="a" width="108.2%" height="106.3%" x="-4.1%" y="-2.3%" filterUnits="objectBoundingBox"><feMorphology in="SourceAlpha" radius="1" result="shadowSpreadOuter1"/><feOffset dy="4" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/></filter></defs><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero" transform="translate(8 4)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" xlink:href="#b"/></g><text fill="#1B3D56" font-family="Roboto-Regular, Roboto" font-size="15" transform="translate(8 4)"><tspan x="25" y="170">«Газпром нефть» — один из ключевых </tspan> <tspan x="25" y="195">игроков на энергетическом рынке.</tspan> <tspan x="25" y="220">Цифровые проекты «Газпром Нефти» </tspan> <tspan x="25" y="245">вошли в отчёт консалтингового </tspan> <tspan x="25" y="270">агенства Gartner — The 2019 CIO Agenda: </tspan> <tspan x="25" y="295">Securing a New Foundation for Digital </tspan> <tspan x="25" y="320">Business по итогам опроса …</tspan></text><text fill="#0063BA" font-family="Roboto-Regular, Roboto" font-size="15" transform="translate(8 4)"><tspan x="25" y="374">Узнать больше о компании</tspan></text><text fill="#003E61" font-family="Roboto-Regular, Roboto" font-size="13" transform="translate(8 4)"><tspan x="46" y="407">https://www.gazprom-neft.ru</tspan></text><path fill="#000" fill-rule="nonzero" d="M45.18 402.41l-1.77 1.77a1 1 0 0 1-1.41 0l-.7-.7 3.17-3.19a1 1 0 0 1 1.41 0l2.83 2.83a1 1 0 0 1 0 1.41l-3.18 3.18-.7-.7a1 1 0 0 1 0-1.42l1.76-1.77-1.41-1.4v-.01zm-9.89 7.06l3.18-3.18.7.7a1 1 0 0 1 0 1.42l-1.76 1.77 1.41 1.4 1.77-1.76a1 1 0 0 1 1.41 0l.7.71-3.17 3.18a1 1 0 0 1-1.41 0l-2.83-2.83a1 1 0 0 1 0-1.4zm5.65-3.53a1.5 1.5 0 1 1 2.16 2.07 1.5 1.5 0 0 1-2.16-2.07z" opacity=".7"/><g fill="#0670B8"><path fill-rule="nonzero" d="M229.9 86.74c-.63 0-1.14-.47-1.14-1.05V67.81l.01-.07a1.1 1.1 0 0 1 1.12-.94c.58 0 1.07.42 1.12.94l.01.07V85.7c0 .58-.5 1.05-1.12 1.05m2.1-23.22h-4.22c-3.57 0-3.78 2.88-3.78 4.74v17.02c0 1.86.21 4.74 3.78 4.74H232c3.58 0 3.8-2.88 3.8-4.74V68.26c0-1.86-.22-4.74-3.8-4.74"/><path d="M152.55 63.52h9.72v3.3h-4.63v23.2h-5.1z"/><path fill-rule="nonzero" d="M163.02 90.02h4.99l.48-7.04h2.4l.47 7.04h5l-2.67-26.5h-8l-2.67 26.5zm5.64-9.96l.88-13.25h.29l.87 13.25h-2.04z"/><path d="M183.65 80.74v4.99c0 .68.5.87.8.87.47 0 .8-.42.8-.87v-6.16c0-.83-.14-1.74-2.05-1.74h-2.06v-2.91h2.14c1.45 0 1.97-.35 1.97-1.97v-5.27c0-.45-.33-.86-.8-.86-.3 0-.8.18-.8.86V72h-5.1v-3.74c0-1.86.22-4.74 3.78-4.74h4.23c3.57 0 3.79 2.88 3.79 4.74v4.24c0 2.87-1.93 3.66-3.47 3.59v.27c3.42-.08 3.47 2.64 3.47 3.6v5.32c0 1.86-.22 4.74-3.79 4.74h-4.23c-3.56 0-3.78-2.87-3.78-4.74v-4.54h5.1zM193.7 63.52h11.8v26.5h-4.76v-23.2h-2.29v23.2h-4.75z"/><path fill-rule="nonzero" d="M209.2 90.02h5.09v-9h2.9c3.58 0 4.15-2.89 4.15-4.75v-8.02c0-1.85-.57-4.73-4.14-4.73h-8v26.5zm5.09-11.93V66.81h1.34c.55 0 .95.5.95 1.32v8.64c0 .83-.4 1.32-.95 1.32h-1.34z"/><path d="M252.06 63.52h6.63v26.5h-5.1V73.4h-.18l-2.63 16.62h-4.07l-2.62-16.62h-.18v16.62h-5.1v-26.5h6.62l3.3 18.62z"/><path fill-rule="nonzero" d="M141.67 66.22a38.14 38.14 0 0 1-.79 7.21c.15-2.92-.2-7.04-.88-10.25-.67-3.22-2.58-8.58-4.1-11.07-1.4 2.36-3.13 7-4.03 11.04-.92 4.03-.94 8.91-.94 10.38a51.04 51.04 0 0 1-.68-10.06c.15-3.64 1-7.39 1.47-9.12 1.78-5.75 3.8-9.43 4.18-10.02.38.59 2.93 5.12 4.25 9.88a43.94 43.94 0 0 1 1.52 12m-5.74 20.57a19.16 19.16 0 0 1-2.14-8.7 18.19 18.19 0 0 1 2.17-8.62c.45.76 1.9 3.92 2.08 8.24a18.53 18.53 0 0 1-2.1 9.08m6.2-32.51c-1.61-7.04-5.65-12.77-6.2-13.7a47.41 47.41 0 0 0-5.74 11.97 43.39 43.39 0 0 0-1.44 17.27 47.77 47.77 0 0 0 2.93 11.07 38.8 38.8 0 0 0 4.27 7.65c1.76-2.28 5.8-9.08 7.06-17.96.7-4.94.72-9.26-.88-16.3"/><path d="M126.05 90.01v8.33a7.5 7.5 0 0 1 10.6-.03 7.39 7.39 0 0 1 0 10.5l-.04.04a14.95 14.95 0 0 1-21.11 0 14.78 14.78 0 0 1 0-20.98 14.91 14.91 0 0 1 10.55-4.34V63.66a26.5 26.5 0 0 0-26.58 26.42 26.5 26.5 0 0 0 26.58 26.43c7.66 0 14.55-3.22 19.4-8.37V90.01h-19.4z"/><path fill-rule="nonzero" d="M253.93 110.25c0 2.52-1.15 2.97-4.08 2.97h-2.68v-11.5h2.68v4.43h.45c2.65 0 3.63.62 3.63 2.92v1.18zm-22.45-6.36h-2.04v9.33h-2.56v-9.33h-2.18v-2.19h6.78v2.19zm-20.7 5.22c0 2.34-1.2 2.97-3.85 2.97v1.13h-2.61v-1.13c-2.66 0-3.86-.63-3.86-2.97v-3.6c0-2.34 1.15-2.93 3.86-2.93v-.87h2.61v.87c2.7 0 3.84.6 3.84 2.94v3.6zm-24.4-5.22h-3.68v2.26h3.3v2.18h-3.3v2.7h3.68v2.2h-6.45V101.7h6.45v2.19zm-22.31 9.32h-2.7v-5.03H160v5.03h-2.69v-11.5h2.7v4.44h1.38v-4.44h2.69v11.5zm94.62-14.37H152.54v17.67H258.7V98.84zm-55.62 6.6v3.69c0 .67.22.83.81.83h.44v-5.36h-.44c-.59 0-.8.17-.8.84zm47.38 2.74h-.6v3h.6c.6 0 .79-.15.79-.8v-1.4c0-.65-.18-.8-.79-.8zm-43.1-3.58h-.42v5.36h.42c.6 0 .81-.17.81-.85v-3.7c0-.67-.21-.81-.81-.81z"/></g></g></svg>`
											}
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
					mix: { block: 'decorator', mods: { 'space-v': 'xxxxl' }},
					content: {
						block: 'tpl-layout',
						elem: 'container',
						elemMods: { size: 'ms', align: 'center' },
						content: [
							{
								block: 'text',
								mods: { size: 'xl',weight: 'bold', view: 'primary' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
								content: 'Необходимые специалисты'
							},
							{
								block: 'vacancy',
								mods: { state: 'preview' },
								content: [
									{
										block: 'text',
										mods: { size: 'xxl', weight: 'bold', view: 'primary' },
										mix: [{ block: 'vacancy', elem: 'head' }, { block: 'decorator', mods: { 'indent-b': 'xl' }},],
										content: 'Full-Stack Разработчик'
									},
									{
										block: 'tpl-grid',
										mods: { 'col-gap': 'full', 'row-gap': 'full', 's-ratio': '1-1' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
										content: [
											{
												elem: 'fraction',
												content: [
													{
														block: 'text',
														mods: { size: 'l', weight: 'bold', view: 'primary' },
														mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
														content: 'Формат взаимодействия'
													},
													{
														block: 'text',
														mods: { size: 'l', view: 'primary' },
														content: 'Распределённая команда'
													},
												]
											},
											{
												elem: 'fraction',
												content: [
													{
														block: 'text',
														mods: { size: 'l', weight: 'bold', view: 'primary' },
														mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
														content: 'Форма вознаграждения'
													},
													{
														block: 'text',
														mods: { size: 'l', view: 'primary' },
														content: 'Денежный бонус 120 000 ₽'
													},
												]
											},
										]
									},
									{
										elem: 'extra-info',
										content: [
											{
												block: 'text',
												mods: { size: 'l', weight: 'bold', view: 'primary' },
												mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
												content: 'Роль в проекте'
											},
											{
												block: 'text',
												mods: { size: 'l', view: 'primary' },
												content: 'Разработка интаграционного решения'
											},
											{
												block: 'text',
												mods: { size: 'l', view: 'primary' },
												mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
												content: 'Разработка программного обеспечения'
											},
											{
												block: 'text',
												mods: { size: 'l', weight: 'bold', view: 'primary' },
												content: 'Ключевые компетенции:'
											},
											{
												tag: 'ul',
												attrs: { style: 'padding-left: 20px' },
												content: [
													{
														block: 'text',
														tag: 'li',
														mods: { size: 'l', view: 'primary' },
														content: 'Навыки серверной разработки (языки: PHP, python, Ruby, JavaScript и соответствующие им фреймворки)'
													},
													{
														block: 'text',
														tag: 'li',
														mods: { size: 'l', view: 'primary' },
														content: 'Работа с базами данных - как реляционными (SQL), так и нереляционными (noSQL)'
													},
													{
														block: 'text',
														tag: 'li',
														mods: { size: 'l', view: 'primary' },
														content: 'Навыки фронтенд-разработки (связка HTML/CSS/JavaScript; фреймворки на выбор для работы с ними — Bootstrap, React, Angular и др.)'
													},
													{
														block: 'text',
														tag: 'li',
														mods: { size: 'l', view: 'primary' },
														content: 'Знание (или способность быстро разбираться) API массовых сервисов — картографических (Google/Yandex-maps, openstreetmaps), социальных (vk/fb/ok/linkedin), чатов (telegram, facebook messenger, vk, whatsapp)'
													},
												]
											},
										]
									},
									{
										block: 'text',
										mods: { size: 'l', weight: 'bold', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
										content: 'Ключевые навыки'
									},
									{
										block: 'tag',
										mods: { size: 's' },
										attrs: { style: 'margin-left: -2px' },
										content: 'Frontend-разработка'
									},
									{
										block: 'tag',
										mods: { size: 's' },
										content: 'Backend-разработка'
									},
									{
										block: 'tag',
										mods: { size: 's' },
										content: 'Базы данных'
									},
									{
										block: 'tag',
										mods: { size: 's' },
										content: 'React'
									},
									{
										block: 'tag',
										mods: { size: 's' },
										content: 'NodeJS'
									},
									{
										block: 'tag',
										mods: { size: 's' },
										content: 'SQL'
									},
									{
										elem: 'footer',
										content: [
											{
												content: [
													{
														block: 'btn',
														tag: 'a', attrs: { href: '../project-in/project-in.html' },
														mods: { view: 'action' },
														mix: { block: 'decorator', mods: { 'indent-r': 'm' }},
														content: 'Участвовать'
													},
													{
														block: 'btn',
														mods: { view: 'secondary' },
														content: 'Пригласить друга'
													},
												]
											},
											{
												block: 'icon',
												mods: { name: 'arrow-down', size: 'm', view: 'secondary' },
												mix: { block: 'vacancy', elem: 'arrow' },
											},
										]
									},
								]
							},
							{
								block: 'vacancy',
								mods: { state: 'preview' },
								content: [
									{
										block: 'text',
										mods: { size: 'xxl', weight: 'bold', view: 'primary' },
										mix: [{ block: 'vacancy', elem: 'head' }, { block: 'decorator', mods: { 'indent-b': 'xl' }},],
										content: 'Системный аналитик'
									},
									{
										block: 'tpl-grid',
										mods: { 'col-gap': 'full', 'row-gap': 'full', 's-ratio': '1-1' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
										content: [
											{
												elem: 'fraction',
												content: [
													{
														block: 'text',
														mods: { size: 'l', weight: 'bold', view: 'primary' },
														mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
														content: 'Формат взаимодействия'
													},
													{
														block: 'text',
														mods: { size: 'l', view: 'primary' },
														content: 'Распределённая команда'
													},
												]
											},
											{
												elem: 'fraction',
												content: [
													{
														block: 'text',
														mods: { size: 'l', weight: 'bold', view: 'primary' },
														mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
														content: 'Форма вознаграждения'
													},
													{
														block: 'text',
														mods: { size: 'l', view: 'primary' },
														content: 'Денежный бонус 80 000 ₽'
													},
												]
											},
										]
									},
									{
										elem: 'extra-info',
										content: [
											{
												block: 'text',
												mods: { size: 'l', weight: 'bold', view: 'primary' },
												mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
												content: 'Роль в проекте'
											},
											{
												block: 'text',
												mods: { size: 'l', view: 'primary' },
												content: 'Разработка интаграционного решения'
											},
											{
												block: 'text',
												mods: { size: 'l', view: 'primary' },
												mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
												content: 'Разработка программного обеспечения'
											},
											{
												block: 'text',
												mods: { size: 'l', weight: 'bold', view: 'primary' },
												content: 'Ключевые компетенции:'
											},
											{
												tag: 'ul',
												attrs: { style: 'padding-left: 20px' },
												content: [
													{
														block: 'text',
														tag: 'li',
														mods: { size: 'l', view: 'primary' },
														content: 'Навыки серверной разработки (языки: PHP, python, Ruby, JavaScript и соответствующие им фреймворки)'
													},
													{
														block: 'text',
														tag: 'li',
														mods: { size: 'l', view: 'primary' },
														content: 'Работа с базами данных - как реляционными (SQL), так и нереляционными (noSQL)'
													},
													{
														block: 'text',
														tag: 'li',
														mods: { size: 'l', view: 'primary' },
														content: 'Навыки фронтенд-разработки (связка HTML/CSS/JavaScript; фреймворки на выбор для работы с ними — Bootstrap, React, Angular и др.)'
													},
													{
														block: 'text',
														tag: 'li',
														mods: { size: 'l', view: 'primary' },
														content: 'Знание (или способность быстро разбираться) API массовых сервисов — картографических (Google/Yandex-maps, openstreetmaps), социальных (vk/fb/ok/linkedin), чатов (telegram, facebook messenger, vk, whatsapp)'
													},
												]
											},
										]
									},
									{
										block: 'text',
										mods: { size: 'l', weight: 'bold', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
										content: 'Ключевые навыки'
									},
									{
										block: 'tag',
										mods: { size: 's' },
										content: 'Базы данных'
									},
									{
										block: 'tag',
										mods: { size: 's' },
										content: 'Аналитика'
									},
									{
										block: 'tag',
										mods: { size: 's' },
										content: 'IDEFx'
									},
									{
										block: 'tag',
										mods: { size: 's' },
										content: 'UML'
									},
									{
										block: 'tag',
										mods: { size: 's' },
										content: 'BPMN'
									},
									{
										elem: 'footer',
										content: [
											{
												content: [
													{
														block: 'btn',
														tag: 'a', attrs: { href: '../index/index.html' },
														mods: { view: 'action' },
														mix: { block: 'decorator', mods: { 'indent-r': 'm' }},
														content: 'Участвовать'
													},
													{
														block: 'btn',
														mods: { view: 'secondary' },
														content: 'Пригласить друга'
													},
												]
											},
											{
												block: 'icon',
												mods: { name: 'arrow-down', size: 'm', view: 'secondary' },
												mix: { block: 'vacancy', elem: 'arrow' },
											},
										]
									},
								]
							},
						]
					},
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
