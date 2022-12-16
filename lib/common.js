module.exports = (config, order) => ({
  extends: [
    'stylelint-config-standard-scss',
    ...(order ? [
      'stylelint-config-recess-order',
    ] : []),
    ...(config.extends || []),
  ],
  ...(config.plugins ? { ...config.plugins } : {}),
  rules: {
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    indentation: 2,
    'rule-empty-line-before': null,
    'declaration-empty-line-before': null,
    'shorthand-property-no-redundant-values': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['export'] }],
    ...config.rules,
  },
});
