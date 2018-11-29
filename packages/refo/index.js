#!/usr/bin/env node
const fs = require('fs')
, path = require('path')

, optionsFileName = './refo.options.js'
, optionsFile = path.resolve(fs.realpathSync(process.cwd()), optionsFileName)

if (fs.existsSync(optionsFile))
	var options = require(optionsFile)

const main = require('refo-main')

main(options)