'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseArn;

var _errors = require('./errors');

var _constants = require('./constants');

function parseArn(arnString) {

  var arn = {},
      segmentExtract = /([\w\-\.\*]*)\:(.*)/,
      arnStringCarry = arnString;

  _constants.components.forEach(function (segment) {
    if (segment === 'resource') {
      return arn[segment] = arnStringCarry;
    }
    var res = segmentExtract.exec(arnStringCarry);
    if (!Array.isArray(res)) {
      throw new _errors.InvalidArnError('Could not extract all segments of Arn.');
    }
    arn[segment] = res[1];
    arnStringCarry = res[2];
  });

  arn.resourceArr = arn.resource.split(/\/|\:/);

  return arn;
}