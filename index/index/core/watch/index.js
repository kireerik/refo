const path = require('path')
, fs = require('fs-extra')

, {Gaze} = require('gaze')
, watch = (directory, eventHandler) => (new Gaze(directory + '/**')).on('all', eventHandler)

, getToStaticDirectory = require('refo-directory-to-other-directory')

var staticFilePaths = {}
, fileSources = {}

module.exports.addStaticFilePath = (filePath, staticFilePath) => {
	if (!staticFilePaths[filePath])
		staticFilePaths[filePath] = staticFilePath
}

module.exports.watchedFileSource = {}
module.exports.watchedFileSource.init = filePath => fileSources[filePath] = []
module.exports.watchedFileSource.add = (filePath, sourceFilePath) => {
	if (!fileSources[filePath].includes(sourceFilePath))
		fileSources[filePath].push(sourceFilePath)
}

module.exports.watch = (handlers, assetDirectory, siteDirectory, staticDirectory) => {
	String.prototype.toStaticDirectory = getToStaticDirectory(siteDirectory, staticDirectory)

	const getHandler = filePath => handlers[path.extname(filePath)]
	, handleSourceChange = filePath =>
		Object.entries(fileSources).forEach(source => {
			if (source[1].includes(filePath))
				getHandler(source[0])(source[0], true)
		})

	watch(assetDirectory, (event, filePath) => handleSourceChange(filePath))
	watch(siteDirectory, (event, filePath) => {
		switch (event) {
			case 'added': case 'changed': case 'renamed':
				const handle = getHandler(filePath)

				if (handle)
					handle(filePath)
				else {
					const staticFilePath = filePath.toStaticDirectory()

					if (fs.lstatSync(filePath).isDirectory())
						fs.ensureDir(staticFilePath)
					else
						fs.copy(filePath, staticFilePath)
				}

				handleSourceChange(filePath)
			break;
			case 'deleted':
				fs.unlink(
					staticFilePaths[filePath] ?
						staticFilePaths[filePath]
					:
						filePath.toStaticDirectory()
				)

				if (staticFilePaths[filePath])
					delete staticFilePaths[filePath]

				if (fileSources[filePath])
					delete fileSources[filePath]
			break;
		}
	})
}