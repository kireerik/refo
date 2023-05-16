const getHandledJson = require('./getHandledJson')

, main = require('./main')

module.exports = version => {
	const json = getHandledJson(version)

	return main(json, version)
}