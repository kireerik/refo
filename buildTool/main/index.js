const main = require('../core')

, handlers = require('./handlers')

module.exports = options =>
	main(handlers, options)