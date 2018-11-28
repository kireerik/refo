const path = require('path')
, fs = require('fs-extra')

, getToStaticDirectory = require('../directoryToOtherDirectory')

, {inlineSource} = require('inline-source')
, {minify} = require('html-minifier')

, minifyJS = require('uglify-js').minify
, bundle = require('bundle-js')

, handleHandlebars = require('../handleHandlebars')

, getPdfSourceChangeHandler = require('./pdfSourceChangeHandler')

module.exports = ({assetDirectory, siteDirectory, staticDirectory, watchedFileSource, pdfSourceChangeHandler, handlebarsHandler}) => {
	String.prototype.toStaticDirectory = getToStaticDirectory(siteDirectory, staticDirectory)

	const handlePdfSourceChange = getPdfSourceChangeHandler(staticDirectory, !!watchedFileSource, pdfSourceChangeHandler)

	return {
		'.html':
			async filePath => {
				if (watchedFileSource)
					watchedFileSource.init(filePath)

				var html = fs.readFileSync(filePath, 'UTF-8')

				html = handleHandlebars(filePath, html, assetDirectory, siteDirectory, watchedFileSource && watchedFileSource.add, handlebarsHandler)

				html = await inlineSource(html, {
					rootpath: path.dirname(filePath)
					, compress: false
					, saveRemote: false
					, handlers: [
						source => {
							if (watchedFileSource && source.filepath != '')
								watchedFileSource.add(filePath, source.filepath)

							return Promise.resolve()
						}
					]
				})

				var staticFilePath = filePath.toStaticDirectory()

				fs.writeFile(staticFilePath
					, minify(html, {
						collapseWhitespace: true
						, removeComments: true
						, minifyCSS: true
						, minifyJS: true
					})
					, () => handlePdfSourceChange(staticFilePath)
				)
			}
		, '.js':
			filePath =>
				fs.writeFile(filePath.toStaticDirectory()
					, minifyJS(minifyJS(bundle({entry: filePath, disablebeautify: true})).code).code
				)
	}
}