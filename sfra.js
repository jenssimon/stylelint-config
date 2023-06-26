module.exports = {
  extends: 'stylelint-config-standard-scss',
  rules: {
    indentation: 4,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/media-feature-value-dollar-variable': 'always',
    'scss/selector-no-redundant-nesting-selector': true,
    'at-rule-empty-line-before': ['always', {
      ignoreAtRules: ['else'],
      ignore: [
        'blockless-after-same-name-blockless', 'inside-block', 'blockless-after-blockless',
      ],
    }],
    'at-rule-no-unknown': null,
    'block-closing-brace-newline-after': ['always', { ignoreAtRules: ['if', 'else'] }],
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,

    'max-empty-lines': null,

    'alpha-value-notation': null,
    'color-function-notation': null,
    'font-family-name-quotes': null,
    'function-url-quotes': null,
    'import-notation': null,
    'max-line-length': null,
    'no-empty-first-line': null,
    'number-max-precision': null,
    'property-no-vendor-prefix': null,
    'scss/at-mixin-argumentless-call-parentheses': null,
    'scss/comment-no-empty': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/dollar-variable-pattern': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/double-slash-comment-whitespace-inside': null,
    'scss/no-global-function-names': null,
    'scss/operator-no-unspaced': null,
    'selector-attribute-quotes': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'selector-not-notation': null,
    'shorthand-property-no-redundant-values': null,
    'string-quotes': null,
  },
}
