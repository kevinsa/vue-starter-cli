'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEBUG_MODE: true,
  BASE_URL: '"https://testmc.citrix.com"',
  AUTH_SERVICE_URL: '"/TokenAPI/Token"'
})
