import Component from '#@SolidJS/component'

import period from '../period'

const Summary = ({children}) =>
	children &&
		<p class="summary">{children}</p>

import template from '#@SolidJS/template'

const Company = ({as, children, location}) =>
	<Component {...{as}}>
		{children}{location &&
			<span>, {location}</span>
		}
	</Component>

export default (work, product) => work && <section>
	<h2>
		Professional {product && 'Product '} Work Experience
	</h2>
	{work.map(work => (() => {
		const companyIsObject =
			typeof work.company == 'object'

		var group =
			typeof work.position == 'object'
			|| companyIsObject

		const positionContainerNames = [
			'position', 'company'
		]

		, positionContainerName =
			positionContainerNames[Number(companyIsObject)]

		if (group) {
			work[positionContainerName] =
				Object.entries(
					work[positionContainerName]
				).map(([position, object]) => ({
					[positionContainerName]: position, ...object
				}))

			if (companyIsObject && work.company.length == 1) {
				work = [{...work, ...work.company[0]}]
				group = false
			}
		} else
			work = [work]

		const {location, summary} = work

		, positions = group ?
			work[positionContainerName]
		:
			work

		positions.forEach(({highlights}) =>
			highlights?.forEach(
				(highlight, index) =>
					Array.isArray(highlight.content) &&
						highlights.splice(
							index, 1, ...highlight.content
						)
			)
		)

		const head = (
			{
				position, company, location, technologies
				, website, startDate, endDate, duration
			}
			, previous = true
		) =>
			<div
				class={
					'flexContainer' + (previous ? ' next' : '')
				}
			>
				<Component as={'h' + (group ? 4 : 3)}>
					{position}<Company {...{location}}>
						{company && <>
							{position &&
								<span> – </span>
							}
							{template(company)}
						</>}
					</Company>
				</Component>
				{technologies &&
					<span class="flexCenter technologies">
						{technologies}
					</span>
				}
				{website &&
					<span class="flexCenter">
						{website}
					</span>
				}
				{period({startDate, endDate, duration, group})}
			</div>

		, body = ({summary, highlights}) => <>
			<Summary>{summary}</Summary>
			{highlights &&
				<ul class="highlights">
					{highlights.map(highlight =>
						<li>
							{highlight.content ? <>
								{highlight.date &&
									<span class="date">
										{highlight.date}
									</span>
								}
								{highlight.content}
								{highlight.link}
							</> :
								template(highlight)
							}
						</li>
					)}
				</ul>
			}
		</>

		, render = positions =>
			positions.map((position, index) => <>
				{head(position, 1 <= index)}
				{body(position)}
			</>)

		return <div class="item"
			classList={{group, byPosition: companyIsObject}}
		>
			{group ? ((first = positions.length - 1) => <>
				<div class="flexContainer">
					<Company as="h3" {...{location}}>
						{template(
							work[
								positionContainerNames[
									Number(!companyIsObject)
								]
							]
						)}
					</Company>
					{period({
						startDate: positions[first].startDate
						, endDate: positions[0].endDate
					})}
				</div>
				<Summary>{summary}</Summary>
				<div class="timeline">
					{render(positions.slice(0, first))}
					{head(positions[first])}
				</div>
				{body(positions[first])}
			</>)() :
				render(positions)
			}
		</div>
	})())}
</section>