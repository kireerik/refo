const {html} = require('common-tags')

module.exports = ({startDate, endDate, duration}) => html`<span class="date">
	${startDate && html`
		${startDate}
		${endDate && `
			– 
		`}
	`}
	${endDate ?
		endDate
	: `
		– present
	`}
	${duration && (`
		&nbsp;` + duration
	)}
</span>`