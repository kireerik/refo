const handleJSON = require('refo-handle-json')

module.exports = version => {
	var json = JSON.parse(JSON.stringify(require('./data')))

	if (version && json.basics)
		json.basics.version = version

	json = handleJSON(json, version)

	return json
}