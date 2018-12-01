const core = require('refo-core')

, handlers = require('./handlers')

module.exports = options =>
	core(handlers, options)