import style from './style'

import getHeader from './header'

import template from '#template'

import brand from './title'

export default ({
	style: dependant

	, title, head

	, extract, onContentLoaded = '', script

	, styling, index, resume

	, children
}) => {
	style(styling)

	const Header = getHeader({...styling, index, resume})

	if (dependant)
		dependant(Header)

	return <>
		{template(`<!DOCTYPE HTML>`)}
		<html lang="en">
			{template(`<head>`)}
				<title>{title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<meta charset="UTF-8"/>

				{head}

				<style>{template(extract())}</style>
				<script>{template(`
					window.dataLayer = window.dataLayer || []

					;(function () {
						var push = function () {
							window.dataLayer.push(arguments)
						}

						push('js', new Date)
						push('config', 'G-EC49HGT49S')
					})()
				`)}</script>
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-EC49HGT49S"/>
				<script data-load>{template(`
					(function (onReady) {
						if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading')
							onReady()
						else
							document.addEventListener('DOMContentLoaded', onReady)
					})(function () {
						${onContentLoaded}

						document.getElementById('currentYear').innerHTML = (new Date).getFullYear()
					})
				`)}</script>
				{script}
				<script async src="/main.js"/>
			{template(`</head>`)}
			<body>
				<Header/>

				{children}

				<footer>
					Copyright © 2016–<span id="currentYear"/>. {brand} – All rights reserved.
				</footer>
			</body>
		</html>
	</>
}