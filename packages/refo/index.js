#!/usr/bin/env node
const fs = require('fs')
, path = require('path')

, optionsFile = 'refo.js'

if (fs.existsSync(optionsFile))
	var options = require(path.resolve(fs.realpathSync(process.cwd()), optionsFile))

const main = require('refo-main')

main(options)