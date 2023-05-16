const path = require('path')

, {inlineSource} = require('inline-source')
, {minify} = require('html-minifier')

module.exports = watchedFileSource =>
	async (filePath, html) => {
		if (watchedFileSource)
			watchedFileSource.init(filePath)
console.log('filePath', filePath)
console.log(path.dirname(filePath))
		html = await inlineSource(html, {
			//rootpath: process.cwd()//path.dirname(filePath)
			//, 
			compress: false
			, saveRemote: false
			, handlers: [
				source => {
					if (watchedFileSource && source.filepath != '')
						watchedFileSource.add(
							filePath//.replace(
							//	path.sep + 'index.js'
							//	, ''
							//)
							, source.filepath
						)
console.log(filePath)
console.log(source.filepath)
					return Promise.resolve()
				}
			]
		})

		html = minify(html, {
			collapseWhitespace: true
			, removeComments: true
			, minifyCSS: true
			, minifyJS: true
		})

		return html
	}