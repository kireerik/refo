import {html} from 'common-tags'

import period from '../period'

export default education => html`${education && html`<section>
	<h2>Education</h2>
	${education.map(({startDate, endDate, duration, institution, area, studyType, courses}) => html`
		<div class="item">
			${period({startDate, endDate, duration})}
			<h3>${institution}</h3>
			${area && `
				<div>
					` + area + `
				</div>
			`}
			${studyType && `
				<div>
					` + studyType + `
				</div>
			`}
			${courses && html`
				<ul>
					${courses.map(course => html`
						<li>
							${course.content ? `
								<span class="date">` + course.date + `</span>
								` + course.content
							:
								course
							}
						</li>
					`)}
				</ul>
			`}
		</div>
	`)}
</section>`}`