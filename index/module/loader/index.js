import withModuleReloading from '#@withModuleReloading'

import register from '#@register'

const parameters = {data: withModuleReloading}

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