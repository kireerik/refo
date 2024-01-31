import {accessSync, mkdirSync} from 'fs'

export default directory => {
	try {
		accessSync(directory)
	} catch {
		mkdirSync(directory, {
			recursive: true
		})
	}
}