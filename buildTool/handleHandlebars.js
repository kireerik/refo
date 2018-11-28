const path = require('path')
, fs = require('fs-extra')
, klawSync = require('klaw-sync')

, getToAssetDirectory = require('./directoryToOtherDirectory')

, handlebars = require('handlebars')
, handleJSON = require('./handleJSON')

, getFileName = filePath => path.basename(filePath, path.extname(filePath))
, readFile = filePath => fs.readFileSync(filePath, 'UTF-8')

module.exports = (filePath, html, assetDirectory, siteDirectory, addWatchedFileSource, {globalDirectory = 'global'} = {}) => {
	String.prototype.toAssetDirectory = getToAssetDirectory(siteDirectory, assetDirectory)

	const sourceAssetDirectory = path.dirname(filePath.toAssetDirectory()).split(path.sep).join('/') + '/'
	, sourceFile = path.basename(filePath, '.html') + '.json'
	, sourceInParentAssetDirectory = fs.existsSync(sourceAssetDirectory + '../' + sourceFile)

	, sourceFolder = sourceInParentAssetDirectory ? '../' : ''
	, sourcePath = path.resolve(sourceAssetDirectory + sourceFolder + sourceFile)

	if (addWatchedFileSource)
		addWatchedFileSource(filePath, sourcePath)

	const registerPartials = templateFolder => {
		if (fs.existsSync(templateFolder))
			klawSync(templateFolder)
				.filter(file => !file.stats.isDirectory())
				.forEach(file => {
					handlebars.registerPartial(getFileName(file.path), readFile(file.path))

					if (addWatchedFileSource)
						addWatchedFileSource(filePath, file.path)
				})
	}
	registerPartials(assetDirectory + '/' + globalDirectory)
	registerPartials(sourceAssetDirectory + sourceFolder + getFileName(filePath))

	var json = fs.existsSync(sourcePath) ?
		JSON.parse(readFile(sourcePath))
	:
		{}

	, urlPath = filePath.replace(path.resolve(siteDirectory) + path.sep, '').split(path.sep).join('/').replace('/' + path.basename(filePath), '')

	if (!urlPath.includes('/'))
		urlPath = getFileName(urlPath)

	urlPath.split('/').forEach(urlPathPart => json[urlPathPart] = 'true')

	const full = sourceInParentAssetDirectory && path.dirname(filePath).split(path.sep).pop() == 'full'
	if (full && json.basics)
		json.basics.version = 'full'

	json = handleJSON(json, full)

	;(function traverse(object) {
		for (let index in object)
			if (!!object[index] && typeof object[index] == 'object')
				traverse(object[index])
			else
				object[index] = new handlebars.SafeString(object[index])
	})(json)

	return handlebars.compile(html)(json)
}