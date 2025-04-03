import loader from '.'

export default (condition, main) =>
	loader(
		condition

		, async (url, context, nextLoad) =>
			main(url)(
				(
					await nextLoad(
						url, {...context, format: 'module'}
					)
				)
					.source.toString()
			)
	)