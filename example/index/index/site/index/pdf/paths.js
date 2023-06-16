const name =
	(
		await import('../resume/data')
	)
		.default.basics.name.replaceAll(' ', '')

, getParts = (path, part, method) =>
	part.map(
		name =>
			(result => {
				if (method)
					result = result[method]()

				return result
			})(
				[path, name]
			)
				.join('')
	)

import {resume, full, A4} from './name'

export default
	[
		resume
		, ...getParts(
				resume[0].toUpperCase() + resume.substr(1)
			,
				[
					A4
					, ...getParts(full, ['', A4])
				]
			,
				'reverse'
		)
	].map(
		type => name + '-' + type
	)