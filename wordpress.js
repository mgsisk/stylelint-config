/**
 * stylelint configuration for WordPress development.
 *
 * @type {Object}
 */
module.exports = {
  extends: ['./index.js', 'stylelint-config-wordpress'],
  rules: {
    // ----- Possible Errors ---------------------------------------------------

    'font-family-no-missing-generic-family-keyword': null,
    'unit-no-unknown': [ true, {ignoreUnits: [ 'mfs', 'mlh', 'msu', 'vru' ]} ],
    'property-no-unknown': [ true, {ignoreProperties: [ 'size' ]} ],
    'block-no-empty': null,

    // ----- Limit Language Features -------------------------------------------

		'color-no-hex': null,
    'declaration-property-unit-whitelist': {
      'font-size': [ 'mfs' ],
      'line-height': [ 'mlh' ]
    },

    // ----- Limit Language Features -------------------------------------------

    'font-family-name-quotes': null,
  },
};