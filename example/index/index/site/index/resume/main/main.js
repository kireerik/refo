import use from '@style'

const [styling, extract] = use()

import style from './style'

const linkPrefixum = import.meta.env.PROD ? '/refo' : ''

import index from './index/index'

import main from '@index/site/main'

export default async ({json, version}) =>
	main(
			() => style(styling)
		,
			json.basics.name + ' - '
			+ (version ? version + ' ' : '') + 'resume'
		,
			`<link rel="shortcut icon" href="${linkPrefixum}/favicon.ico">`
		,
			extract
		,
			...[, , ]
		,
			{styling, resume: true}
		,
			await index({json, version})
	)