const watchChanges = process.argv[2]

, build = require('refo-core-build')

if (watchChanges)
	var {addStaticFilePath, watchedFileSource, watch} = require('refo-core-watch')

var directories

module.exports = {
	get: ({
		assetDirectory = 'asset'
		, siteDirectory = 'site'
		, staticDirectory = 'static'
		, ...options
	} = {}) => {
		directories = {assetDirectory, siteDirectory, staticDirectory}

		return {
			...directories
			, addStaticFilePath, watchedFileSource
			, ...options
		}
	}

	, use: handlers => {
		const {assetDirectory, siteDirectory, staticDirectory} = directories

		build(handlers, siteDirectory, staticDirectory)

		if (watchChanges)
			watch(handlers, assetDirectory, siteDirectory, staticDirectory)
	}
}