const path = require('path')

, {generatePDF, closePdfGenerator} = require('puppeteer-html2pdf')

module.exports = (staticDirectory, watchChanges
	, {
		sourceDirectory = 'resume'

		, fileNamePrefixum = ''
		, getFileNamePrefixum = () => fileNamePrefixum
		, fileNameSeparator = fileNamePrefixum == '' ? '' : '-'
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

				return getFileNamePrefixum(filePath) + fileNameSeparator + (folder == 'full' ? 'full' : '') + (format == defaultFormat ? '' : format) + currentText + '.pdf'
			}
			, getPdfPath = (format = '') =>
				staticDirectory + '/' + getPdfFileName(format)

			formats.forEach(format =>
				generatePDF(filePath, getPdfPath(format), format)
			)
		}
	}
}