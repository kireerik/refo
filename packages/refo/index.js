#!/usr/bin/env node
const fs = require('fs')
, path = require('path')

, optionsFileName = './refo.options'
, optionsFile = path.resolve(fs.realpathSync(process.cwd()), optionsFileName)
try {var options = require(optionsFile)} catch (error) {}

const main = require('refo-main')

main(options)