import full from '#index/index/index/resume/full.html/name'

import staticDirectory from '#index/staticDirectory'

import resume from '#index/index/index/resume/name'

import {resolve} from 'path'

import A4 from './A4'

import generate from '#pdfGenerator'

const separator = '/'

export default name => {
	const version = name.includes(full)

	generate(
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