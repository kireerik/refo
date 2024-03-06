import {cwd} from 'process'
import {fileURLToPath} from 'url'
import {relative, sep, dirname} from 'path'

import staticDirectory from '#staticDirectory'

import getWrite from './write'

import {transformSync} from '@babel/core'

import graphics from './graphics'

const dot = '.'

, endsWith = (value, names) =>
	value.endsWith(
		names.reduce((result, name) =>
			result + dot + name
		, '')
	)

, querySeparator = '?'

, indexName = 'index'

, JS = 'js'
, JSON = 'json'

, separator = '/'

, perIndex = separator + indexName

, HTML = 'html'

, format = 'module'

, index = indexName + separator

import {register} from 'module'

var remove

export const initialize = withModuleReloading => {
	if (withModuleReloading)
		remove = target => `
			import remove from '#@loader/remove'

			import.meta.hot.prune(remove('${target}'))
		`
}
, load = (url, context, nextLoad) => {
	const file = [
		'ico', 'png'
	]
		.some(type => endsWith(url, [type]))

	, module = url.endsWith(querySeparator + 'module')

	, raw = url.endsWith(querySeparator + 'raw')

	, javaScript = [
		JS, JSON, JSON + perIndex
	]
		.some(type => endsWith(url, [type, JS]))

	, fileOrJavaScript = file || javaScript

	, javaScriptExtensibleMarkupLanguage =
		endsWith(url, ['jsx'])

	, fileOrAnyJavaScript =
		fileOrJavaScript

		|| javaScriptExtensibleMarkupLanguage
		|| [
			'', perIndex
		]
			.some(type => endsWith(url, [HTML + type, JS]))

	return (
		fileOrAnyJavaScript

		|| module || raw || endsWith(url, ['svg'])
	) ? (async () => {
		const getSource = async (usedContext = context) =>
			(
				await nextLoad(url, usedContext)
			)
				.source.toString()

		return {
			shortCircuit: true
			, format
			, source: await (
				fileOrAnyJavaScript
			? (async () => {
				const path = relative(
					cwd(), fileURLToPath(url)
				)
					.split(sep).join(separator)

				var target = path

				const removeFirst = method => {
					if (target.startsWith(index)) {
						target = target.replace(index, '')

						method?.()
					}
				}
				removeFirst()
				removeFirst(() => {
					removeFirst()

					target = staticDirectory + separator + target
				})

				const createDirectory = () => `
					import
						createDirectory
					from
						'#@loader/createDirectory'

					createDirectory('${dirname(target)}')
				`

				, removeLast = extension => {
					const removeLast = value =>
						target =
							target
								.split(value)
								.toSpliced(-1)
								.join(value)

					removeLast(dot)

					if (endsWith(target, [extension + perIndex]))
						removeLast(separator)
				}

				, write = getWrite(url, createDirectory)

				return await
					fileOrJavaScript
				? (async () => {
					if (file)
						var result = `
							import {
								constants, copyFileSync
							} from
								'fs'

							${createDirectory()}

							copyFileSync(
								'${path}', '${target}'
								, constants.COPYFILE_FICLONE
							)
						`
					else {
						removeLast(JSON)

						var result =
								await getSource()
							+
								write(
									target
									, ...(endsWith(target, [JS]) ? [
										`minify(result)`
										, 'script'
									] : [])
								)
					}

					return result + (remove?.(target) ?? '')
				})() : (async () => {
					if (javaScriptExtensibleMarkupLanguage)
						var usedContext = {...context, format}

					var result =
						await getSource(usedContext)

					if (javaScriptExtensibleMarkupLanguage)
						result =
							transformSync(result, {
								presets: [
									['solid', {generate: 'ssr'}]
								]
								, targets: {node: 'current'}
							})
								.code

					removeLast(HTML)

					if (endsWith(target, [HTML]))
						result +=
							write(target, `
								await minify(
									(
										await import('solid-js/web')
									)
										.renderToString(
											() => result
										)
								)
							`, HTML)
							+ (remove?.(target) ?? '')

					return result
				})()
			})() : (async () => {
				const result =
					await getSource({...context, format})

				return module ? 
					result
				: raw ?
					`export default String.raw\`${result}\``
				:
					graphics(result)
			})())
		}
	})() :
		nextLoad(url, context)
}