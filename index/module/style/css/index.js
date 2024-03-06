import key from '../key'

import withModuleReloading from '#@withModuleReloading'

if (withModuleReloading)
	var getModuleName =
		(await import('./getModuleName')).default

import getShortName from './getShortName'

export default (css, [identifiers, names]) =>
	(...parameters) => {
		const identifier = css(...parameters).replace(key, '')

		return identifiers.includes(identifier) ?
			names[
				identifiers.indexOf(identifier)
			]
		: (() => {
			var name = ''

			if (withModuleReloading)
				name += getModuleName()

			name += getShortName(identifiers.length)

			identifiers.push(identifier)
			names.push(name)

			return name
		})()
	}