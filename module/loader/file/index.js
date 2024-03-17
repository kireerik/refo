import endsWith from '../.module/endsWith'

import use from './module/use'

import createDirectory from './module/source/createDirectory'

import usedLoader from '../.module/loader'

import loader from './module/loader'

export const [initialize, load] = loader(usedLoader
	, url =>
		['ico', 'png'].some(type => endsWith(url, [type]))

	, (directory, url, remove) => {
		const [path, target] = use(directory, url)

		return `
			import {constants, copyFileSync} from 'fs'

			${createDirectory(target)}

			copyFileSync(
				'${path}', '${target}'
				, constants.COPYFILE_FICLONE
			)
		`
		+ (remove?.(target) ?? '')
	}
)