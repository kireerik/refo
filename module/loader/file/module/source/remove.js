export default target => `
	import remove from '#@loader/file/action/remove'

	import.meta.hot.prune(remove('${target}'))
`