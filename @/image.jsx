import {readFileSync} from 'fs'

import {imageSize} from 'image-size'

export default ({class: name, lazyload, alt, src}) => {
	const {
		width, height
	} =
		imageSize(
			readFileSync('source' + '/index/index/' + src)
		)

	return <img {...{
		...((name || lazyload) && {
			class:
				name ?? ''
				+ (lazyload ?
					(name ? ' ' : '') + 'lazyload'
				: '')
		})
		, width, height, alt
		, ...(lazyload && {
			'data-src': src
		})
		, src: lazyload ?
			'asset/placeholder.png'
		:
			src
	}}/>
}