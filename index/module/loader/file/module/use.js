import {cwd} from 'process'
import {fileURLToPath} from 'url'
import {relative, sep} from 'path'

import staticDirectory from '#staticDirectory'

import loader from '../../.module/loader'

const indexName = 'index'

, separator = '/'

, index = indexName + separator

export default url => {
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

	return [path, target]
}