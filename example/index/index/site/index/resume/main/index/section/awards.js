import {html} from 'common-tags'

export default awards => html`${awards && html`<section>
	<h2>Awards</h2>
	${awards.map(({date, title, awarder, summary}) => html`
		<div class="item">
			${date && `
				<span class="date">
					` + date + `
				</span>
			`}
			<h3>${title}</h3>
			${awarder && `
				<div>
					` + awarder + `
				</div>
			`}
			${summary && `
				<p class="summary">` + summary + `</p>
			`}
		</div>
	`)}
</section>`}`