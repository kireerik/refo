import {env} from 'process'

import register from './register.js'

env.KNOWN_EXTS = ['ico', 'png', 'svg', 'js', 'jsx']

register('specifier-resolution-node')

export default async (directory, withModuleReloading) => {
	(
		await import('./main')
	)
		.default([directory, withModuleReloading])

	if (withModuleReloading)
		register('dynohot/loader')
}