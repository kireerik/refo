#!/usr/bin/env node
const fs = require('fs')
, optionsFile = './refo.js'

if (fs.existsSync(optionsFile))
	var options = require(optionsFile)

const main = require('refo-main')

main(options)