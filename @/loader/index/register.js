import {register} from 'module'

export default (name, options) =>
	register(name, import.meta.url, options)