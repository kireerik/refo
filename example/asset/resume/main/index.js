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
</main>`, {resume: true})