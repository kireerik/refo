const {html} = require('common-tags')

, getHandledJson = require('./resume/getHandledJson')

module.exports = (content, {index, resume} = {}) => {
	const json = getHandledJson()

	return html`<body>
		<nav id="header">
			<nav>
				<a class="${index && 'selected'}" title="home" href="/" rel="noopener">home</a>
				<a class="floatRight${resume && ' selected'}" title="View ${json.basics.name}’s resume" href="/resume" rel="noopener">resume</a>
			</nav>
		</nav>

		<div id="main">
			` + content + `
		</div>

		<footer>
			Copyright © 2018–<span id="currentYear"></span>. Refo – All rights reserved.
		</footer>
	</body>`
}