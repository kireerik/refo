import {dirname} from 'path'

export default target => `
	import
		createDirectory
	from
		'#@loader/file/action/createDirectory'

	createDirectory('${dirname(target)}')
`