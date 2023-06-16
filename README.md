<h1 align="center">Refo</h1>

<p align="center">
	<a title="Node.js" href="https://nodejs.org/en/"><img alt="Node.js" src="https://camo.githubusercontent.com/9c24355bb3afbff914503b663ade7beb341079fa/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2d6c696768742e737667" width="" height="100"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="Yarn" href="https://yarnpkg.com/lang/en/"><img alt="Yarn" src="https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.svg?sanitize=true" width="" height="100"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="HTML5" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"><img alt="HTML5" src="https://cdn.worldvectorlogo.com/logos/html-5.svg" width="" height="100"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="CSS" href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img alt="CSS" src="https://cdn.worldvectorlogo.com/logos/css-5.svg" width="" height="100"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="JavaScript" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img alt="JavaScript" src="https://cdn.worldvectorlogo.com/logos/javascript-4.svg" width="" height="100"></a>
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
- **H**ot **M**odule **R**eplacement with [hot-module-replacement](https://github.com/sidorares/hot-module-replacement)
	- JS, CSS and image inlining with [inline-source](https://github.com/popeindustries/inline-source)
- HTML and inline CSS and JS minification using [HTMLMinifier terser](https://github.com/terser/html-minifier-terser)
- JS minification using [UglifyJS](https://skalman.github.io/UglifyJS-online/)
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

Properties which are ending with `-full` are only included when a second true value parameter is passed to the handler function.  Example: [example/asset/resume/data.json#L8](https://github.com/kireerik/refo/blob/90c4dd6b4010c14a6323833dc0af5c22d6676e12/example/asset/resume/data.json#L8), [example/asset/resume/getHandledJson.js#L9](https://github.com/kireerik/refo/blob/main/example/asset/resume/getHandledJson.js#L9)
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

#### Other technologies
- [Astro](https://astro.build/)

#### Author
- <a title="Oengi.com" href="https://oengi.com/">Erik Engi</a>

#### About the name
**Re**sume + port**fo**lio = Refo