#!/usr/bin/env node
const fs = require('fs')
, path = require('path')

, coreFileName = './refo.core'
, coreFile = path.resolve(fs.realpathSync(process.cwd()), coreFileName)
try {var core = require(coreFile)} catch (error) {}

const main = require('./main')

if (core)
	main(core.handlers, core.options)
else
	module.exports = main