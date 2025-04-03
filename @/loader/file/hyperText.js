import endsWith from '../@/endsWith'
import getLast from './@/getLast'

import loader from './@/loader/module'

const HTML = 'html'

export const [initialize, load] = loader(
	url =>
			[
				'js', 'jsx'
			]
				.some(type => endsWith(url, [type]))
		&&
			[
				'', '/' + 'index'
			]
				.some(type =>
					endsWith(getLast(url, '.'), [HTML + type])
				)

	, HTML

	, () => [
		'hyperText'
		, `
			await minify(
				(
					await import('solid-js/web')
				)
					.renderToString(
						() => content
					)
			)
		`
	]
)