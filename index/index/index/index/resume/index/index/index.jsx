import controls from './controls'

import basics from './section/basics'
import skills from './section/skills'
import work from './section/work'
import education from './section/education'
import awards from './section/awards'
import publications from './section/publications'

export default ({styling, json, version}) => <>
	<div class="controls">
		{controls({...json.basics, version})}
	</div>

	<main>{[
		basics(styling, json.basics)
		, skills(json.skills)
		, work(json.work)
		, work(json.project, true)
		, education(json.education)
		, awards(json.awards)
		, publications(json.publications)
	]}</main>
</>