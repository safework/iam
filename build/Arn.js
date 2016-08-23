'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _errors = require('./errors');

var _constants = require('./constants');

var _arnParser = require('./arn-parser');

var _arnParser2 = _interopRequireDefault(_arnParser);

var _arnValidator = require('./arn-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Arn = function () {
  _createClass(Arn, null, [{
    key: 'parse',
    value: function parse(arnString) {
      if (!(0, _arnValidator.arnValidator)(arnString)) {
        throw new _errors.InvalidArnError();
      }

      var arn = (0, _arnParser2.default)(arnString);
      return new Arn(arn);
    }
  }]);

  function Arn(arn) {
    _classCallCheck(this, Arn);

    Object.assign(this, arn);
  }

  return Arn;
}();

exports.default = Arn;