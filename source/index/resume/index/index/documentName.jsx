import data from '../../data.js'

import full from '../../full.html/name'
import name from '../../name'

export default version => <>
	{data.basics.name}’s{version ? ' ' + full : ''} {name}
</>
	.join('')