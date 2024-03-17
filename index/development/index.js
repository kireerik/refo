import withModuleReloading from './withModuleReloading'

import {server as createServer} from 'superstatic'

global.withModuleReloading = withModuleReloading

global.development = true

await import('..')

const server = createServer({port: 80}).listen()

import.meta.hot.dispose(() => server.close())

import.meta.hot.accept()