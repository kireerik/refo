const {html} = require('common-tags')

, period = require('../period')

module.exports = (work, projectWork) => html`${work && html`<section>
	<h2>Professional ${projectWork ? 'Project Work' : 'Work'} Experience</h2>
	${work.map(({position, company, location, technologies, website, startDate, endDate, duration, summary, highlights}) => html`
		<div class="item">
			<div class="flexContainer">
				${position ? html`
					<h3>${position}
						${company && html`
							<span>– ${company}${location && (', ' + location)}</span>
						`}
					</h3>
				` : html`
					<h3>${company}</h3>
					${technologies && `
						<span class="flexCenter color666">` + technologies + `</span>
					`}
				`}
				${website && `
					<span class="flexCenter">` + website + `</span>
				`}
				${period({startDate, endDate, duration})}
			</div>
			${summary && `
				<p class="summary">` + summary + `</p>
			`}
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
		</div>
	`)}
</section>`}`