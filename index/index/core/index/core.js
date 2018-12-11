const watchChanges = process.argv[2]

, build = require('refo-core-build')
if (watchChanges)
	var {addStaticFilePath, watchedFileSource, watch} = require('refo-core-watch')

var assetDirectory, siteDirectory, staticDirectory

module.exports.get = (options = {}) => {
	({assetDirectory = 'asset', siteDirectory = 'site', staticDirectory = 'static'} = options)

	return {assetDirectory, siteDirectory, staticDirectory, addStaticFilePath, watchedFileSource, ...options}
}

module.exports.use = handlers => {
	build(handlers, siteDirectory, staticDirectory)

	if (watchChanges)
		watch(handlers, assetDirectory, siteDirectory, staticDirectory)
}