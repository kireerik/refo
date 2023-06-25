import data from '@index/site/index/resume/data'

import {full, resume} from '@index/site/index/pdf/name'

export default version => <>
	{data.basics.name}’s{version ? ' ' + full : ''} {resume}
</>
	.join('')