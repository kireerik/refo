import trace from 'stack-tracer'

import {dirname} from 'path'

export default function (names, depth = 0) {
	const folder = dirname(trace(1 + depth).fileName) + '/'

	names.map(name => import(folder + name))
}