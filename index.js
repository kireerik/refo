import {env} from 'process'

import withModuleReloading from '#withModuleReloading.js'

import {register} from 'module'

env.KNOWN_EXTS = ['ico', 'png', 'svg', 'js', 'jsx']

;[
	['specifier-resolution-node']
	, ['#loader', {data: withModuleReloading}]
]
	.forEach(([name, options]) =>
		register(name, import.meta.url, options)
	)

const configuration = import('./index/index')

if (withModuleReloading) {
	import.meta.hot.accept()

	const {server} = await import('superstatic')

	await configuration

	server({port: 80}).listen()
}