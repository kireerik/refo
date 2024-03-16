const svg = '<svg'

export default source => `
	import template from '#@SolidJS/template'

	export default properties =>
		template(
			'${svg}' + Object.entries(properties).reduce(
				(result, [name, value]) =>
					result + ' ' + name + '="' + value + '"'
			, '')
			+ '${
				source.replace(
						svg
						+ ' xmlns="http://www.w3.org/2000/svg"'
					,
						''
				)
			}'
		)
`