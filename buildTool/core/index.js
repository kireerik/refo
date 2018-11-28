const main = require('./main')

module.exports = (handlers, options) => {
	options = main.get(options)

	if (typeof handlers == 'function')
		handlers = handlers(options)

	main.use(handlers)
}