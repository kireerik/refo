import {full, resume, A4} from './name'

const separator = '/'

export default async (origin, name) =>
	new Response(
		await global.getPDF(
				await (async () => {
					const version = name.includes(full)
					, path =
						separator + resume + (version ?
							separator + full
						: '')

					return import.meta.env.DEV ?
						origin + path
					:
						'file:' + (await import('path')).resolve(
							(
								await import(
									'@index/staticDirectory'
								)
							)
								.default

							+ path

							+ (!version ? separator + 'index' : '')

							+ '.html'
						)
				})()
			,
				name.includes(A4) && A4
		)
	)