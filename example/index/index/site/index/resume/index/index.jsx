import use from '@style'

const [styling, extract] = use()

import style from './style'

import data from '../data'

import handleJSON from 'refo-handle-json'

import index from './index/index'

const prefixum = import.meta.env.PROD ? '/refo' : ''

import Main from '@index/site/main'

export default async version => {
	const json = handleJSON(
		JSON.parse(JSON.stringify(data)), version
	)
	, children = await index({styling, json, version})

	return <Main resume {...{
		style: header => style(header, styling)

		, title:
			json.basics.name + ' - '
			+ (version ? version + ' ' : '') + 'resume'

		, head:
			<link rel="shortcut icon"
				href={prefixum + '/favicon.ico'}
			/>

		, extract, styling, children
	}}/>
}