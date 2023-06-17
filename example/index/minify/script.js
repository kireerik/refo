import {minify} from 'uglify-js'

export default result => {
	for (let i = 1; i <= 2; i++)
		result = minify(result).code

	return result
}