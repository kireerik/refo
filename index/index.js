import staticDirectory from './module/directory/static'

global.staticDirectory = staticDirectory

await import('#index')