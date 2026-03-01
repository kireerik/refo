import {dirname} from 'path'

import {existsSync} from 'fs'

import {fileURLToPath} from 'url'

const extension = [
	''
	, '.js'
	, '.jsx'
	, '.json'
	, '.ico'
	, '.png'
	, '.svg'
]

const index = [
	''
	, '/index.js'
	, '/index.jsx'
]

const getPath = base =>
	[
		...extension.map(value => base + value)
		, ...index.map(value => base + value)
	]
		.find(path => existsSync(path))
	?? base

export default async function (names, from) {
	const folder = dirname(fileURLToPath(from)) + '/'

	for (const name of names)
		await import(getPath(folder + name))
}
