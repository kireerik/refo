import trace from 'stack-tracer'

import {register} from 'module'

export default (name, options) =>
	register(name, trace(1).fileName, options)