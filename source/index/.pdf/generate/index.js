import full from '#index/resume/full.html/name'

import resume from '#index/resume/name'

import {resolve} from 'path'

import A4 from '../A4'

import main from './main'

const {staticDirectory} = global

, separator = '/'

export default name => {
	const version = name.includes(full)

	main(
			'file:' + resolve(
				staticDirectory

				+ separator + resume + (version ?
					separator + full
				: '')

				+ (!version ? separator + 'index' : '')

				+ '.html'
			)
		,
			staticDirectory + separator + name
		,
			name.includes(A4) && A4
	)
}