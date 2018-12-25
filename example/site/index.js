const main = require('../asset/main')

, slogan = 'A static site build tool.'
, description = 'A static site and resume build tool with hot JavaScript module replacement. Ideal for resumes, portfolios and landing pages.'

, linkPrefixum = !process.argv[2] ? 'refo/' : ''

module.exports = `<!DOCTYPE HTML>
<html lang="en">
	<head>
		<title>Refo - ` + slogan + `</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta charset="UTF-8">

		<meta name="theme-color" content="#fdfcec">
		<meta name="msapplication-navbutton-color" content="#fdfcec">
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

		<meta name="description" content="` + description + `">

		<link rel="shortcut icon" href="` + linkPrefixum + `favicon.ico">

		<meta name="msapplication-TileColor" content="#fff">

		<meta property="og:title" content="Refo">
		<meta property="og:url" content="https://kireerik.github.io/refo">
		<meta property="og:description" content="` + description + `">
		<meta property="og:type" content="website">

		<link inline href="../asset/main.css">
		<link inline href="../asset/index.css">
		<script>
			(function (onReady) {
				if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading')
					onReady()
				else
					document.addEventListener('DOMContentLoaded', onReady)
			})(function () {
				document.getElementById('currentYear').innerHTML = (new Date).getFullYear()
			})
		</script>
	</head>
	` + main(`
		<header>
			<h1>Refo</h1>
			<aside>` + slogan + `</aside>
		</header>

		<main>
			<p>` + description + `</p>
			<p>
				Created by <a title="Oengi.com" href="https://oengi.com/" target="_blank" rel="noopener">Erik Engi</a>
			</p>
		</main>
	`, {index: true}) + `
</html>`