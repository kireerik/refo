import getHeader from './header'

export default async (
	style

	, title, head = ''

	, extract, onContentLoaded = '', script = ''

	, properties, content
) => {
	const header = getHeader(properties)

	if (style)
		await style()

	return `
		<!DOCTYPE HTML>
		<html lang="en">
			<head>
				<title>` + title + `</title>
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<meta charset="UTF-8">

				` + head + `

				<style>` + await extract() + `</style>
				<script data-load>
					(function (onReady) {
						if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading')
							onReady()
						else
							document.addEventListener('DOMContentLoaded', onReady)
					})(function () {
						${onContentLoaded}

						document.getElementById('currentYear').innerHTML = (new Date).getFullYear()
					})
				</script>
				` + script + `
				<script async src="/main.js"></script>
			</head>
			<body>
				` + header + `

				` + content + `

				<footer>
					Copyright © 2016–<span id="currentYear"></span>. Refo – All rights reserved.
				</footer>
			</body>
		</html>
	`
}