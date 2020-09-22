/**
 * Stylelint configuration for WordPress development.
 *
 * @type {object}
 */
module.exports = {
  extends: ['./index.js', 'stylelint-config-wordpress'],
  rules: {
    // ----- Possible Errors ---------------------------------------------------
    'block-no-empty': null,
    'font-family-no-missing-generic-family-keyword': null,
    'property-no-unknown': [true, {ignoreProperties: ['max-size', 'min-size', 'size']}],
    'unit-no-unknown': [true, {ignoreUnits: ['mfs', 'mlh', 'msu', 'vru']}],

    // ----- Limit Language Features -------------------------------------------
    'declaration-property-unit-allowed-list': null,
    'font-family-name-quotes': null,
  },
}
