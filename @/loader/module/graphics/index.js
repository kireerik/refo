import endsWith from '../../@/endsWith'

import main from './main'

import loader from '../../@/loader/source'

export const load = loader(
	url => endsWith(url, ['svg'])

	, () => main
)