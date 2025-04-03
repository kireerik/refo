import create from './instance'

import main from './css'

import Component from '#@SolidJS/component'
import {
	tags
} from
	'../../node_modules/@emotion/styled/src/tags.js?module'

import extract from './extract'

export default () => {
	var {injectGlobal, cache, css} = create()

	, identifiers = [], names = []

	, tag = [identifiers, names]

	css = main(css, tag)

	var styled = as => (...parameters) => {
		const name = css(...parameters)

		, names = (as.class ? as.class + ' ' : '') + name

		var Result = ({
			as: component, class: given, ...properties
		}) =>
			<Component {...{
				as: component ?? as
				, class:
					(component ? names : name)
					+ (given ? ' ' + given : '')
				, ...properties
			}}/>

		Result.toString = () => '.' + name
		Result.class = names
		Result.as = as =>
			properties =>
				<Result {...{as, ...properties}}/>

		return Result
	}

	tags.forEach(tag =>
		styled[tag] = styled(tag)
	)

	return [
		{
			injectGlobal

			, css

			, styled
		}
		, () => extract(cache, tag)
	]
}