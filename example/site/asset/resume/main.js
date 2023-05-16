const {html} = require('common-tags')

, index = require('./main/index')

module.exports = json => html`<!DOCTYPE HTML>
<html lang="en">
	<head>
		<title>${json.basics.name} - ${json.basics.version && json.basics.version + ' '}resume</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta charset="UTF-8">

		<link rel="shortcut icon" href="${json.basics.version && '../'}../favicon.ico">

		<link inline href="site/asset/main.css">
		<link inline href="site/asset/resume/style.css">
		${json.basics.version && `
			<style>
				@media print and (max-width: 12.782cm) {
					@page {
						margin: 2.245cm 2.245cm;
					}
				}
				@media print and (min-width: /*12.859*/12.782cm) {
					@page {
						margin: 1.27cm /*2.54*/2.245cm;
					}
				}
			</style>
		`}

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
	` + index(json) + `
<html>`