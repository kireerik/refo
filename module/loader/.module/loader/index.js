export default (condition, main) =>
	async (url, context, nextLoad) =>
		condition(url) ? {
			shortCircuit: true
			, format: 'module'
			, source: await main(url, context, nextLoad)
		} :
			nextLoad(url, context)