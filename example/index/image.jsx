import size from 'image-size'

export default (name = '', alt, src, lazyload) => {
	const {
		width, height
	} =
		size('index/index/site/index/index/' + src)

	return <img {...{
		...((name || lazyload) && {
			class:
				name
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