export default (Header, {injectGlobal}) =>
	injectGlobal`
		main {
			margin: 0 auto;
			font-size: .74074em;
			letter-spacing: 0;
			line-height: normal;
			color: #000;
			padding: 0 .264583333cm;
			overflow-x: hidden; /* for .icons a.last */
		}
		@media print {
			${Header}, footer, .controls {
				display: none;
			}
			@page {
				margin: 1.27cm auto;
			}
		}
		.controls, main {
			max-width: 16.51cm;
		}
		span, div, h3, a {
			max-width: 100%;
		}

		.controls {
			margin: 2.34em auto 2em;
			text-align: center;
		}
		.controls a, .group.byPosition h3 {
			font-weight: bold;
		}

		.flexContainer, .flexContainerSpaceBetween {
			display: flex;
			flex-wrap: wrap;
		}
		.flexContainer {
			align-items: center;
		}
		.flexContainer, .flexContainerSpaceBetween {
			justify-content: space-between;
		}
		.item.flexContainerSpaceBetween {
			margin: 0 0 .6em 0;
		}
		.flexContainerSpaceBetween div {
			margin: 0 0 .4em 0;
		}
		.flexCenter {
			flex-grow: 1;
			text-align: center;
		}
		header, p, .item {
			margin: 0 0 1em 0;
		}
		h1, h3, h4 {
			margin: 0;
		}
		/*.group */.timeline {
			margin: .3em 0 0 3.5px;
			border-left: 1px solid #bfbfbf;
			padding-left: 4px;
		}
		/*.group */.timeline .highlights {
			margin-left: -8.5/*3.5 + 1 + 4*/px;
		}
		.group .next {
			margin: .4em 0 0;
		}
		#website {
			padding: 0 0 0 2em;
			flex-grow: 1;
			box-sizing: border-box;
			font-size: 1.3em;
		}
		#website a, .controls a {
			color: #1640de;
		}

		.flexGrow {
			flex-grow: 1;
		}
		a {
			color: #0f2c99;
		}
		.controls .fontWeightNormal, h1, h3 span, h4 span, /*.group*/.byPosition h4 {
			font-weight: normal;
		}
		h2, h3/*, h4*/ {
			font-size: 1em;
		}
		h2 {
			margin: 0 0 .3em 0;
			text-align: center;
			color: #0070c0;
			letter-spacing: .075em;
			padding: .125em 0;
			border-top: solid 1px #a0d2e0;
			border-bottom: solid 1px #a0d2e0;
		}
		.date {
			float: right;
			align-self: flex-start;
			margin: 0 0 0 auto;
			color: #404040;
		}
		.summary, ul {
			margin: .3em 0 0 0;
		}
		.technologies {
			color: #666;
		}

		section:last-of-type .item:last-of-type {
			margin: 0;
		}

		.branding {
			margin: 2.24em 0;

			a {
				color: #1640de;
			}
		}
	`