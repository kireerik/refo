import navigator from '@navigator'

import quicklink from 'quicklink/dist/quicklink.umd?raw'

export default `
	if (!window.load)
		window.addEventListener(
			'load', function method() {
				quicklink.listen({
					delay: 1000
					${
						(import.meta.env.DEV ? `
							, ignores:
								RegExp('.pdf')
						` : '')
					}
				})

				window.removeEventListener(
					'load', method
				)
			}
		)

	${navigator}

	${quicklink}
`