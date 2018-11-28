const path = require('path')
, fs = require('fs-extra')

, {Gaze} = require('gaze')
, watch = (directory, eventHandler) => (new Gaze(directory + '/**')).on('all', eventHandler)

, getToStaticDirectory = require('../../directoryToOtherDirectory')

var fileSources = {}

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
				getHandler(source[0])(source[0])
		})

	watch(assetDirectory, (event, filePath) => handleSourceChange(filePath))
	watch(siteDirectory, (event, filePath) => {
		switch (event) {
			case 'added': case 'changed': case 'renamed':
				const handle = getHandler(filePath)

				if (handle)
					handle(filePath)
				else
					fs.copy(filePath, filePath.toStaticDirectory())

				handleSourceChange(filePath)
			break;
			case 'deleted': fs.unlink(filePath.toStaticDirectory()); break;
		}
	})
}