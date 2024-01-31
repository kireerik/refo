import withModuleReloading from '#withModuleReloading'

import navigator from '#navigator'

import quicklink from 'quicklink/dist/quicklink.umd.js?raw'

export default `
	if (!window.load)
		window.addEventListener(
			'load', function method() {
				window.quicklink.listen({
					delay: 1000
					${
						(withModuleReloading ? `
							, ...(() => {
								window.quicklink.prefetch =
									function () {}

								return {
									ignores:
											{test: () => true}
										||
											RegExp('.pdf')
								}
							})()
						` : '')
					}
				})

				window.removeEventListener('load', method)
			}
		)

	${navigator}

	${quicklink}
`