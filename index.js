/* eslint-disable sonarjs/no-duplicate-string */

/**
 * Stylelint configuration for general development.
 *
 * @type {Object}
 */
module.exports = {
  formatter: 'string',
  plugins: [
    'stylelint-a11y',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-no-indistinguishable-colors',
    'stylelint-order',
    'stylelint-use-nesting',
  ],
  extends: ['stylelint-config-recommended'],
  rules: {
    // ----- Possible Errors ---------------------------------------------------

    'font-family-no-missing-generic-family-keyword': null,
    'unit-no-unknown': [true, {ignoreUnits: ['mfs', 'mlh', 'msu', 'vru']}],
    'property-no-unknown': [true, {ignoreProperties: ['size']}],
    'block-no-empty': null,

    // ----- Limit Language Features -------------------------------------------

    'color-named': 'always-where-possible',
    'color-no-hex': true,
    'function-url-no-scheme-relative': true,
    'number-max-precision': 5,
    'time-min-milliseconds': 100,
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-property-unit-whitelist': {
      'font-size': ['mfs'],
      'line-height': ['mlh', 'vru'],
    },
    'declaration-no-important': true,
    'declaration-block-single-line-max-declarations': 1,
    'selector-max-attribute': 4,
    'selector-max-class': 4,
    'selector-max-combinators': 4,
    'selector-max-compound-selectors': 4,
    'selector-max-empty-lines': 0,
    'selector-max-id': 1,
    'selector-max-pseudo-class': 4,
    'selector-max-specificity': '1,4,4',
    'selector-max-type': 4,
    'selector-max-universal': 1,
    'selector-nested-pattern': '^&.+',
    'selector-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-no-vendor-prefix': true,
    'comment-word-blacklist': '/^(FIXME|TODO|XXX)/',
    'max-nesting-depth': 4,
    'no-unknown-animations': true,

    // ----- Stylistic Issues --------------------------------------------------

    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'never',
    'function-whitespace-after': 'always',
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'string-quotes': 'single',
    'length-zero-no-unit': true,
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,
    'custom-property-empty-line-before': 'never',
    'property-case': 'lower',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-before': 'never-single-line',
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-space-after': 'never-single-line',
    'block-opening-brace-space-before': 'always',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'rule-empty-line-before': [
      'always-multi-line',
      {except: ['after-single-line-comment', 'first-nested']},
    ],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'at-rule-empty-line-before': [
      'always',
      {except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment']},
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': 'always-multi-line',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'comment-empty-line-before': [
      'always',
      {except: ['first-nested'],
        ignore: ['stylelint-commands']},
    ],
    'comment-whitespace-inside': 'always',
    indentation: 2,
    linebreaks: 'unix',
    'max-empty-lines': 1,
    'max-line-length': 80,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'no-empty-first-line': true,

    // ----- Plugins -----------------------------------------------------------

    'a11y/content-property-no-static-value': true,
    'a11y/font-size-is-readable': true,
    'a11y/line-height-is-vertical-rhythmed': true,
    'a11y/media-prefers-reduced-motion': true,
    'a11y/media-prefers-color-scheme': true,
    'a11y/no-display-none': true,
    'a11y/no-obsolete-attribute': true,
    'a11y/no-obsolete-element': true,
    'a11y/no-spread-text': true,
    'a11y/no-outline-none': true,
    'a11y/no-text-align-justify': true,
    'a11y/selector-pseudo-class-focus': true,
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/stylelint-no-indistinguishable-colors': true,
    'order/properties-alphabetical-order': true,
    'csstools/use-nesting': 'always',
  },
}
