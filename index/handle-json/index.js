const markdownIt = require('markdown-it')()
, moment = require('moment')

markdownIt.renderer.rules.link_open = (tokens, idx, options, env, self) => {
	tokens[idx].attrPush(['target', '_blank'])
	tokens[idx].attrPush(['rel', 'noopener'])

	return self.renderToken(tokens, idx, options)
}

Number.prototype.round = function (step = 1) {
	const ratio = 1 / step

	return Math.round(this * ratio) / ratio
}

module.exports = (json, full) => {
	(function traverse(object) {
		for (let index in object) {
			if (full && index.includes('-full')) {
				const originalPropertyName = index.replace('-full', '')

				object[originalPropertyName] = object[index]
				delete object[index]

				index = originalPropertyName
			}

			if (!!object[index] && typeof object[index] == 'object')
				if (object[index].private || object[index].full && !full)
					delete object[index]
				else {
					const format = 'YYYY-MM-DD'
					
					if (object[index].endDate) {
						var endDate = moment(object[index].endDate, format)

						if (object[index].endDate.split('-').length == 2)
							endDate = moment(object[index].endDate + endDate.daysInMonth(), format)
					} else if (object[index].hidePresent)
						if (object[index].hideEndDate) {
							object[index].endDate = object[index].startDate

							var endDate = moment(object[index].endDate, format)
						} else {
							var endDate = moment()

							object[index].endDate = endDate.format(format)
						}

					if (object[index].startDate && object[index].endDate) {
						const startDate = moment(object[index].startDate, format)

						if (startDate.isValid() && endDate.isValid() && !object[index].hideDuration || object[index].hideEndDate) {
							const duration = moment.duration(endDate.diff(startDate))
							let years = duration.asYears()

							if (1 < years) {
								years = years.round(.5).toFixed(1).replace('.0', '')

								var period = years + ' year'

								if (1 < years)
									period += 's'
							} else
								var period = duration.humanize().replace('a ', '1 ')

							if (period == '1 few seconds')
								delete object[index].startDate
							else
								object[index].duration = period
						}
					}

					if (object[index].startDate)
						object[index].startDate = object[index].startDate.split('-')[0]

					if (object[index].endDate)
						object[index].endDate = (
							parseInt(object[index].endDate.split('-')[0])
							+ (
								object[index].hidePresent ?
									''
								:
									Math.round(
										moment.duration(endDate - moment(endDate.year(), format)).asYears()
									)
							)
						).toString()

					if (object[index].date)
						object[index].date = object[index].date.split('-')[0]

					if (object[index].releaseDate)
						object[index].releaseDate = object[index].releaseDate.split('-')[0]

					traverse(object[index])
				}
			else
				object[index] =
					markdownIt.renderInline(object[index].split("'").join('’'))
		}
	})(json)

	return json
}