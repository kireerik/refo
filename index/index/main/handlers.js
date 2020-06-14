const fs = require('fs-extra')

, getToStaticDirectory = require('refo-directory-to-other-directory')

, getHtmlHandler = require('refo-handle-html')

, bundle = require('bundle-js')
, minifyJS = require('uglify-js').minify

require('hot-module-replacement')()

const getPdfSourceChangeHandler = require('refo-pdf-source-change-handler')

module.exports = ({assetDirectory, siteDirectory, staticDirectory, addStaticFilePath, watchedFileSource, pdfSourceChangeHandler}) => {
	String.prototype.toStaticDirectory = getToStaticDirectory(siteDirectory, staticDirectory)

	const handleHTML = getHtmlHandler(watchedFileSource)
	, handlePdfSourceChange = getPdfSourceChangeHandler(staticDirectory, !!watchedFileSource, pdfSourceChangeHandler)

	, saveHTML = async (staticFilePath, filePath, html) =>
		fs.writeFile(
			staticFilePath
			, await handleHTML(filePath, html)
			, () => handlePdfSourceChange(staticFilePath)
		)

	return {
		'.html':
			filePath =>
				saveHTML(
					filePath.toStaticDirectory()
					, filePath
					, fs.readFileSync(filePath, 'UTF-8')
				)

		, '.js': (() => {
			const path = require('path')

			var requiredModule = {}

			return (filePath, sourceChange) => {
				var staticFilePath = filePath.toStaticDirectory()

				if (filePath.replace(path.resolve(siteDirectory) + path.sep, '').split(path.sep)[0] == assetDirectory) {
					let js = bundle({entry: filePath, disablebeautify: true})

					for (let i = 1; i <= 2; i++)
						js = minifyJS(js).code

					fs.writeFile(staticFilePath, js)
				} else {
					const handleModule = async () =>
						saveHTML(staticFilePath, filePath, require(filePath))

					staticFilePath = staticFilePath.substring(0, staticFilePath.lastIndexOf('.')) + '.html'

					if (addStaticFilePath)
						addStaticFilePath(filePath, staticFilePath)

					if (!requiredModule[filePath] || sourceChange)
						handleModule()

					if (addStaticFilePath && !requiredModule[filePath]) {
						requiredModule[filePath] = true

						module.hot.accept(filePath, handleModule)
					}
				}
			}
		})()
	}
}