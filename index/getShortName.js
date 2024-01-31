const range = 'az'

, letters = [
	range
	, range.toUpperCase()
].reduce(
	(result, [from, to]) => {
		for (
			let character = from

			; character <= to

			; character = String.fromCharCode(
				character.charCodeAt() + 1
			)
		)
			result += character

		return result
	}
, '')

, underscore = '_'

, firstCharacters = letters + underscore
, characters =
	letters
	+ (() => {
		var result = ''

		for (let digit = 0; digit <= 9; digit++)
			result += digit

		return result
	})()
	+ underscore + '-'

, lastIndex = array => array.length - 1

export default index => {
	var result = []

	for (let count = 0; count <= index; count++) {
		let index = 0
		, first = true
		, start = lastIndex(firstCharacters)

		, execute; (execute = () => {
			if (result.length == index)
				result.push(0)
			else
				if (result[index] < start)
					result[index]++
				else {
					result[index] = 0

					index++

					if (first) {
						start = lastIndex(characters)
						first = false
					}

					execute()
				}
		})()
	}

	return result.reduceRight(
			(result, index) =>
				result + characters[index]
		,
			firstCharacters[result.shift()]
	)
}