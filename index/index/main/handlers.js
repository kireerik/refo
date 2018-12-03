const path = require('path')
, fs = require('fs-extra')

, getToStaticDirectory = require('refo-directory-to-other-directory')

, getHtmlHandler = require('refo-handle-html')

, minifyJS = require('uglify-js').minify
, bundle = require('bundle-js')

require('hot-module-replacement')()

const getPdfSourceChangeHandler = require('refo-pdf-source-change-handler')

var requiredModule = {}

module.exports = ({assetDirectory, siteDirectory, staticDirectory, watchedFileSource, pdfSourceChangeHandler, handlebarsHandler}) => {
	String.prototype.toStaticDirectory = getToStaticDirectory(siteDirectory, staticDirectory)

	const handleHTML = getHtmlHandler(watchedFileSource)
	, handlePdfSourceChange = getPdfSourceChangeHandler(staticDirectory, !!watchedFileSource, pdfSourceChangeHandler)

	String.prototype.saveToStaticDirectory = function(html) {
		var staticFilePath = this.toStaticDirectory()

		fs.writeFile(staticFilePath, html
			, () => handlePdfSourceChange(staticFilePath)
		)
	}

	return {
		'.html':
			async filePath => {
				var html = fs.readFileSync(filePath, 'UTF-8')

				html = await handleHTML(filePath, html)

				filePath.saveToStaticDirectory(html)
			}
		, '.js':
			filePath => {
				if (filePath.replace(path.resolve(siteDirectory) + path.sep, '').split(path.sep)[0] == assetDirectory)
					fs.writeFile(filePath.toStaticDirectory()
						, minifyJS(minifyJS(bundle({entry: filePath, disablebeautify: true})).code).code
					)
				else
					if (!requiredModule[filePath]) {
						requiredModule[filePath] = true

						let html
						;(async function handleModule(path, firstCall) {
							html = require(filePath)

							if (firstCall)
								module.hot.accept(filePath, handleModule)

							html = await handleHTML(filePath, html)

							filePath.replace('.js', '.html')
								.saveToStaticDirectory(html)
						})(undefined, true)
					}
			}
	}
}