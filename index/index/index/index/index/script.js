export default `
	var displayImages = function (element) {
		[].forEach.call(element.getElementsByTagName('img'), function (image) {
			function show() {
				image.classList.add('show')
			}

			if (image.complete)
				show()
			else
				['load', 'error'].forEach(function (eventName) {
					image.addEventListener(eventName, show)
				})
		})
	}

	displayImages(document)

	var delay = function (method) {
		return setTimeout(method, 1000)
	}

	window.addEventListener('load', function method() {
		delay(function () {
			window.quicklink.prefetch('technologies')
		})
		
		window.removeEventListener('load', method)
	})

	if (!window.lazySizesConfig) {
		window.lazySizesConfig = {ricTimeout: 100}

		delay(function () {
			window.lazySizesConfig.preloadAfterLoad = true
		})

		document.addEventListener(
			'lazyincluded', function () {
				displayImages(
					document.getElementById('technologies')
				)
			}
		)
	}
`