import endsWith from './@/endsWith'

import {transformSync} from '@babel/core'

import loader from './@/loader/source'

export const load = loader(
	url => endsWith(url, ['jsx'])

	, () =>
		source =>
			transformSync(
				source
				, {
					presets: [
						['solid', {generate: 'ssr'}]
					]
					, targets: {node: 'current'}
				}
			)
				.code
)