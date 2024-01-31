import trace from '#trace'

import {dirname} from 'path'

export default (names, depth = 0) => {
	const folder = dirname(trace(1 + depth).fileName) + '/'

	names.map(name => import(folder + name))
}