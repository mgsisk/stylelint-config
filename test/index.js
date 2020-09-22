const tap = require('tap')
const stylelint = require('stylelint')
const config = require('../index.js')

stylelint.lint({
  code: 'a {\n  color: #123;\n  font: var(--font-size-root)/0mlh var(--font-stack-root);\n}\n',
  config,
}).then(result=> tap.equal(result.errored, false, 'It passes valid CSS (standard)'))

stylelint.lint({
  code: 'a{color:#f00}',
  config,
}).then(result=> tap.equal(result.errored, true, 'It fails invalid CSS (standard)'))
