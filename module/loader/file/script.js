import endsWith from '../.module/endsWith'

import loader from './module/loader/module'

const JS = 'js'
, JSON = 'json'

export const [initialize, load] = loader(
	url =>
		[
			JS
			, ...[
				'', '/' + 'index'
			].map(name =>
				JSON + name
			)
		]
			.some(type => endsWith(url, [type, JS]))

	, JSON

	, target =>
		endsWith(target, [JS]) && [
			'script'
			, `minify(content)`
		]
)