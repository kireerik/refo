import markdownIt from 'markdown-it'
import moment from 'moment'

const markdown = markdownIt()

markdown.renderer.rules.link_open =
	(tokens, index, options, undefined, self) => {
		[
			['target', '_blank']
			, ['rel', 'noopener']
		].forEach(parameter =>
			tokens[index].attrPush(parameter)
		)

		return self.renderToken(tokens, index, options)
	}

Number.prototype.round = function (step = 1) {
	const ratio = 1 / step

	return Math.round(this * ratio) / ratio
}

export default (json, full) => {
	json = JSON.parse(JSON.stringify(json))

	;(function traverse(object) {
		for (let index in object) {
			if (full && index.includes('-full')) {
				const originalPropertyName = index.replace('-full', '')

				object[originalPropertyName] = object[index]
				delete object[index]

				index = originalPropertyName
			}

			({
				object: () => {
					if (
							object[index].private
						||
							object[index].full && !full
					)
						delete object[index]
					else {
						const format = 'YYYY-MM-DD'

						, {hideEndDate} = object[index]

						if (object[index].endDate) {
							var endDate =
								moment(
									object[index].endDate, format
								)

							if (
									object[index].endDate.toString()
										.split('-').length
								==
									2
							)
								endDate = moment(
										object[index].endDate
										+ endDate.daysInMonth()
									,
										format
								)
						} else if (object[index].hidePresent) {
							if (hideEndDate)
								object[index].endDate =
									object[index].startDate

							var endDate = moment(
								...(hideEndDate ? [
									object[index].endDate, format
								] : [])
							)

							if (!hideEndDate)
								object[index].endDate =
									endDate.format(format)
						}

						if (
								object[index].startDate
							&&
								object[index].endDate
						) {
							const startDate = moment(
								object[index].startDate, format
							)

							if (
										startDate.isValid()
									&&
										endDate.isValid()
									&&
										!object[index].hideDuration
								||
									hideEndDate
							) {
								const duration = moment.duration(
									endDate.diff(startDate)
								)
								let years = duration.asYears()
								, period

								if (1 < years) {
									years =
										years.round(.5).toFixed(1)
											.replace('.0', '')

									period = years + ' year'

									if (1 < years)
										period += 's'
								} else
									period =
										duration.humanize()
											.replace('a ', '1 ')

								if (period == '1 few seconds')
									delete object[index].startDate
								else
									object[index].duration = period
							}
						}

						[
							'startDate', 'endDate'
							, 'date', 'releaseDate'
						].forEach(name => {
							if (object[index][name])
								object[index][name] =
									object[index][name]
										.toString().split('-')[0]
						})

						if (object[index].endDate)
							object[index].endDate =
								parseInt(object[index].endDate)
								+ (
									!object[index].hidePresent &&
										Math.round(
											moment.duration(
													endDate
												-
													moment(
														endDate.year()
														, format
													)
											)
												.asYears()
										)
								)

						traverse(object[index])
					}
				}
				, string: () =>
					object[index] =
						markdown.renderInline(
							object[index].split("'").join('’')
						)
			})[
				typeof object[index]
			]
				?.()
		}
	})(json)

	return json
}