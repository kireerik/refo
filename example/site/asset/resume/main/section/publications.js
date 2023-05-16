const {html} = require('common-tags')

module.exports = publications => html`${publications && html`<section>
	<h2>Publications</h2>
	${publications.map(({releaseDate, name, website, summary, links}) => html`
		<div class="item">
			${releaseDate && `
				<span class="date">
					` + releaseDate + `
				</span>
			`}
			<h3>${name}</h3>
			${website && `
				<div>
					` + website + `
				</div>
			`}
			${summary && `
				<p class="summary">` + summary + `</p>
			`}
			${links && html`
				<ul>
					${links.map(link => `
						<li>` + link + `</li>
					`)}
				</ul>
			`}
		</div>
	`)}
</section>`}`