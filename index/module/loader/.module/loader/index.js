export default main =>
	async (url, context, nextLoad) => {
		const method = main(url)

		return method ? {
			shortCircuit: true
			, format: 'module'
			, source: await method(context, nextLoad)
		} :
			nextLoad(url, context)
	}