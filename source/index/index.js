import importAll from '../@/importAll.js'

await importAll([
	'favicon'
	, 'main.js'
	, 'index/index'
	, 'resume'
], import.meta.url)
