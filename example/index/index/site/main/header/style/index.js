import getFloatRight from './floatRight'
import getBrand from './brand'
import getSelected from './selected'

export default ({injectGlobal, css}) => {
	if (injectGlobal)
		injectGlobal`
			body {
				margin: 0;
				overflow-wrap: break-word;
			}
			body, .branding {
				font-family: Arial, Helvetica, sans-serif;
				font-size: 18px;
				letter-spacing: 1px;
				line-height: 1.6;
				color: #444;
			}

			a {
				text-decoration: none;
			}

			footer {
				margin: 2.5em auto 40px auto;
				box-shadow: 0 -1px 3px 0 rgba(51, 51, 51, .08);
				padding-top: 1em;
				color: #666;
				text-align: center;
			}
		`

	const floatRight = getFloatRight({css})
	, brand = getBrand({css})
	, selected = getSelected({css})

	return [
		css`
			color: #444;

			box-shadow: 0 1px 3px 0 rgba(51, 51, 51, .08);

			nav {
				margin: 0 auto;
				padding: 0 .3em;
				max-width: 580px;

				.${floatRight} {
					float: right;
				}

				a {
					display: inline-block;
					padding: .6em 1em;
					color: #666;
					letter-spacing: 1px;

					&.${brand} {
						letter-spacing: 0;
					}

					&.${selected} {
						color: #000;
					}
				}
			}
		`
		, {floatRight, brand, selected}
	]
}