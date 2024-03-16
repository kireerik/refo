export default (value, names) =>
	value.endsWith(
		names.reduce((result, name) =>
			result + '.' + name
		, '')
	)