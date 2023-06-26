const svg = '<svg'

import template from '@template'

export default async element => {
	element =
		(await element).default.replace(
				svg + ' xmlns="http://www.w3.org/2000/svg"'
			,
				''
		)

	return properties =>
		template(
			svg + Object.entries(properties).reduce(
				(result, [name, value]) =>
					' ' + name + '="' + value + '"'
			, '')
			+ element
		)
}