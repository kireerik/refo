const watchChanges = process.argv[2]

, build = require('./main/build')
if (watchChanges)
	var {watchedFileSource, watch} = require('./main/watch')

var assetDirectory, siteDirectory, staticDirectory

module.exports.get = (options = {}) => {
	({assetDirectory = 'asset', siteDirectory = 'site', staticDirectory = 'static'} = options)

	return {assetDirectory, siteDirectory, staticDirectory, watchedFileSource, ...options}
}

module.exports.use = handlers => {
	build(handlers, siteDirectory, staticDirectory)

	if (watchChanges)
		watch(handlers, assetDirectory, siteDirectory, staticDirectory)
}