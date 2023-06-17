import * as icon from './icon'
import svg from '@svg'

import {html} from 'common-tags'

export default (selected, name, content) =>
	Promise.all(content.map(
		async ([title, href, network], index) =>
			html`
				<a
					${index == selected &&
						'class="' + name + '"'
					}
					title="${title}" href="${href}"
					target="_blank" rel="noopener"
				>
					${await svg(icon[network])}
				</a>
			`
		)
	)