const {html} = require('common-tags')

module.exports = (content, {index, resume} = {}) => html`<body>
	<nav id="header">
		<nav>
			<a class="${index && 'selected'}" title="home" href="/" rel="noopener">home</a>
			<a class="floatRight${resume && ' selected'}" title="View Richard Hendriks’s resume" href="/resume" rel="noopener">resume</a>
		</nav>
	</nav>

	<div id="main">
		` + content + `
	</div>

	<footer>
		Copyright © 2018–<span id="currentYear"></span>. Refo – All rights reserved.
	</footer>
</body>`