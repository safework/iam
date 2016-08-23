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

var _Arn = require('./Arn');

var _Arn2 = _interopRequireDefault(_Arn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArnExpression = function () {
  _createClass(ArnExpression, null, [{
    key: 'parse',
    value: function parse(arnExpressionString) {
      if (!(0, _arnValidator.arnExpressionValidator)(arnExpressionString)) {
        throw new _errors.InvalidArnExpressionError();
      }

      var arn = (0, _arnParser2.default)(arnExpressionString);
      return new ArnExpression(arn);
    }
  }]);

  function ArnExpression(arnExpression) {
    _classCallCheck(this, ArnExpression);

    Object.assign(this, arnExpression);
    this.regexifyComponents();
  }

  _createClass(ArnExpression, [{
    key: 'regexifyComponents',
    value: function regexifyComponents() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _constants.components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var component = _step.value;

          this[component] = regexify(this[component]);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'matches',
    value: function matches(arn) {
      var _this = this;

      if (typeof arn === 'string') {
        arn = _Arn2.default.parse(arn);
      }

      return _constants.components.every(function (component) {
        return _this[component].test(arn[component]);
      });
    }
  }]);

  return ArnExpression;
}();

exports.default = ArnExpression;


function regexify(string) {
  string = string.replace('*', '.*');
  try {
    return new RegExp('^' + string + '$');
  } catch (err) {
    throw new _errors.InvalidArnExpressionError();
  }
}