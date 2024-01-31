import {minify} from 'uglify-js'

export default result => {
	for (
		let length = Infinity

		; result.length < length

		; result = minify(result).code
	)
		length = result.length

	return result
}