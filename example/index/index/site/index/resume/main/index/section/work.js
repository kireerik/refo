import {html} from 'common-tags'

import period from '../period'

const get = summary => summary && `
	<p class="summary">` + summary + `</p>
`

export default (work, product) => html`${work && html`<section>
	<h2>Professional ${product && 'Product '} Work Experience</h2>
	${work.map(work => (() => {
		const companyIsObject = typeof work.company == 'object'

		var group = typeof work.position == 'object' || companyIsObject

		const positionContainerNames = ['position', 'company']

		, positionContainerName = positionContainerNames[Number(companyIsObject)]

		if (group) {
			work[positionContainerName] = Object.entries(work[positionContainerName]).map(([position, object]) => ({
				[positionContainerName]: position, ...object
			}))

			if (companyIsObject && work.company.length == 1) {
				work = [{...work, ...work.company[0]}]
				group = false
			}
		} else
			work = [work]

		const headerType = group ? 4 : 3

		, positions = group ?
			work[positionContainerName]
		:
			work

		positions.forEach(({highlights}) =>
			highlights && highlights.forEach((highlight, index) =>
				Array.isArray(highlight.content) &&
					highlights.splice(index, 1, ...highlight.content)
			)
		)

		return html`
			<div class="item${group && ' ' + html`group${companyIsObject && ' byPosition'}`}">
				${group && html`
					<div class="flexContainer">
						<h3>
							${work[
								positionContainerNames[
									Number(!companyIsObject)
								]
							]}${work.location && html`
								<span>, ${work.location}</span>
							`}
						</h3>
						${period({
							startDate: positions[positions.length - 1].startDate
							, endDate: positions[0].endDate
						})}
					</div>
					${get(work.summary)}
					<div class="timeline">
				`}

				${positions.map(({position, company, location, technologies, website, startDate, endDate, duration, summary, highlights}, index) => html`
						<div class="flexContainer${1 <= index && ' next'}">
							<h${headerType}>
								${position}${company && html`
									${position &&
										`<span> – </span>`
									}${company}
								`}${location && html`
									<span>, ${location}</span>
								`}
							</h${headerType}>
							${technologies && `
								<span class="flexCenter technologies">` + technologies + `</span>
							`}
							${website && `
								<span class="flexCenter">` + website + `</span>
							`}
							${period({
								startDate, endDate, duration
								, group
							})}
						</div>
					${group && index + 1 == positions.length && `
						</div>
					`}
					${get(summary)}
					${highlights && html`
						<ul class="highlights">
							${highlights.map(highlight => html`
								<li>
									${highlight.content ? html`
										${highlight.date && `
											<span class="date">` + highlight.date + `</span>
										`}
										${highlight.content}
										${highlight.link}
									` :
										highlight
									}
								</li>
							`)}
						</ul>
					`}
				`)}
			</div>
		`
	})())}
</section>`}`