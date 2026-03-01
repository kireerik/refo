import importAll from './importAll.js'

export default async function (from, ...names) {
	await importAll(names.map(name => name + '.html'), from)
}
