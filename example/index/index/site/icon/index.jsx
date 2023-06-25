import * as icon from './index/index'
import svg from '@svg'

import Component from '@component'

export default (
	{styled}, styles, selected, style, content
) => {
	const size = '18px'

	, height = `height: ${size};`

	, a = styled.a

	, Link = a`
		display: inline-block;
		${[
			'right', 'left'
		].map(side =>
			`padding-${side}: 12.5px;`
		)}

		/*img, */svg {
			/*&& img, && img.show */
				${height}

			max-${height}

			width: ${size}
		}

		${styles}
	`

	return Promise.all(
		content.map(
			async ([title, href, network], index) => {
				const children = await svg(icon[network])

				return <Link
					{...{
						...(index == selected && {
							as: a(style)
						})

						, title, href, children
					}}
					target="_blank" rel="noopener"
				/>
			}
		)
	)
}