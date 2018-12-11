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

	String.prototype.save = function(html) {
		const filePath = this.toString()

		fs.writeFile(filePath, html
			, () => handlePdfSourceChange(filePath)
		)
	}

	return {
		'.html':
			async filePath => {
				var html = fs.readFileSync(filePath, 'UTF-8')

				html = await handleHTML(filePath, html)

				filePath.toStaticDirectory().save(html)
			}
		, '.js': (() => {
			const path = require('path')

			var requiredModule = {}

			return filePath => {
				if (filePath.replace(path.resolve(siteDirectory) + path.sep, '').split(path.sep)[0] == assetDirectory) {
					let js = bundle({entry: filePath, disablebeautify: true})

					for (let i = 1; i <= 2; i++)
						js = minifyJS(js).code

					fs.writeFile(filePath.toStaticDirectory(), js)
				} else {
					let staticFilePath = (filePath.substring(0, filePath.lastIndexOf('.')) + '.html').toStaticDirectory()

					if (addStaticFilePath)
						addStaticFilePath(filePath, staticFilePath)

					if (!requiredModule[filePath]) {
						requiredModule[filePath] = true

						let html
						;(async function handleModule(path, firstCall) {
							html = require(filePath)

							if (firstCall)
								module.hot.accept(filePath, handleModule)

							html = await handleHTML(filePath, html)

							staticFilePath.save(html)
						})(undefined, true)
					}
				}
			}
		})()
	}
}