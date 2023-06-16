const svg = '<svg'

export default async (element, part = '') =>
	(
		await element
	)
		.default
			.replace(
					svg + ' xmlns="http://www.w3.org/2000/svg"'
				,
					svg + part
			)