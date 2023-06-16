export default ({injectGlobal}) =>
	injectGlobal`
		h1, h2, h3 {
			line-height: 1.2;
			font-weight: normal;
		}
		header {
			margin: 0 0 2.34em;
			text-align: center;
		}
		header h1 {
			margin: .67em 0 .35em;
		}
		main {
			display: block;
		}
		main section {
			margin: 2.24em auto;
			padding: 0 10px;
			max-width: 377px;
		}
		main p {
			margin: 1em 0 2em;
		}
		a {
			color: #1640de;
		}
		img {
			opacity: 0;
		}
		img.show {
			opacity: 1;
		}
	`