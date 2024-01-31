import staticDirectory from './staticDirectory'

const get = object =>
	Object.entries(object).reduce(
		(result, [key, value]) => ([
			...result
			, {key, value}
		])
	, [])

, year = 31536000

, header = (source, headers) => ({
	source
	, headers: get(headers)
})

export default JSON.stringify({
	hosting: {
		public: staticDirectory
		, cleanUrls: true
		, trailingSlash: false
		, headers: [
			header('**', {
				'X-Xss-Protection': '1;mode=block'
				, 'X-Content-Type-Options': 'nosniff'

				, 'Referrer-Policy':
					'strict-origin-when-cross-origin'

				, 'Content-Security-Policy':
					'upgrade-insecure-requests'
					+ ";object-src 'none'"

				, 'X-Frame-Options': 'SAMEORIGIN'

				, 'Strict-Transport-Security':
					'max-age=' + year + ';includeSubDomains'
					+ ';preload'

				, 'Permissions-Policy':
					[
						'camera'
						, 'display-capture'
						, 'fullscreen'
						, 'geolocation'
						, 'microphone'
						, 'web-share'
					].map(
						directive => directive + '=()'
					)
						.join(',')
			})
			, header('**/*.@(ico|png|json|js)', {
				'Cache-Control': 'max-age=' + year
			})
		]
	}
})