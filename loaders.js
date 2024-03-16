import {env} from 'process'

import register from '#@register.js'

import withModuleReloading from '#@withModuleReloading.js'

env.KNOWN_EXTS = ['ico', 'png', 'svg', 'js', 'jsx']

register('specifier-resolution-node')

await import('#@loader')

if (withModuleReloading)
	register('dynohot')