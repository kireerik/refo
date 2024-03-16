import loader from '.'

export default main => loader(url => {
	const method = main(url)

	return method && (
		async (context, nextLoad) =>
			method(
				(
					await nextLoad(
						url, {...context, format: 'module'}
					)
				)
					.source.toString()
			)
	)
})