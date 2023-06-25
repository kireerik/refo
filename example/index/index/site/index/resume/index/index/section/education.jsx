import period from '../period'

import template from '@template'

export default education => education && <section>
	<h2>Education</h2>
	{education.map(({
		startDate, endDate, duration, institution, area
		, studyType, courses
	}) =>
		<div class="item">
			{period({startDate, endDate, duration})}
			<h3>{institution}</h3>
			{[
				area, studyType
			].map(
				property => <div>{property}</div>
			)}
			{courses &&
				<ul>
					{courses.map(course =>
						<li>
							{course.content ? <>
								<span class="date">
									{course.date}
								</span>
								{template(course.content)}
							</> :
								course
							}
						</li>
					)}
				</ul>
			}
		</div>
	)}
</section>