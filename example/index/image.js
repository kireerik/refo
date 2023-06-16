import size from 'image-size'

import {html} from 'common-tags'

export default (name = '', alt, src, lazyload) => {
	const {
		width, height
	} =
		size('index/index/site/index/index/' + src)

	return html`
		<img
			${(name || lazyload) &&
				'class="' +
					name
					+ (lazyload ?
						(name ? ' ' : '') + 'lazyload'
					: '')
				+ '"'
			}

			width="${width}" height="${height}"

			alt="${alt}"

			${lazyload && 'data-src="' + src + '"'} src="${
				lazyload ?
					'asset/placeholder.png'
				:
					src
			}"
		>
	`
}