import getName from './getName'

import generate from './generate'

import withModuleReloading from '#@withModuleReloading'

export default second => {
	const names = [...[, ], true].reduce((result, value) => [
		...result
		, getName(value, second)
	], [])

	names.forEach(generate)

	if (withModuleReloading)
		(async () => {
			const get = async name =>
				(
					await import(name)
				)
					.default

			const staticDirectory = await get(
				'#staticDirectory'
			)
			const remove = await get('#@loader/remove')

			names.forEach(name =>
				import.meta.hot.prune(
					remove(staticDirectory + '/' + name)
				)
			)
		})()
}