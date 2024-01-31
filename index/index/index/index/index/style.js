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
		}
		main section, main div h2 {
			max-width: 377px;
		}
		main div h2 {
			margin-left: auto;
			margin-right: auto;
			padding: 0 10px;
		}
		.profileLogo {
			float: left;
			margin: -4px 22px 0 0;
		}
		main p, main div {
			margin: 1em 0 2em;
		}
		main div p {
			margin: .4em 0 2em;
		}
		a {
			color: #1640de;
		}
		img {
			opacity: 0;
			max-width: 100%;
		}
		img.show, .toolLogosHeight30 img.show {
			opacity: 1;
		}
		img.show, .toolLogosHeight30 img.show, .toolLogosHeight30 svg {
			height: auto;
		}
		.imageHeight82 {
			height: 82px;
		}
		.publicationLogoMaterialUI {
			width: 377px;
			height: 86.823px;
			max-height: 86.823px;
			padding: 4.777% 0;
			background: #2196f3;
		}
		.publicationLogos, .toolLogos {
			margin-left: -2.5px;
		}
		.publicationLogos a, .toolLogos a {
			display: inline-block;
			padding: 12.5px;
		}
		.imageHeight24 {
			height: 24px;
		}
		.toolLogosHeight30 img, .toolLogosHeight30 svg {
			height: 30px;
		}
		.toolLogosHeight30 .imageHeight60 {
			height: 60px;
		}
		.imageHeight17 {
			height: 17px;
		}
		.imageWidth198_313	{width: 198.313px}
		.imageWidth41		{width: 41px}
		.imageWidth90_6355	{width: 90.6355px}

		#technologies {
			min-height: 912.969px;
		}
	`