const watchChanges = process.argv[2]

, build = require('refo-core-build')

if (watchChanges)
	var {addStaticFilePath, watchedFileSource, watch} = require('refo-core-watch')

var directory = {}

module.exports = {
	get: ({
		assetDirectory = 'asset'
		, siteDirectory = 'site'
		, staticDirectory = 'static'
		, ...options
	} = {}) => {
		const directories = {assetDirectory, siteDirectory, staticDirectory}

		, directoryName = Object.values(directories)

		;['asset', 'site', 'static'].forEach((type, index) =>
			directory[type] = directoryName[index]
		)

		return {
			...directories
			, addStaticFilePath, watchedFileSource
			, ...options
		}
	}

	, use: handlers => {
		build(handlers, directory.site, directory.static)

		if (watchChanges)
			watch(handlers, directory.asset, directory.site, directory.static)
	}
}