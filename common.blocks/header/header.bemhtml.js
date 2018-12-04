block('header').tag()('header');
block('header').content()(function() {
	var _ctx = this.ctx;

	return [
			{
				elem: 'logo',
				content: [
					{
						block: 'text',
						mods: { size: 'l', view: 'link', weight: 'bold' },
						attrs: { href: '../index/index.html', style: 'margin-top: -4px' },
						content: 'Профессионалы 4.0'
					},
				]
			},
			{
				elem: 'menu',
				content: [
					{
						elem: 'item',
						tag: 'a', attrs: { href: '../index/index.html' },
						elemMods: { active: _ctx.active === 'Все проекты' ? true : false },
						mix: { block: 'decorator', mods: { 'space-h': 'l' }},
						content: {
							block: 'text',
							mods: { size: 's', view: 'primary', transform: 'uppercase', weight: 'semibold', spacing: 'xs' },
							content: 'Все проекты'
						},
					},
					{
						elem: 'item',
						tag: 'a', attrs: { href: '../all-companies/all-companies.html' },
						elemMods: { active: _ctx.active === 'Все компании' ? true : false },
						mix: { block: 'decorator', mods: { 'space-h': 'l' }},
						content: {
							block: 'text',
							mods: { size: 's', view: 'primary', transform: 'uppercase', weight: 'semibold', spacing: 'xs' },
							content: 'Все компании'
						},
					},
					{
						elem: 'item',
						elemMods: { active: _ctx.active === 'Как это работает' ? true : false },
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
									attrs: { style: 'width: 32px; height: 32px; display: block; margin-top: -2px; border-radius: 50%' },
									url: _ctx.user === 'gpn' ? '../../assets/GPN.svg' : '../../assets/onotole.jpg'
								}
							},
							{
								elem: 'block',
								attrs: { style: 'margin-top: -2px' },
								content: {
									block: 'text',
									tag: 'a', attrs: { href: '../profile/profile.html', style: 'text-decoration: none' },
									mods: { size: 'm', view: 'primary' },
									content: _ctx.user === 'gpn' ? 'Газпром Нефть' : 'Анатолий Вассерман'
								},
							}
						]
					},
					{
						block: 'pt-list',
						mix: [{ block: 'header', elem: 'account' }, { block: 'decorator', mods: { 'indent-t': 'm' }}],
						content: _ctx.user === 'gpn' ? [
						 {
							 elem: 'item',
							 elemMods: { 'space-v': 'xs' },
							 content: {
								 block: 'text',
								 mods: { size: 'm', view: 'primary' },
								 content: 'Все проекты компании'
							 },
						 },
						 {
							 elem: 'item',
							 elemMods: { 'space-v': 'xs' },
							 content: {
								 block: 'text',
								 mods: { size: 'm', view: 'primary' },
								 content: 'Команда'
							 },
						 },
						 {
							 elem: 'item',
							 elemMods: { 'space-v': 'xs' },
							 content: {
								 block: 'text',
								 mods: { size: 'm', view: 'primary' },
								 content: 'Настройки аккаунты'
							 },
						 },
						 {
							 elem: 'item',
							 elemMods: { 'space-v': 'm', 'indent-t': 's', border: 'top' },
							 content: {
								 block: 'text',
								 tag: 'a', attrs: { href: _ctx.changeUrl ? _ctx.changeUrl : '' },
								 mods: { size: 'xs', view: 'secondary', transform: 'uppercase', weight: 'semibold', spacing: 'xs' },
								 content: 'Сменить пользователя'
							 },
						 },
					 ] : [
							{
								elem: 'item',
								elemMods: { 'space-v': 'xs' },
								content: {
									block: 'text',
									mods: { size: 'm', view: 'primary' },
									content: 'Мои проекты'
								},
							},
							{
								elem: 'item',
								elemMods: { 'space-v': 'xs' },
								content: {
									block: 'text',
									mods: { size: 'm', view: 'primary' },
									content: 'Моя команда'
								},
							},
							{
								elem: 'item',
								elemMods: { 'space-v': 'xs' },
								content: {
									block: 'text',
									mods: { size: 'm', view: 'primary' },
									content: 'Настройки аккаунты'
								},
							},
							{
								elem: 'item',
								elemMods: { 'space-v': 'm', 'indent-t': 's', border: 'top' },
								content: {
									block: 'text',
 									tag: 'a', attrs: { href: _ctx.changeUrl ? _ctx.changeUrl : '' },
									mods: { size: 'xs', view: 'secondary', transform: 'uppercase', weight: 'semibold', spacing: 'xs' },
									content: 'Сменить пользователя'
								},
							},
						]
					},
				]
			},
	]
});
