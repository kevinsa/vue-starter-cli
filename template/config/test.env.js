'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  DEBUG_MODE: true,
  BASE_URL: '"https://preprodmc.citrix.com"',
  AUTH_SERVICE_URL: '"/TokenAPI/Token"'
})
