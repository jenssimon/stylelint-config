module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-scss',
  ],
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
  },
};
