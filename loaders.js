import {env} from 'process'

import withModuleReloading from '#@withModuleReloading.js'

import {register} from 'module'

const registerLoader = (name, options) =>
	register(name, import.meta.url, options)

env.KNOWN_EXTS = ['ico', 'png', 'svg', 'js', 'jsx']

;[
	['specifier-resolution-node']
	, ['#@loader', {data: withModuleReloading}]
]
	.forEach(([name, options]) =>
		registerLoader(name, options)
	)

if (withModuleReloading)
	registerLoader('dynohot')