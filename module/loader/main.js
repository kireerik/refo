import register from './.module/register'

export default data => {
	const parameters = {data}

	;[
		['file', parameters]
		, ...[
			''
			, ...[
				'raw'
				, 'graphics'
			].map(
				name => '/' + name
			)
		].map(
			name => ['module' + name]
		)
		, ['script']
		, ...[
			'script'
			, 'hyperText'
		].map(
			name => ['file/' + name, parameters]
		)
	].map(
		([name, parameters]) =>
			register('./' + name, parameters)
	)
}