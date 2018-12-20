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
	- Install <a title="Node.js" href="https://nodejs.org/en/"><img alt="Node.js" src="https://camo.githubusercontent.com/9c24355bb3afbff914503b663ade7beb341079fa/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2d6c696768742e737667" width="" height="18"></a> and <a title="Yarn" href="https://yarnpkg.com/lang/en/"><img alt="Yarn" src="https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.svghttps://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.png" width="" height="18"></a>.
	- [Download](https://github.com/kireerik/refo/archive/master.zip) or [clone](x-github-client://openRepo/https://github.com/kireerik/refo) this repository.
	- Open a command prompt in this `example` folder.

> Install dependencies:
> ```shell
> yarn install
> ```

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
	- Install and set up <a title="Firebase CLI" href="https://nodejs.org/en/"><img alt="Firebase" src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-standard.svg" width="" height="18"> CLI</a>.
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

## About

This project uses [superstatic](https://github.com/firebase/superstatic) to serve the generated static files. You can use any similar library to serve the files or no library at all in case you would like to browse the files directly. This can be useful for offline documentations for example.

You can remove superstatic and use [firebase-tools](https://github.com/firebase/firebase-tools) instead (which uses superstatic) if you prefer. In this case you can modify the `scripts` in the `package.json` file and replace `superstatic` with `firebase serve` commands.

This project uses [concurrently](https://github.com/kimmobrunfeldt/concurrently) to run Refo in watch mode and serve the files with superstatic. You can use any similar library like [npm-run-all](https://github.com/mysticatea/npm-run-all) to run Refo and a server in paralell or no library at all if you don't need a file server.

The `firebase.json` file could be named as `superstatic.json` if you prefer. This example does not depends on Firebase it self. Hovewer they provide one of the consistently fastest static hosting solution.
