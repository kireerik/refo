import endsWith from './.module/endsWith'

import {transformSync} from '@babel/core'

import loader from './.module/loader/source'

export const load = loader(url =>
	endsWith(url, ['jsx']) && (
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
)