import staticDirectory from './@/directory/static'

global.staticDirectory = staticDirectory

await import('../source/index.js')