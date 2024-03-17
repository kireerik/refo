import endsWith from '../../.module/endsWith'

import main from './main'

import loader from '../../.module/loader/source'

export const load = loader(
	url => endsWith(url, ['svg'])

	, () => main
)