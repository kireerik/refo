const path = require('path')
, fs = require('fs-extra')
, klawSync = require('klaw-sync')

module.exports = (handlers, siteDirectory, staticDirectory) => {
	fs.emptyDirSync(staticDirectory)

	fs.copySync(siteDirectory, staticDirectory, {
		filter: filePath => {
			const extension = path.extname(filePath)

			return !handlers || Object.keys(handlers).reduce((result, currentExtension) => result && extension != currentExtension, true)
		}
	})

	if (handlers)
		Object.entries(handlers).forEach(handler =>
			klawSync(siteDirectory, {
				filter: file => file.stats.isDirectory() || path.extname(file.path) == handler[0]
			})
				.filter(file => !file.stats.isDirectory())
				.forEach(file => handler[1](file.path))
		)
}