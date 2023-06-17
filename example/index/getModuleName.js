import trace from 'stack-tracer'

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
				trace().caller.caller.caller.evalOrigin
		)
			.split(dotSign)[0]
				.split(separator).pop()
	+
		'-'