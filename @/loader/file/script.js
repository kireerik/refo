import endsWith from '../@/endsWith'

import loader from './@/loader/module'

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