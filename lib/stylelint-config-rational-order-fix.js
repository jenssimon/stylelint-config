const special = require('stylelint-config-rational-order/groups/special');
const positioning = require('stylelint-config-rational-order/groups/positioning');
const boxModel = require('stylelint-config-rational-order/groups/boxModel');
const typography = require('stylelint-config-rational-order/groups/typography');
const visual = require('stylelint-config-rational-order/groups/visual');
const animation = require('stylelint-config-rational-order/groups/animation');
const misc = require('stylelint-config-rational-order/groups/misc');

module.exports = [
  ['Special', special],
  ['Positioning', positioning],
  ['Box Model', boxModel({ border: false })],
  ['Typography', typography],
  ['Visual', visual({ border: true })],
  ['Animation', animation],
  ['Misc', misc],
].map(([groupName, properties]) => ({
  emptyLineBefore: 'always',
  properties,
  groupName,
}));
