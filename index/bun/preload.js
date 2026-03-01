import {cwd} from 'process'
import {join} from 'path'
import {existsSync, statSync} from 'fs'

import {transformSync} from '@babel/core'

const root = cwd()

const extensions = [
	''
	, '.js'
	, '.jsx'
	, '.json'
	, '.ico'
	, '.png'
	, '.svg'
]

const indexes = [
	'/index.js'
	, '/index.jsx'
	, '/index.json'
]

const resolve = path => {
	for (const extension of extensions) {
		const candidate = path + extension

		if (existsSync(candidate)) {
			if (!extension && statSync(candidate).isDirectory())
				continue

			return candidate
		}
	}

	for (const index of indexes) {
		const candidate = path + index

		if (existsSync(candidate))
			return candidate
	}

	return path
}

Bun.plugin({
	name: 'refo-aliases-and-jsx'
	, setup(build) {
		build.onResolve({filter: /^##@\//}, args => ({
			path: resolve(join(root, 'source', '@', args.path.slice(4)))
		}))

		build.onResolve({filter: /^##\//}, args => ({
			path: resolve(join(root, 'source', args.path.slice(3)))
		}))

		build.onResolve({filter: /^#@\//}, args => ({
			path: resolve(join(root, '@', args.path.slice(3)))
		}))

		build.onLoad({filter: /\.jsx$/}, async args => ({
			contents:
				transformSync(
					await Bun.file(args.path).text()
					, {
						presets: [
							['solid', {generate: 'ssr'}]
						]
					}
				)
					.code
			, loader: 'js'
		}))
	}
})
