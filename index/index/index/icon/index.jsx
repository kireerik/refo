import * as icon from './index/index'

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

	return content.map(
		([title, href, network], index) => {
			const Icon = icon[network]

			return <Link
				{...{
					...(index == selected && {
						as: a(style)
					})

					, title, href
				}}
				target="_blank" rel="noopener"
			>
				<Icon/>
			</Link>
		}
	)
}