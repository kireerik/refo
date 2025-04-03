import use from '../use'

import getLast from '../getLast'

import endsWith from '../../../@/endsWith'

import createDirectory from '../createDirectory'

import usedLoader from '../../../@/loader/source'

import loader from './index'

export default (condition, extension, getParameters) =>
	loader(usedLoader, condition
		, (directory, url, remove) =>
			source => {
				var [, target] = use(directory, url)

				const removeLast = value =>
					target = getLast(target, value)

				removeLast('.')

				if (
					endsWith(target, [
						extension + '/' + 'index'
					])
				)
					removeLast('/')

				const [
					type, script
				] =
					getParameters(target) || []

				return source + `
					import {writeFileSync} from 'fs'

					import content from '${url}'

					${script ? `
						import
							minify
						from
							'#@loader/file/action/minify/${type}'
					` : ''}

					${createDirectory(target)}

					writeFileSync(
						'${target}', ${script ?? 'content'}
					)
				`
				+ (remove?.(target) ?? '')
			}
	)