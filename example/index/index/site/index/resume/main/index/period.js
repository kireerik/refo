import {html} from 'common-tags'

export default ({
	startDate, endDate, duration
	, group
}) => html`
	<span class="date">
		${!group && html`
			${startDate &&
				startDate + ' –'
			}
			${endDate ?
				endDate
			: 
				'present'
			}
		`}
		${duration &&
			'&nbsp;' + duration
		}
	</span>
`