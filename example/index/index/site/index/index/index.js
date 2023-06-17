const slogan = 'A static site build tool.'
, description = 'A static site and resume build tool with hot JavaScript module replacement. Ideal for resumes, portfolios and landing pages.'

import use from '@style'

const [styling, extract] = use()

import style from './style'
style(styling)

import script from './script'

import main from '@index/site/main'

export default await main(
		...[, ]
	,
		'Refo - ' + slogan
	,
		`
			<meta name="theme-color" content="#fdfcec">
			<meta name="msapplication-navbutton-color" content="#fdfcec">
			<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

			<meta name="description" content="` +
				description
			+ `">

			<link rel="shortcut icon" href="favicon.ico">

			<meta name="msapplication-TileColor" content="#fff">

			<meta property="og:title" content="Refo">
			<meta property="og:url" content="https://kireerik.github.io/refo">
			<meta property="og:description" content="` +
				description
			+ `">
			<meta property="og:type" content="website">
		`
	,
		extract
	,
		script
	,
		`
			<script
				async src="asset/lazysizes.js" data-load
			></script>
		`
	,
		{styling, index: true}
	,
		`
			<header>
				<h1>Refo</h1>
				<aside>` + slogan + `</aside>
			</header>

			<main>
				<section>
					<p>` + description + `</p>
					<p>
						Created by <a title="Oengi.com" href="https://oengi.com/" target="_blank" rel="noopener">Erik Engi</a>
					</p>
				</section>
			</main>
		`
)