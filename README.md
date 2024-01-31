<h1 align="center">Refo</h1>

<p align="center">
	<a title="Node.js" href="https://nodejs.org/en/"><img alt="Node.js" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="" height="100"></a>
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

<p align="center">
	<a title="Refo package downloads" href="https://www.npmjs.com/package/refo"><img alt="Refo package downloads" src="https://img.shields.io/npm/dt/refo.svg"></a>
</p>

## Features
- **H**ot **M**odule **R**eplacement using [Astro](https://docs.astro.build/en/reference/cli-reference/#astro-dev)
	- [Astro](https://docs.astro.build/en/reference/cli-reference/#astro-dev) [Dynamic](https://docs.astro.build/en/core-concepts/routing/#static-ssg-mode) [Static file (server) endpoint](https://docs.astro.build/en/core-concepts/endpoints/#static-file-endpoints) based [page](https://github.com/kireerik/refo/blob/main/example/index/index/page.js) routing
- JavaScript eXtensible markup language using [SolidJS](https://www.solidjs.com/) [Astro integration](https://docs.astro.build/en/guides/integrations-guide/solid-js/) and [babel-preset-solid](https://github.com/solidjs/solid/tree/main/packages/babel-preset-solid)
- [importing Astro Asset as String](https://vitejs.dev/guide/assets.html#importing-asset-as-string)
	- JS and [SVG](https://github.com/kireerik/refo/blob/main/example/index/svg.jsx) inlining
	- JS bundling
- [Style](https://github.com/kireerik/refo/tree/main/example/index/style)d components using [Emotion](https://emotion.sh/docs/introduction)
	- [Short class names](https://github.com/kireerik/refo/blob/main/example/index/getShortName.js)
	- [Class name label](https://github.com/kireerik/refo/blob/main/example/index/getModuleName.js) in `development` mode using [stack-tracer](https://github.com/bninni/stack-tracer)
- [Image](https://github.com/kireerik/refo/blob/main/example/index/image.jsx) dimensions setting using [image-size](https://github.com/image-size/image-size)
- HTML and inline CSS and JS minification using [HTMLMinifier terser](https://github.com/terser/html-minifier-terser)
- JS minification using [UglifyJS](https://skalman.github.io/UglifyJS-online/)
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

## Examples
- ### [Refo Example](https://github.com/kireerik/refo/tree/main/example)

<p align="center">
	<a href="https://github.com/kireerik/refo/edit/main/README.md">Propose file change</a> to add your new example.
</p>

## Packages
| name `version` | &nbsp; source code location: [index/](https://github.com/kireerik/refo/tree/main/index/) &nbsp; |
| --- | --- |
| refo ||
| <ul><li>[handle-json](https://www.npmjs.com/package/refo-handle-json) `1.0.2` &nbsp; </li></ul> | &nbsp; &nbsp; [handle-json](https://github.com/kireerik/refo/tree/main/index/handle-json) &nbsp; &nbsp; |

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
