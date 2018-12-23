const path = require('path')

, fs = require('fs-extra')
, klaw = require('klaw')

, getToStaticDirectory = require('refo-directory-to-other-directory')

module.exports = (handlers, siteDirectory, staticDirectory) => {
	String.prototype.toStaticDirectory = getToStaticDirectory(siteDirectory, staticDirectory)

	fs.emptyDirSync(staticDirectory)

	klaw(siteDirectory).on('data', file => {
		if (handlers)
			var handler = handlers[path.extname(file.path)]

		const staticFilePath = file.path.toStaticDirectory()

		if (handler)
			handler(file.path)
		else
			if (file.stats.isDirectory())
				fs.ensureDir(staticFilePath)
			else
				fs.copy(file.path, staticFilePath)
	})
}