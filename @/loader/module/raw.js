import loader from './loader'

export const load = loader(
	'raw'
	, source =>
		`export default String.raw\`${source}\``
)