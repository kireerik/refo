export default (url, createDirectory) =>
	(target, source, type) => `
		import {writeFileSync} from 'fs'

		import result from '${url}'

		${source ? `
			import minify from '#minify/${type}'
		` : ''}

		${createDirectory()}

		writeFileSync(
			'${target}', ${source ?? 'result'}
		)
	`