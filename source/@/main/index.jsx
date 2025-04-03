import style from './style'

import getHeader from './header'

import template from '#@SolidJS/template'

import prefixum from '##index/prefixum'

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

				<style>{extract()}</style>
				<script data-load>{`
					(function (onReady) {
						if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading')
							onReady()
						else
							document.addEventListener('DOMContentLoaded', onReady)
					})(function () {
						${onContentLoaded}

						document.getElementById('currentYear').innerHTML = (new Date).getFullYear()
					})
				`}</script>
				{script}
				<script async src={prefixum + '/main.js'}/>
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