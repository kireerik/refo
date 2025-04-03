import icon from '##@/icon'

import template from '#@SolidJS/template'

export default (
	styling
	, {
		name, label, website
		, profiles, summary, summaryFull
		, email, phone, location
	}
) => <>
	<header class="flexContainer">
		<h1>{name}</h1>
		{label &&
			<aside>{label}</aside>
		}
		{website &&
			<div id="website">
				{template(website)}
			</div>
		}
		{profiles &&
			icon(
					styling
				,
					`
						padding-top: 4px;
						padding-bottom: 4px;
					`
				,
					profiles.length - 1, `margin-right: -12.5px;`
				,
					profiles.map(
						({title, url, network}) => [
							title, url, network
						]
					, [])
			)
		}
	</header>
	{summary &&
		<p>{summaryFull} {summary}</p>
	}
	{[
		email, phone
	].map(
		property => property && <div>{property}</div>
	)}
	{location && (
		(
			{address, postalCode, city, countryCode, region} = location
		) =>
			<div>
				{address}, {postalCode} {city}, {countryCode}, {region}
			</div>
	)()}
</>