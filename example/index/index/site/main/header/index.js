import getStyle from './style'

const linkPrefixum = import.meta.env.PROD ? 'refo/' : ''

import {html} from 'common-tags'

import
	getHandledJson
from
	'@index/site/index/resume/main/getHandledJson'

export default ({styling, index, resume}) => {
	const [
		style, {floatRight, brand, selected}
	] =
		getStyle(styling)

	return html`
		<nav class="${style}">
			<nav>
				<a
					class="${brand}${index && ' ' + selected}"
					title="Refo" href="/${linkPrefixum}" rel="noopener"
				>
					Refo
				</a>
				<a
					class="${
						floatRight
						+ (resume ? ' ' + selected : '')
					}"
					title="${
						'View '
						+ getHandledJson().basics.name
						+ '’s resume'
					}"
					href="/${linkPrefixum}resume" rel="noopener"
				>
					resume
				</a>
			</nav>
		</nav>
	`
}