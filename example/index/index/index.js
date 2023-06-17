const indexName = 'index'
, separator = '/'

, srcDir =
	[indexName + separator].reduce(
		([], value) => value + value
	, '')
	+ indexName

import {get, close} from '../pdfGenerator'

import outDir from './staticDirectory'

import {defineConfig} from 'astro/config'

export default defineConfig({
	srcDir

	, build: {format: 'file'}

	, integrations: [
		{
			name: ''
			, hooks: {
				'astro:config:setup': ({injectRoute}) => {
					global.getPDF = get

					if (import.meta.env.DEV)
						injectRoute({
							pattern: ''
							, entryPoint:
								srcDir + [
									'pages', '[...path]'
								].reduce(
									(result, value) =>
										result + separator + value
								, '')
						})
				}
				, 'astro:server:done': close
				, 'astro:build:done': close
			}
		}
	]

	, outDir
})