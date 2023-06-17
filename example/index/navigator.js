export default `
	if (!window.load) {
		window.scriptLoaded = {}

		var script = function () {
			return document.head.querySelectorAll(
				'script[data-load]'
			)
		}

		script().forEach(
			function (script) {
				var source = script.src

				if (source)
					window.scriptLoaded[source] = true
			}
		)

		window.load = function (link) {
			var request = new XMLHttpRequest()
			request.open('GET', link)

			request.send()

			request.addEventListener('load', function () {
				document.documentElement.innerHTML =
					this.response

				script().forEach(
					function (script) {
						var source = script.src

						if (
							!source || !window.scriptLoaded[source]
						) {
							if (source)
								window.scriptLoaded[source] = true

							var replacement =
								document.createElement('script')

							for (
								var index = 0

								; index < script.attributes.length

								; index++
							) {
								var attribute =
									script.attributes[index]

								if (attribute.name != 'data-load')
									replacement.setAttribute(
										attribute.name
										, attribute.value
									)
							}

							replacement.innerHTML =
								script.innerHTML

							document.head.replaceChild(
								replacement, script
							)
						}
					}
				)

				var load = document.createEvent('HTMLEvents')

				load.initEvent('load', true, false)

				window.dispatchEvent(load)
			})
		}

		window.addEventListener('popstate', function () {
			load(location.href)
		})
	}

	window.addEventListener('load', function () {
		[].forEach.call(document.getElementsByTagName('a')
			, function (link) {
				if (link.target != '_blank')
					link.addEventListener(
						'click', function (event) {
							event.preventDefault()

							var link = event.target.href

							load(link)
							history.pushState({}, '', link)
						}
					)
			}
		)
	})
`