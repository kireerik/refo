import icon from '@index/site/icon'

import {html} from 'common-tags'

export default async ({
	name, label, website
	, profiles, summary, summaryFull, email, phone, location
}) =>
	html`
		<header class="flexContainer">
			<h1>${name}</h1>
			${label && `
				<aside>` + label + `</aside>
			`}
			${website && `
				<div id="website">
					` + website + `
				</div>
			`}
			${profiles && html`
				<div class="icons">
					${await icon(
							profiles.length - 1, 'last'
						,
							profiles.map(
								({title, url, network}) => [
									title, url, network
								]
							, [])
					)}
				</div>
			`}
		</header>
		${summary && html`
			<p>${summaryFull} ${summary}</p>
		`}
		${email && `
			<div>
				` + email + `
			</div>
		`}
		${phone && `
			<div>
				` + phone + `
			</div>
		`}
		${location && (
			(
				{address, postalCode, city, countryCode, region} = location
			) => `
				<div>
					` + address + `, ` + postalCode + ` ` + city + `, ` + countryCode + `, ` + region + `
				</div>
			`
		)()}
	`