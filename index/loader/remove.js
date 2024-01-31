import {unlinkSync, readdirSync, rmdirSync} from 'fs'
import {dirname} from 'path'

export default path =>
	() => {
		unlinkSync(path)

		const set = () =>
			path = dirname(path)

		for (set(); !readdirSync(path).length; set())
			rmdirSync(path)
	}