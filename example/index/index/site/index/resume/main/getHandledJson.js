import handleJSON from 'refo-handle-json'

import data from '../data'

export default version =>
	handleJSON(JSON.parse(JSON.stringify(data)), version)