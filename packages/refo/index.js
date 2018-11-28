#!/usr/bin/env node
const fs = require('fs')
, optionsFile = './refo.js'

if (fs.existsSync(optionsFile))
	var options = eval(fs.readFileSync(optionsFile, 'UTF-8'))

const main = require('refo-main')

main(options)