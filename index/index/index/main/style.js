export default ({injectGlobal}) =>
	injectGlobal`
		body {
			margin: 0;
			font-family: Arial, Helvetica, sans-serif;
			font-size: 18px;
			letter-spacing: 1px;
			line-height: 1.6;
			color: #444;
			overflow-wrap: break-word;
		}

		a {
			text-decoration: none;
		}

		svg {
			max-width: 100%;
			height: auto;
		}

		footer {
			margin: 2.5em auto 40px auto;
			box-shadow: 0 -1px 3px 0 rgba(51, 51, 51, .08);
			padding-top: 1em;
			color: #666;
			text-align: center;
		}
	`