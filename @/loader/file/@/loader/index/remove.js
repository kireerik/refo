export default target => `
	import remove from '#@loader/file/action/remove.js'

	import.meta.hot.prune(remove('${target}'))
`