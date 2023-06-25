const indexName = 'index'
, separator = '/'

, srcDir =
	[indexName + separator].reduce(
		([], value) => value + value
	, '')
	+ indexName

import {get, close} from '../pdfGenerator'

import solid from 'babel-preset-solid'

import outDir from './staticDirectory'

import {defineConfig} from 'astro/config'

export default defineConfig({
	srcDir

	, build: {format: 'file'}

	, integrations: [
		{
			name: ''
			, hooks: {
				'astro:config:setup': ({
					addRenderer, injectRoute
				}) => {
					global.getPDF = get

					addRenderer({
						name: 'SolidJS'

						, serverEntrypoint:
							'@astrojs/solid-js/server.js'

						, jsxImportSource: 'solid-js'
						, jsxTransformOptions: () => ({
							presets: [
								solid(...[, ], {generate: 'ssr'})
							]
						})
					})

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