import trace from 'stack-tracer'

export default depth => {
	var caller = trace()

	depth += 1

	for (let index = 1; index <= depth; index++)
		({caller} = caller)

	return caller
}