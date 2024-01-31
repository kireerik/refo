import data from '#index/index/index/resume/data'

import full from '../../full.html/name'
import name from '../../name'

export default version => <>
	{data.basics.name}’s{version ? ' ' + full : ''} {name}
</>
	.join('')