import use from '#style'

const [styling, extract] = use()

import style from './style'

import data from '../data'

import handleJSON from '#handleJSON'

import index from './index/index'

import Main from '#index/index/main'

import pdf from '../../.pdf'

export default version => {
	const json = handleJSON(data, version)

	, children = index({styling, json, version})

	pdf(version)

	return <Main resume {...{
		style: header => style(header, styling)

		, title:
			json.basics.name + ' - '
			+ (version ? version + ' ' : '') + 'resume'

		, head:
			<link rel="shortcut icon" href="/favicon.ico"/>

		, extract, styling, children
	}}/>
}