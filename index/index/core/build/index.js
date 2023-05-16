const path = require('path')//simplify impports

, fs = require('fs-extra')
, klaw = require('klaw')

, getToStaticDirectory = require('refo-directory-to-other-directory')

module.exports = (handlers, indexModules, assetDirectory, staticDirectory) => {
	String.prototype.toStaticDirectory = getToStaticDirectory(assetDirectory, staticDirectory)

	fs.emptyDirSync(staticDirectory)
//move favicon.ico
	klaw(assetDirectory).on('data', file => {
		if (handlers)
			var handler = handlers[path.extname(file.path)]//simplify

		const staticFilePath = file.path.toStaticDirectory()

		if (handler)
			handler(file.path)
		else
			if (file.stats.isDirectory())
				fs.ensureDir(staticFilePath)
			else
				fs.copy(file.path, staticFilePath)
	})

	if (handlers && handlers['.js'])
		indexModules.forEach(indexModule =>
			handlers['.js'](
				path.resolve(process.cwd(), indexModule)
			)
		)
}