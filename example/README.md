<h1 align="center">Refo Example</h1>

<p align="center">
	<a title="Node.js" href="https://nodejs.org/en/"><img alt="Node.js" src="https://camo.githubusercontent.com/9c24355bb3afbff914503b663ade7beb341079fa/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2d6c696768742e737667" width="" height="90"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="Yarn" href="https://yarnpkg.com/lang/en/"><img alt="Yarn" src="https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.svg?sanitize=true" width="" height="90"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="HTML5" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"><img alt="HTML5" src="https://cdn.worldvectorlogo.com/logos/html-5.svg" width="" height="90"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="CSS" href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img alt="CSS" src="https://cdn.worldvectorlogo.com/logos/css-5.svg" width="" height="90"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="JavaScript" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img alt="JavaScript" src="https://cdn.worldvectorlogo.com/logos/javascript-4.svg" width="" height="90"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="Puppeteer" href="https://developers.google.com/web/tools/puppeteer/"><img alt="Puppeteer" src="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" width="" height="90"></a>
</p>

<p align="center">
	<br><a title="GitPunch" href="https://gitpunch.com/"><img alt="GitPunch" src="https://raw.githubusercontent.com/vfeskov/gitpunch/master/client/src/big-logo.png" width="222" height="52"></a>
	<br>⭐ Star and get notified about new releases via email.
</p>

## Getting Started
- Initial steps
	- Install <a title="Node.js" href="https://nodejs.org/en/"><img alt="Node.js" src="https://camo.githubusercontent.com/9c24355bb3afbff914503b663ade7beb341079fa/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2d6c696768742e737667" width="" height="18"></a>, <a title="Yarn" href="https://yarnpkg.com/lang/en/"><img alt="Yarn" src="https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.svg?sanitize=true" width="" height="18"></a> and <a title="Google Chrome" href="https://www.google.com/chrome/"><img alt="Google Chrome" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Google_Chrome_logo_and_wordmark_%282015%29.png" width="" height="18"></a>.
	- [Download](https://github.com/kireerik/refo/archive/master.zip) or [clone](x-github-client://openRepo/https://github.com/kireerik/refo) this repository.
	- Open a command prompt in this `example` folder.

> Install dependencies:
> ```shell
> yarn install
> ```

> Are you on some kind of Unix based system? Mac? Linux? If so you might want to change the `port` in the `scripts` within the [package.json](https://github.com/kireerik/refo/blob/master/example/package.json#L2-L11) file, which is set to `80` which works on Windows. [Superstatic](https://github.com/firebase/superstatic)'s default is `3474` so you can remove that line if you prefer.

Start the server in development mode:
> ```shell
> yarn dev
> ```
> This command starts Refo in `watch` mode and serves the files from the static `../docs` folder using [Superstatic](https://github.com/firebase/superstatic).

Visit http://localhost/ to access the website.

### Static site generation
Generate a static site:
```shell
yarn static
```
Open the `index.html` within the `static` folder to access the website.

## Deployment

### [GitHub Pages](https://pages.github.com/)
You can deploy the static `../docs` folder as it is.

You might want to change the `linkPrefixum` in the following files according to the name of your `project site` repository:
- [asset/main.js#L5](https://github.com/kireerik/refo/blob/8fd9472fa9ef7ee0e00adb26be4dd99e7e775041/example/asset/main.js#L5)
- [asset/resume/main/section/basics.js#L3](https://github.com/kireerik/refo/blob/8fd9472fa9ef7ee0e00adb26be4dd99e7e775041/example/asset/resume/main/section/basics.js#L3)

You can completely remove the `linkPrefixum` in case you are publishing a `user or an organization site`.

### [Firebase Hosting](https://firebase.google.com/products/hosting/)
- Initial steps
	- Remove the `linkPrefixum` from the files listed above under GitHub Pages Deployment.
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
> yarn deploy
> ```

You can remove the `refo.options.json` file to set the `staticDirectory` to the default if you wish.

In this case you can change the deployed folder from `../docs` to `static` in the [firebase.json](https://github.com/kireerik/refo/blob/8fd9472fa9ef7ee0e00adb26be4dd99e7e775041/example/firebase.json#L3) file.

## Contribution
It can  be useful to separate the resume template and publish it as a new Refo package.

> [Open a new issue](https://github.com/kireerik/refo/issues/new) if you think so and let's discuss this. We can definitely implement this if it turns out to be useful.

## About

This project uses [superstatic](https://github.com/firebase/superstatic) to serve the generated static files. You can use any similar library to serve the files or no library at all in case you would like to browse the files directly. This can be useful for offline documentations for example.

You can remove superstatic and use [firebase-tools](https://github.com/firebase/firebase-tools) instead (which uses superstatic) if you prefer. In this case you can modify the `scripts` in the `package.json` file and replace `superstatic` with `firebase serve` commands.

This project uses [concurrently](https://github.com/kimmobrunfeldt/concurrently) to run Refo in watch mode and serve the files with superstatic. You can use any similar library like [npm-run-all](https://github.com/mysticatea/npm-run-all) to run Refo and a server in paralell or no library at all if you don't need a file server.

The `firebase.json` file could be named as `superstatic.json` if you prefer. This example does not depends on Firebase it self. Hovewer they provide one of the consistently fastest static hosting solution.

### Templating
JavaScript [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) are used for templating HTML documents.

This example aso uses [common-tags](https://github.com/declandewet/common-tags) in certain templates which allows to use a shorter syntax in many cases.

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

Wehn you are not using a tagged template literal with common-tags or with a similar library, then you can concatenate template parts with the `+` operator if you prefer:
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
In some cases one of these can be easier to read than the other so you may use the style accordingto the context or you can choose one over the other and stay consistent. This example uses both.
