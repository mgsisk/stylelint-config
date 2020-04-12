'use strict'

/**
 * Stylelint configuration for general development.
 *
 * @type {object}
 */
module.exports = {
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-order',
    'stylelint-use-nesting',
  ],
  extends: ['stylelint-config-standard'],
  rules: {
    // ----- Possible Errors ---------------------------------------------------
    'block-no-empty': null,
    'property-no-unknown': [true, {ignoreProperties: ['max-size', 'min-size', 'size']}],
    'unit-no-unknown': [true, {ignoreUnits: ['mfs', 'mlh', 'msu', 'vru']}],

    // ----- Limit Language Features -------------------------------------------
    'at-rule-no-vendor-prefix': true,
    'color-named': 'always-where-possible',
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-no-important': true,
    'function-url-no-scheme-relative': true,
    'max-nesting-depth': 8,
    'media-feature-name-no-vendor-prefix': true,
    'no-unknown-animations': true,
    'number-max-precision': 5,
    'property-no-vendor-prefix': true,
    'selector-max-attribute': 4,
    'selector-max-class': 4,
    'selector-max-combinators': 8,
    'selector-max-compound-selectors': 4,
    'selector-max-id': 1,
    'selector-max-pseudo-class': 4,
    'selector-max-specificity': '1,4,4',
    'selector-max-type': 4,
    'selector-max-universal': 1,
    'selector-nested-pattern': '^&.+',
    'selector-no-vendor-prefix': true,
    'shorthand-property-no-redundant-values': true,
    'time-min-milliseconds': 100,
    'value-no-vendor-prefix': true,

    // ----- Stylistic Issues --------------------------------------------------
    /* eslint-disable sonarjs/no-duplicate-string */
    'at-rule-name-newline-after': 'always-multi-line',
    'at-rule-semicolon-space-before': 'never',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-url-quotes': 'never',
    'max-line-length': 120,
    'media-query-list-comma-newline-before': 'never-multi-line',
    'no-empty-first-line': true,
    'selector-attribute-quotes': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'string-quotes': 'single',
    'value-list-comma-newline-before': 'never-multi-line',
    linebreaks: 'unix',
    /* eslint-enable sonarjs/no-duplicate-string */

    // ----- Plugins -----------------------------------------------------------
    'csstools/use-nesting': 'always',
    'order/properties-alphabetical-order': true,
    'plugin/declaration-block-no-ignored-properties': true,
  },
}
