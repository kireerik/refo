const path = require('path')

module.exports = (directory, otherDirectory) =>
	function () {
		return this.replace(path.resolve(directory), path.resolve(otherDirectory))
	}