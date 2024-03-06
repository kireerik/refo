import withModuleReloading from '#@withModuleReloading'

import './index/index'

if (withModuleReloading) {
	import.meta.hot.accept()

	let {server} = await import('superstatic')

	server = server({port: 80}).listen()

	import.meta.hot.dispose(() => server.close())
}