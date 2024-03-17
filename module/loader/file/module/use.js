import {cwd} from 'process'
import {fileURLToPath} from 'url'
import {relative, sep} from 'path'

import loader from '../../.module/loader'

const separator = '/'

export default ([sourceDirectory, staticDirectory], url) => {
	const path = relative(
		cwd(), fileURLToPath(url)
	)
		.split(sep).join(separator)

	var target = path

	const removeFirst = (name = 'index', method) => {
		name += separator

		if (target.startsWith(name)) {
			target = target.replace(name, '')

			method?.()
		}
	}
	removeFirst(sourceDirectory)
	removeFirst(...[, ], () => {
		removeFirst()

		target = staticDirectory + separator + target
	})

	return [path, target]
}