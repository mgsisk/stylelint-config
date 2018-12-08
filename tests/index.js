const tap = require('tap')
const stylelint = require('stylelint')
const config = require('../index.js')

stylelint.lint({
  code: 'a {display: inline;}\n',
  config,
  formatter: 'string',
}).then((result)=> {
  tap.equal(result.errored, false, 'It passes valid CSS (standard)')
})

stylelint.lint({
  code: 'a{ color:#f00 }',
  config,
  formatter: 'string',
}).then((result)=> {
  tap.equal(result.errored, true, 'It fails invalid CSS (standard)')
})
