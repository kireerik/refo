import trace from '#@trace'

const separator = '/'
, dotSign = '.'

export default () =>
		[
			'index', 'style'
		].reduce(
				(result, part) =>
					result.replace(
							separator + part + dotSign
						,
							dotSign
					)
			,
				trace(4)
					.fileName
						.split('%2F').join(separator)
		)
			.split(dotSign)[0]
				.split(separator).pop()
	+
		'-'