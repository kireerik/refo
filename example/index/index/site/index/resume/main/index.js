import getHandledJson from './getHandledJson'

import main from './main'

export default version =>
	main({
		json: getHandledJson(version)
		, version
	})