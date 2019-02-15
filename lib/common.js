const configOrder = require('./stylelint-config-rational-order-fix');

module.exports = (config, order) => ({
  extends: [
    'stylelint-config-standard',
    ...(config.extends || []),
  ],
  plugins: [
    ...(order ? ['stylelint-order'] : []),
    ...config.plugins,
  ],
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
    ...(order ? {
      'property-no-unknown': [
        true,
        {
          ignoreProperties: ['composes'],
        },
      ],
      'order/properties-order': configOrder,
    } : {}),
    ...config.rules,
  },
});
