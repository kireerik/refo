const fs = require('fs-extra')
, path = require('path')

, getToStaticDirectory = require('refo-directory-to-other-directory')

, getHtmlHandler = require('refo-handle-html')

, bundle = require('bundle-js')
, minifyJS = require('uglify-js').minify

require('hot-module-replacement')()//check if can be separated (it will be common)

const getPdfSourceChangeHandler = require('refo-pdf-source-change-handler')

module.exports = ({
	assetDirectory, staticDirectory
	, watchChanges, watchedFileSource
	, pdfSourceChangeHandler
}) => {
	const toStaticDirectory = pathX =>
		getToStaticDirectory(
			process.cwd() + path.sep
			+ pathX.replace(
				path.resolve(process.cwd()) + path.sep
				, ''
			).split(path.sep)[0]
		,
			staticDirectory
		).call(pathX)

	const handleHTML = getHtmlHandler(watchedFileSource)
	, handlePdfSourceChange = getPdfSourceChangeHandler(staticDirectory, !!watchedFileSource, pdfSourceChangeHandler)

	, saveHTML = async (staticFilePath, filePath, html) =>
		fs.outputFile(
			staticFilePath
			, await handleHTML(filePath, html)
			, () => handlePdfSourceChange(staticFilePath)
		)

	return {
		'.html':
			filePath =>
				saveHTML(
					toStaticDirectory(filePath)
					, filePath
					, fs.readFileSync(filePath, 'UTF-8')
				)

		, '.js': (() => {//separate .js and .index (and .)
			const path = require('path')

			return (filePath, sourceChange) => {
				const staticFilePath =
					toStaticDirectory(filePath)

				if (
					filePath.includes(
						path.resolve(assetDirectory)
					)
				) {
					let js = bundle({entry: filePath, disablebeautify: true})

					for (let i = 1; i <= 2; i++)
						js = minifyJS(js).code

					fs.writeFile(staticFilePath, js)
				} else {
					let directory, fP = filePath
console.log('fp: ', fP)
//fp = filePath.replace(path.sep + 'index.js', '')
//console.log('fp: ', fP)

					//if (!sourceChange) {
						const index =
							fP + path.sep + 'index.js'

						if (fs.existsSync(index)) {
							directory = true
//							fP = index
						}
					//}

					let html//
					const requireModule = () =>
						html = require(fP)
					, saveModule = () =>
						saveHTML(
								staticFilePath
								+ (directory ?
									path.sep + 'index'
								: '')
								+ '.html'
							,
								fP
							,
								require(fP)//html
						)

					saveModule()

					if (!sourceChange) {//
						//requireModule()

						if (watchChanges)
							module.hot.accept(fP, () => {
console.log('hot')
								//requireModule()
								saveModule()
							})
					}

					//saveModule()

					/*let html, saveModule, directory

					if (!sourceChange) {
						const requireModule = () =>
							html = require(filePath)

						requireModule()

						if (watchChanges)
							module.hot.accept(filePath, () => {
								requireModule()// consider simplifying
								saveModule()
							})

						const index =
							filePath + path.sep + 'index.js'

						if (fs.existsSync(index)) {
							directory = true
							filePath = index
						}
					}

					(saveModule = () =>
						saveHTML(
								staticFilePath
								+ (directory ?
									path.sep + 'index'
								: '')
								+ '.html'
							,
								filePath
							,
								html
						)
					)()*/
				}
			}
		})()
	}
}