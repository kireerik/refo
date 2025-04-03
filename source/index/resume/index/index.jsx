import use from '#@style'

const [styling, extract] = use()

import style from './style'

import data from '../data'

import handle from './handle'

import index from './index/index'

import prefixum from '##index/prefixum'

import Main from '##@/main'

import pdf from '../../.pdf'

export default version => {
	const json = handle(data, version)

	, children = index({styling, json, version})

	pdf(version)

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