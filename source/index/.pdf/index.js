import getName from './getName'

import generate from './generate'

export default second => {
	const names = [...[, ], true].reduce((result, value) => [
		...result
		, getName(value, second)
	], [])

	names.forEach(generate)

	if (global.withModuleReloading)
		(async () => {
			const remove =
				(
					await import('#@loader/file/action/remove')
				)
					.default

			names.forEach(name =>
				import.meta.hot.prune(
					remove(global.staticDirectory + '/' + name)
				)
			)
		})()
}