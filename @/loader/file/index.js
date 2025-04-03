import endsWith from '../@/endsWith'

import use from './@/use'

import createDirectory from './@/createDirectory'

import usedLoader from '../@/loader'

import loader from './@/loader/index'

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