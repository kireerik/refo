const watchChanges = process.argv[2]

, {realpathSync} = require('fs')
, {resolve} = require('path')

, build = require('refo-core-build')

if (watchChanges)
	var {
		watchedFileSource, watch
	} =
		require('refo-core-watch')

var directory = {}

module.exports = {
	get: ({
		assetDirectory = 'asset'
		, staticDirectory = 'static'
		, ...options
	} = {}) => {
		const directories = {assetDirectory, staticDirectory}

		, directoryName = Object.values(directories)

		;['asset', 'static'].forEach((type, index) =>
			directory[type] = directoryName[index]
		)//simplify

		return {
			...directories
			, watchChanges, watchedFileSource
			, ...options
		}
	}

	, use: handlers => {
		const requireIndexModule = () =>
			require(process.cwd())

		, parameters = [
			handlers, requireIndexModule(), directory.asset, directory.static
		]

		build(...parameters)

		if (watchChanges)
			watch(...parameters, requireIndexModule)
	}
}