import {dirname} from 'path'

export default target => `
	import
		createDirectory
	from
		'#@loader/file/action/createDirectory.js'

	createDirectory('${dirname(target)}')
`