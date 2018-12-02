const core = require('./core')

module.exports = (handlers, options) => {
	options = core.get(options)

	if (typeof handlers == 'function')
		handlers = handlers(options)

	core.use(handlers)
}