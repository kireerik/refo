const path = require('path')
, fs = require('fs-extra')

, {Gaze} = require('gaze')
, watch = (directory, eventHandler) => (new Gaze(directory + '/**')).on('all', eventHandler)

, getToStaticDirectory = require('refo-directory-to-other-directory')

//var staticFilePaths = {}
var fileSources = {}

require('hot-module-replacement')()

module.exports = {
	//addStaticFilePath: (filePath, staticFilePath) => {
	//	if (!staticFilePaths[filePath])
	//		staticFilePaths[filePath] = staticFilePath
	//}

	/*, */watchedFileSource: {
		init: filePath => fileSources[filePath] = []
		, add: (filePath, sourceFilePath) => {
			if (!fileSources[filePath].includes(sourceFilePath))
				fileSources[filePath].push(sourceFilePath)
		}
	}

	, watch: (
		handlers, indexModules
		, assetDirectory, staticDirectory
	) => {
		String.prototype.toStaticDirectory = getToStaticDirectory(assetDirectory, staticDirectory)

		const getHandler = filePath => handlers[path.extname(filePath)]
		, handleSourceChange = filePath =>
			Object.entries(fileSources).forEach(source => {
console.log('source: ', source)
				if (source[1].includes(filePath))
					handlers['.js']/*getHandler(source[0])*/(source[0], true)
			})

		watch(assetDirectory, (event, filePath) => handleSourceChange(filePath))
		//watch(/*rootDirectory*/, (event, filePath) => handleSourceChange(filePath))

		module.hot.accept(process.cwd(), () => {
			const previousIndexModules = indexModules

			indexModules = require(index)

			//handle new indexModules//, and removed ones
			indexModules.forEach(indexModule => {
				if (!previousIndexModules.includes(indexModule))
					handlers['.js'](
						indexModule//path.resolve(process.cwd(), indexModule)
					)
			})
			previousIndexModules.forEach(indexModule => {
				if (!indexModules.includes(indexModule)) {
					fs.unlink(filePath.toStaticDirectory())

					if (fileSources[filePath])
						delete fileSources[filePath]
				}
			})
		})
if (false)//copy files for assetDirectory or handle js on new
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

					//handleSourceChange(filePath)// ?? (should I use this and if so where?) (no not needed here)
				break;
				case 'deleted':
					fs.unlink(
						//staticFilePaths[filePath] ?
						//	staticFilePaths[filePath]
						//:
							filePath.toStaticDirectory()
					)

					//if (staticFilePaths[filePath])
					//	delete staticFilePaths[filePath]

					if (fileSources[filePath])
						delete fileSources[filePath]
				break;
			}
		})
	}
}