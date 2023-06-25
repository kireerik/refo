import data from '@index/site/index/resume/data'

import {full, A4, resume} from '../name'

import capitalize from '@capitalize'

export default (format, version) => <>
	{data.basics.name.replaceAll(' ', '')}-
	{version && full}
	{format && A4}
	{(format || version) ?
		capitalize(resume)
	:
		resume
	}
</>.join('')