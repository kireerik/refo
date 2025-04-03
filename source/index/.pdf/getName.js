import data from '##index/resume/data'

import full from '##index/resume/full.html/name'

import A4 from './A4'

import name from '##index/resume/name'

import capitalize from '#@capitalize'

export default (format, version) => [
	data.basics.name.replaceAll(' ', '')
	, '-'
	, version && full
	, format && A4
	, (format || version) ?
		capitalize(name)
	:
		name
	, '.pdf'
]
	.filter(Boolean)
	.join('')