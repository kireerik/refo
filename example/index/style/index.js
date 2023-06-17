import create from './instance'

import main from './css'

import extract from './extract'

export default () => {
	var {injectGlobal, cache, css} = create()

	, identifiers = [], names = []

	, tag = [identifiers, names]

	const mainCss = method => main(css, tag, method)

	return [
		{
			injectGlobal

			, css: mainCss(identifier => {
				identifiers.push(identifier)

				return identifiers.length - 1
			})

			, name: ({default: styles}) =>
				styles({
					css: mainCss()
				})[
					0
				]

			, style: css
		}
		, () => extract(cache, tag)
	]
}