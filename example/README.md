<h1 align="center"><a title="Refo - A static site build tool." href="https://kireerik.github.io/refo/">Refo Example</a></h1>

<p align="center">
	Link: <a title="Refo - A static site build tool." href="https://kireerik.github.io/refo/">kireerik.github.io/refo</a>
	<br>Source: <a href="https://github.com/kireerik/refo/tree/master/docs">../docs</a>
	<br>&nbsp;
</p>

<p align="center">
	<a title="Node.js" href="https://nodejs.org/en/"><img alt="Node.js" src="https://camo.githubusercontent.com/9c24355bb3afbff914503b663ade7beb341079fa/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2d6c696768742e737667" width="" height="100"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="Fast, disk space efficient package manager | pnpm" href="https://pnpm.io/"><img alt="pnpm" src="https://d33wubrfki0l68.cloudfront.net/aad219b6c931cebb53121dcda794f6180d9e4397/17f34/assets/images/pnpm-standard-79c9dbb2e99b8525ae55174580061e1b.svg" width="" height="100"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="Astro" href="https://astro.build/"><img alt="Astro" src="https://astro.build/assets/press/astro-logo-dark.svg" width="" height="100"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="HTML5" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"><img alt="HTML5" src="https://www.w3.org/html/logo/downloads/HTML5_Logo.svg" width="" height="100"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="SolidJS · Reactive Javascript Library" href="https://www.solidjs.com/"><img alt="SolidJS" src="https://www.solidjs.com/img/logo/with-wordmark/logo.svg" width="" height="100"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="CSS" href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img alt="CSS" src="https://svgshare.com/i/ugQ.svg" width="" height="100"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="Emotion" href="https://emotion.sh/docs/introduction"><img alt="Emotion" src="https://raw.githubusercontent.com/emotion-js/emotion/f3b268f7c52103979402da919c9c0dd3f9e0e189/site/public/logo-96x96.png" width="" height="100"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="JavaScript" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img alt="JavaScript" src="https://svgshare.com/i/ug3.svg" width="" height="100"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="Puppeteer" href="https://developers.google.com/web/tools/puppeteer/"><img alt="Puppeteer" src="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" width="" height="100"></a>
</p>

<p align="center">
	<br><a title="GitPunch" href="https://gitpunch.com/"><img alt="GitPunch" src="https://raw.githubusercontent.com/vfeskov/gitpunch/master/client/src/big-logo.png" width="222" height="52"></a>
	<br>⭐ Star and get notified about new releases via email.
</p>

## Getting Started
- Initial steps
	- Install <a title="Node.js" href="https://nodejs.org/en/"><img alt="Node.js" src="https://camo.githubusercontent.com/9c24355bb3afbff914503b663ade7beb341079fa/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2d6c696768742e737667" width="" height="18"></a>, <a title="Fast, disk space efficient package manager | pnpm" href="https://pnpm.io/"><img alt="pnpm" src="https://d33wubrfki0l68.cloudfront.net/aad219b6c931cebb53121dcda794f6180d9e4397/17f34/assets/images/pnpm-standard-79c9dbb2e99b8525ae55174580061e1b.svg" width="" height="18"></a> and <a title="Google Chrome" href="https://www.google.com/chrome/"><img alt="Google Chrome" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Google_Chrome_logo_and_wordmark_%282015%29.png" width="" height="18"></a>.
	- [Download](https://github.com/kireerik/refo/archive/master.zip) or [clone](x-github-client://openRepo/https://github.com/kireerik/refo) this repository.
	- Open a command prompt in this `example` folder.

> Install dependencies:
> ```shell
> pnpm install
> ```

> Are you on some kind of Unix based system? Mac? Linux? If so you might want to change the `port` in the `scripts` within the [package.json](https://github.com/kireerik/refo/blob/master/example/package.json#L2-L11) file, which is set to `80` which works on Windows. [Astro](https://astro.build/)'s default is `3000` so you can remove that line if you prefer.

Start the server in development mode:
> ```shell
> pnpm dev
> ```

Visit http://localhost/ to access the website.

### Static site generation
Generate a static site:
```shell
pnpm static
```
Open the `index.html` within the `static` folder to access the website.

## Deployment

### [Astro](https://docs.astro.build/en/guides/deploy/)

### [GitHub Pages](https://pages.github.com/)
You can deploy the static `../docs` folder as it is.

You might want to change the `prefixum` in the following files according to the name of your `project site` repository:
`index/index/site/`
`main/`
- [header/index.jsx#L6](https://github.com/kireerik/refo/blob/17b836cb6afa85373c3dc8591c2326a4c34b928a/example/index/index/site/main/header/index.jsx#L6)
- [index.jsx#L7](https://github.com/kireerik/refo/blob/17b836cb6afa85373c3dc8591c2326a4c34b928a/example/index/index/site/main/index.jsx#L7)
- `index/resume/index/index`
   - [.jsx#L13](https://github.com/kireerik/refo/blob/17b836cb6afa85373c3dc8591c2326a4c34b928a/example/index/index/site/index/resume/index/index.jsx#L13)
   - [/controls.jsx#L5](https://github.com/kireerik/refo/blob/17b836cb6afa85373c3dc8591c2326a4c34b928a/example/index/index/site/index/resume/index/index/controls.jsx#L5)

You can completely remove the `prefixum` in case you are publishing a `user or an organization site`.

### [Firebase Hosting](https://firebase.google.com/products/hosting/)
- Initial steps
	- Remove the `prefixum` from the files listed above under GitHub Pages Deployment.
	- Install and set up <a title="Firebase CLI" href="https://firebase.google.com/docs/cli/"><img alt="Firebase" src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-standard.svg" width="" height="18"> CLI</a>.
	- Add a `.firebaserc` file with your Firebase project ID:
		```JSON
		{
			"projects": {
				"default": "<projectId>"
			}
		}
		```

> Deploy your site to Firebase Hosting:
> ```shell
> pnpm deploy
> ```

## Contribution
It can  be useful to separate the resume template and publish it as a new Refo package.

> [Open a new issue](https://github.com/kireerik/refo/issues/new) if you think so and let's discuss this. We can definitely implement this if it turns out to be useful.

## About

This example uses Refo's JSON handler. So you can control how and whether certain properties are displayed from the [index/index/site/index/resume/data.js](https://github.com/kireerik/refo/blob/main/example/index/index/site/index/resume/data.js) file as described in Refo's readme at the [JSON handler](https://github.com/kireerik/refo#json-handler) Usage section.

### Server

This project uses [superstatic](https://github.com/firebase/superstatic) to serve the generated static files. You can use any similar library to serve the files or no library at all in case you would like to browse the files directly. This can be useful for offline documentations for example.

You can remove superstatic and use [firebase-tools](https://github.com/firebase/firebase-tools) instead (which uses superstatic) if you prefer. In this case, you can modify the `scripts` in the `package.json` file and replace `superstatic` with `firebase serve` commands.

This project uses [concurrently](https://github.com/kimmobrunfeldt/concurrently) to run Refo in watch mode and serve the files with superstatic. You can use any similar library like [npm-run-all](https://github.com/mysticatea/npm-run-all) to run Refo and a server in parallel or no library at all if you don't need a file server.

The `firebase.json` file could be named as `superstatic.json` if you prefer. This example does not depend on Firebase itself. However, they provide one of if not the consistently fastest static hosting solution.

### Templating
JavaScript [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) are used for templating HTML documents.

This example also uses [common-tags](https://github.com/declandewet/common-tags) in certain templates which allows using a shorter syntax in many cases.

Here are some scenarios commonly used in this example:

By default you can display an optional value and use a [conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) to prevent displaying false values like `undefined` for example:
```JavaScript
module.exports = `
	${item ? item : ''}
`
```
Common-tags does this for you. So you can use a shorter syntax with a tagged template literal:
```JavaScript
const {html} = require('common-tags')

module.exports = html`
	${item}
`
```

&nbsp;

By default you can display an optional template part and use a conditional operator to prevent displaying false values like `undefined` for example:
```JavaScript
module.exports = `
	${item ? `
		<div>
			` + item + `
		</div>
	` : ''}
`
```
With common-tags you can use a simple condition with a [logical operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) to achive the same:
```JavaScript
const {html} = require('common-tags')

module.exports = html`
	${item && `
		<div>
			` + item + `
		</div>
	`}
`
```

&nbsp;

By default you can `join` the result when looping through an array of items to prevent displaying commas between the returned items:
```JavaScript
module.exports = `<section>
	${items.map(item => `
		<div>
			${item}
		</div>
	`).join('')}
</section>`
```
Common-tags does this for you. So you can use a shorter syntax:
```JavaScript
const {html} = require('common-tags')

module.exports = html`<section>
	${items.map(item => `
		<div>
			${item}
		</div>
	`)}
</section>`
```

&nbsp;

When you are not using a tagged template literal with common-tags or with a similar library, then you can concatenate template parts with the `+` operator if you prefer:
```JavaScript
module.exports = `
	<div>
		` + item + `
	</div>
`
```
Or you can use a placeholder with the `${expression}` syntax instead:
```JavaScript
module.exports = `
	<div>
		${item}
	</div>
`
```
In some cases, one of these can be easier to read than the other so you may use the style according to the context or you can choose one over the other and stay consistent. This example uses both.

#### Syntax highlighting

Some code editors like [Atom](https://atom.io/) and GitHub, for example, highlights `html` tagged template literals as HTML as you can see this above as well.

##### Sublime Text
 - Install [Package Control](https://packagecontrol.io/installation) and [JS Custom](https://packagecontrol.io/packages/JSCustom).
 - Go to `Preferencies / Package Settings / JS Custom / Settings`.
 - Edit the `JS Custom.sublime-settings — User` file:
	```JSON
	{
		"configurations": {
			"jsx": true
			, "custom_templates": {
				"styled_components": true
				, "lookaheads": {
					"\\<": "scope:text.html.basic"

					, "\\.|height|padding|margin": "scope:source.js.css"

					, "var|if|window|\\(|,": "scope:source.js"
				}
				, "tags": {
					"injectGlobal": "scope:source.js.css"
					, "css": "scope:source.js.css"

					, "html": "scope:text.html.basic"
				}
			}
		}
	}
	```

Now you can use the `JS Custom - Default` syntax highlight option for JavaScript files.