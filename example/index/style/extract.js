import create from '@emotion/server/create-instance'

import key from './key'

export default (cache, [identifiers, names]) =>
	identifiers.reduce(
			(result, identifier, index) =>
				result
					.replaceAll(
						...[
							key + identifier, names[index]
						].map(
							value => '.' + value
						)
					)
		,
			create(cache)
				.extractCritical(
					identifiers
						.map(identifier => key + identifier)
							.join(' ')
				)
					.css
	)