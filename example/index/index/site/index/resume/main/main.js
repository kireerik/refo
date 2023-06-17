import use from '@style'

const [styling, extract] = use()

import style from './style'

import index from './index/index'

import main from '@index/site/main'

export default async ({json, version}) =>
	main(
			() => style(styling)
		,
			json.basics.name + ' - '
			+ (version ? version + ' ' : '') + 'resume'
		,
			`<link rel="shortcut icon" href="/favicon.ico">`
		,
			extract
		,
			...[, , ]
		,
			{styling, resume: true}
		,
			await index({json, version})
	)