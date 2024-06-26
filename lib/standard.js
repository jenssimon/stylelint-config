const common = require('./common')


const cfg = (order) => common({
  extends: [
    'stylelint-config-standard-scss',
  ],
  rules: {
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/media-feature-value-dollar-variable': 'always',
    'scss/selector-no-redundant-nesting-selector': true,
  },
}, order)


module.exports = cfg
