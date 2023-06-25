const svg = '<svg'

import template from '@template'

export default async (element, part = '') =>
	template(
		(
			await element
		)
			.default
				.replace(
						svg + ' xmlns="http://www.w3.org/2000/svg"'
					,
						svg + part
				)
	)