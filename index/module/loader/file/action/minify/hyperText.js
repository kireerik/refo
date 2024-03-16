import {minify} from 'html-minifier-terser'

export default value =>
	minify(
			value
		,
			{
				collapseWhitespace: true
				, ignoreCustomComments: false
				, removeComments: true
				, removeAttributeQuotes: true
				, sortAttributes: true
				, sortClassName: true
				, minifyCSS: {level: 2}
				, minifyJS: true
			}
	)