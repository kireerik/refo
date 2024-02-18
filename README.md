<h1 align="center">Refo</h1>

<p align="center">
	<a title="Node.js" href="https://nodejs.org/en/"><img alt="Node.js" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="" height="100"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="Fast, disk space efficient package manager | pnpm" href="https://pnpm.io/"><img alt="pnpm" src="https://d33wubrfki0l68.cloudfront.net/aad219b6c931cebb53121dcda794f6180d9e4397/17f34/assets/images/pnpm-standard-79c9dbb2e99b8525ae55174580061e1b.svg" width="" height="100"></a>
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

<p align="center">
	<a title="Refo package downloads" href="https://www.npmjs.com/package/refo"><img alt="Refo package downloads" src="https://img.shields.io/npm/dt/refo.svg"></a>
</p>

| `import`                                                               |   | generated file |
| --- | --- | --- |
| index/                                                       |   | `static`/ |
| &nbsp;&nbsp; • favicon`.ico` (icon `file` (Node.js module)) |   | &nbsp;&nbsp; • favicon`.ico` |
| &nbsp;&nbsp; • main`.js`​`.js` (Node.js `module`)               | → | &nbsp;&nbsp; • main`.js` |
| &nbsp;&nbsp; • index`.html`​`.jsx` (Node.js `module`)           |   | &nbsp;&nbsp; • index`.html` |
| firebase`.json`​`.js` (Node.js `module`)                        |   | firebase`.json` |

> The imported `file`s (which have a certain file extension (`ico`, `png`)) (Node.js) modules) copy the files themselves into the `static` folder when the modules are loaded. In module relading mode they remove them if they are not imported anymore.

> The `default` `export` of (Node.js) `module`s (which have a certain file extension (`js`, `json`, `html`) in their base file name) are written as the contents of the output files (into the `static` folder). The full file names of the output files are the base file names of the (Node.js) `module`s.

## Features
- (**H**ot) **M**odule **R**eloading using [dynohot](https://github.com/braidnetworks/dynohot)
- JavaScript eXtensible markup language using [SolidJS](https://www.solidjs.com/) and [babel-preset-solid](https://github.com/solidjs/solid/tree/main/packages/babel-preset-solid)
- [Node.js module customization](https://nodejs.org/api/module.html#customization-hooks)
	- importing SVGs as components
	- `raw` imports
	- (Java)Script bundling
	- Extensionless imports using [specifier-resolution-node](https://github.com/Poyoman39/specifier-resolution-node)
- [Style](https://github.com/kireerik/refo/tree/main/example/index/style)d components using [Emotion](https://emotion.sh/docs/introduction)
	- [Short class names](https://github.com/kireerik/refo/blob/main/example/index/getShortName.js)
	- [Class name label](https://github.com/kireerik/refo/blob/main/example/index/getModuleName.js) in `development` mode using [stack-tracer](https://github.com/bninni/stack-tracer)
- [Image](https://github.com/kireerik/refo/blob/main/example/index/image.jsx) dimensions setting using [image-size](https://github.com/image-size/image-size)
- HTML and inline CSS and JS minification using [HTMLMinifier terser](https://github.com/terser/html-minifier-terser)
- (Java)Script minification using [UglifyJS](https://skalman.github.io/UglifyJS-online/)
- Client side [navigation](blob/main/example/index/navigator.js)
- Link prefetching using [Quicklink](https://getquick.link/)
- Lazy loading using [lazysizes](https://github.com/aFarkas/lazysizes)
<ul>
	<li><code>Markdown</code> support for strings in <code>JSON</code> files with <a href="https://markdown-it.github.io/">markdown-it</a></li>
		<ul><li>Duration calculation with <a href="https://momentjs.com/">Moment.js</a></li></ul>
	<li><code>PDF</code> generation using <a href="https://github.com/suhaotian/tiny-puppeteer">Tiny puppeteer</a></li>
</ul>

#### Highlights
- Edit your resume data in a `JSON` file.
- View and publish your resume as a `PDF`, an `HTML` `document` and or as a page on a website.
	- Design and customize resume layout with `HTML` and `CSS`.
- Generate 1 or more `PDF`s supporting different formats like `Letter` and `A4`.
	- Refresh the `PDF` after saving changes to see the up to date `PDF`.

## Getting Started
- Initial steps
	- Install <a title="Node.js" href="https://nodejs.org/en/"><img alt="Node.js" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="" height="18"></a>, <a title="Fast, disk space efficient package manager | pnpm" href="https://pnpm.io/"><img alt="pnpm" src="https://d33wubrfki0l68.cloudfront.net/aad219b6c931cebb53121dcda794f6180d9e4397/17f34/assets/images/pnpm-standard-79c9dbb2e99b8525ae55174580061e1b.svg" width="" height="18"></a> and <a title="Google Chrome" href="https://www.google.com/chrome/"><img alt="Google Chrome" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Google_Chrome_logo_and_wordmark_%282015%29.png" width="" height="18"></a>.
	- [Download](https://github.com/kireerik/refo/archive/master.zip) or [clone](x-github-client://openRepo/https://github.com/kireerik/refo) this repository.
	- Open a command prompt in this folder.

> Install dependencies:
> ```shell
> pnpm install
> ```

> Are you on some kind of Unix based system? Mac? Linux? If so you might want to change the `port` in the `index` module, which is set to `80` which works on Windows. [Superstatic](https://github.com/firebase/superstatic/)'s default is `3474` so you can remove it if you prefer.

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

### [GitHub Pages](https://pages.github.com/)
You can deploy the static `docs` folder as it is.

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

The `firebase.json` file could be named as `superstatic.json` if you prefer. This template does not depend on Firebase itself. However, they provide one of if not the consistently fastest static hosting solution.

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

					, "import|minify|await|export|var|if|window|\\(|,": "scope:source.js"
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

## Usage

### JSON handler
The JSON handler is a standalone package. It is mainly useful to handle resume related data, but you can use it for anything else too.

You can use it as you can see in the example ([asset/resume/getHandledJson.js](https://github.com/kireerik/refo/blob/ec14756dc0046ff7c007e0af1200f39678e3e632/example/asset/resume/getHandledJson.js#L9)) as well:

```JavaScript
const handleJSON = require('refo-handle-json')

var json = JSON.parse(JSON.stringify(require('./data')))

json = handleJSON(json)
```

It is recommended to create a copy of the required JSON using the `JSON.parse(JSON.stringify(json))` functions for example when you are using Refo in `watch` mode ([related comment](https://github.com/sidorares/hot-module-replacement/issues/10#issuecomment-447473770)), because the JSON hander is changing object properties.

The JSON handler is parsing string object values as `Markdown` using markdown-it. Example: [example/asset/resume/data.json#L7](https://github.com/kireerik/refo/blob/90c4dd6b4010c14a6323833dc0af5c22d6676e12/example/asset/resume/data.json#L7)

Properties which are ending with `-private` are ~~removed~~. Example: [example/asset/resume/data.json#L4](https://github.com/kireerik/refo/blob/90c4dd6b4010c14a6323833dc0af5c22d6676e12/example/asset/resume/data.json#L4)
<br>Objects which have a property named `private` are removed too.

Properties which are ending with `-full` are only included when a second true value parameter is passed to the handler function. Example: [example/asset/resume/data.json#L8](https://github.com/kireerik/refo/blob/90c4dd6b4010c14a6323833dc0af5c22d6676e12/example/asset/resume/data.json#L8), [example/asset/resume/getHandledJson.js#L9](https://github.com/kireerik/refo/blob/main/example/asset/resume/getHandledJson.js#L9)
<br>Objects which have a property named `full` are only included when a second true value parameter is passed to the handler function.

#### Period

When an object contains a `startDate` property without an `endDate` property then a `hidePresent` property can be used to hide a present label and show the current year instead.
<br>A `hideEndDate` property can be used to hide the current year shown instead of a present label.

A `hideDuration` property can be used to hide the calculated duration. Otherwise, a `duration` property is defined with the calculated duration (examples: 7 months, 1 year, 1.5 years, 2 years).

## Contribution
It can be useful to create in-depth documentation about each Refo package.

> [Open a new issue](https://github.com/kireerik/refo/issues/new) if you think so and let's discuss this. We can definitely implement this if it turns out to be useful.

## Who is using Refo
- <a title="Oengi.com" href="https://oengi.com/">Oengi.com</a> – Erik Engi's website and resume.

<p align="center">
	<a href="https://github.com/kireerik/refo/edit/main/README.md">Propose file change</a> to add your project here.
</p>

## Inspiration
- <a title="JSON Resume" href="https://jsonresume.org/">JSON Resume</a>

#### Author
- <a title="Oengi.com" href="https://oengi.com/">Erik Engi</a>

#### About the name
**Re**sume + port**fo**lio = Refo
