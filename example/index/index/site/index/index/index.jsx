import title from '@index/site/main/title'

const slogan = 'A static site example.'
, description = 'A static site and resume example with styled modules.'

import use from '@style'

const [styling, extract] = use()

import style from './style'
style(styling)

import script from './script'

import Main from '@index/site/main'

export default await <Main index {...{
	title
	, head: <>
		<meta name="theme-color" content="#fdfcec"/>
		<meta name="msapplication-navbutton-color" content="#fdfcec"/>
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>

		<meta name="description" content={description}/>

		<link rel="shortcut icon" href="favicon.ico"/>

		<meta name="msapplication-TileColor" content="#fff"/>

		<meta property="og:title" content={title}/>
		<meta property="og:url"
			content="https://kireerik.github.io/refo/"
		/>
		<meta property="og:description" content={
			description
		}/>
		<meta property="og:type" content="website"/>
	</>

	, extract

	, onContentLoaded: script
	, script:
		<script async src="asset/lazysizes.js" data-load/>

	, styling
}}>
	<header>
		<h1>{title}</h1>
		<aside>{slogan}</aside>
	</header>

	<main>
		<section>
			<p>{description}</p>
			<p>
				Created by <a
					title="Oengi.com" href="https://oengi.com/"
					target="_blank" rel="noopener"
				>
					Erik Engi
				</a>
			</p>
		</section>
	</main>
</Main>