const tap = require('tap')
const stylelint = require('stylelint')
const config = require('../wordpress.js')

stylelint.lint({
  code: 'a {\n\tdisplay: inline;\n}\n',
  config,
}).then(result=> tap.equal(result.errored, false, 'It passes valid CSS (wordpress)'))

stylelint.lint({
  code: 'a{color:red}',
  config,
}).then(result=> tap.equal(result.errored, true, 'It fails invalid CSS (wordpress)'))
