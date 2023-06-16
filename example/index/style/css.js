import key from './key'

if (import.meta.env.DEV)
	var getModuleName =
		(await import('@getModuleName')).default

import getShortName from '@getShortName'

export default (css, [identifiers, names], method) =>
	(...parameters) => {
		const identifier =
			css(...parameters).replace(key, '')

		return identifiers.includes(identifier) ?
			names[
				identifiers.indexOf(identifier)
			]
		: (() => {
			const name =
				(import.meta.env.DEV ? getModuleName() : '')

				+ getShortName(method(identifier))

			names.push(name)

			return name
		})()
	}