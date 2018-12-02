const path = require('path')

, {generatePDF, closePdfGenerator} = require('puppeteer-html2pdf')

module.exports = (staticDirectory, watchChanges
	, {
		sourceDirectory = 'resume'

		, fileNameSeparator = '-'
		, getFileNamePrefixum = async page => (await page.title()).split(fileNameSeparator)[0].split(' ').join('')
		, mainFileName = sourceDirectory

		, defaultFormat = 'Letter'
		, formats = [defaultFormat, 'A4']
	} = {}
) => {
	if (!watchChanges)
		closePdfGenerator()

	return filePath => {
		if (filePath.replace(path.resolve(staticDirectory) + path.sep, '').split(path.sep)[0] == sourceDirectory) {
			let folder = filePath.split(path.sep)
			folder = folder[folder.length - 1 - 1]

			, getPdfFileName = format => {
				var currentText = mainFileName

				if (folder == 'full' || format != defaultFormat)
					currentText = currentText[0].toUpperCase() + currentText.substr(1)

				return fileNameSeparator + (folder == 'full' ? 'full' : '') + (format == defaultFormat ? '' : format) + currentText + '.pdf'
			}
			, getPdfPath = (format = '') => {
				var pdfFileName	= getPdfFileName(format)

				return async page =>
					staticDirectory + '/' + (await getFileNamePrefixum(page)) + pdfFileName
			}

			formats.forEach(format =>
				generatePDF(filePath, getPdfPath(format), format)
			)
		}
	}
}