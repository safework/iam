'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = parseArn;

var _constants = require('./constants');

function parseArn(arnString) {

  var arn = {},
      segmentExtract = /([\w\-\.\*]+)\:(.*)/,
      arnStringCarry = arnString;

  _constants.components.forEach(function (segment) {
    if (segment === 'resource') {
      return arn[segment] = arnStringCarry;
    }

    var _segmentExtract$exec = segmentExtract.exec(arnStringCarry);

    var _segmentExtract$exec2 = _slicedToArray(_segmentExtract$exec, 3);

    var _ = _segmentExtract$exec2[0];
    var value = _segmentExtract$exec2[1];
    var carry = _segmentExtract$exec2[2];

    arn[segment] = value;
    arnStringCarry = carry;
  });

  arn.resourceArr = arn.resource.split(/\/|\:/);

  return arn;
}