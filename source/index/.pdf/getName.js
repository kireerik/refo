import data from '../resume/data.js'

import full from '../resume/full.html/name.js'

import A4 from './A4'

import name from '../resume/name.js'

import capitalize from '#@capitalize.js'

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
