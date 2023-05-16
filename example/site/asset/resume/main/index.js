const main = require('../../main')

, basics = require('./section/basics')
, skills = require('./section/skills')
, work = require('./section/work')
, education = require('./section/education')
, awards = require('./section/awards')
, publications = require('./section/publications')

module.exports = json => main(`<main>
	` +
		basics(json.basics)
		+ skills(json.skills)
		+ work(json.work)
		+ work(json.project, true)
		+ education(json.education)
		+ awards(json.awards)
		+ publications(json.publications)
	+ `
	<p class="branding">
		Designed by <a title="Oengi.com" href="https://oengi.com/" target="_blank" rel="noopener">Erik Engi</a>
	</p>
</main>`, {resume: true})