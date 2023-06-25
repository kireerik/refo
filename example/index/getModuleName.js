import trace from 'stack-tracer'

const separator = '/'
, dotSign = '.'

, get = (caller, depth) => {
	for (let index = 1; index <= depth; index++)
		({caller} = caller)

	return caller
}

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
				(() => {
					const {caller} = get(trace(), 3)
					var {evalOrigin} = caller

					if (
						evalOrigin.endsWith(
							'site/index/style/index.jsx'
						)
					)
						({evalOrigin} = get(caller, 1))

					return evalOrigin
				})()
		)
			.split(dotSign)[0]
				.split(separator).pop()
	+
		'-'