'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvalidActionExpressionError = exports.InvalidStatmentError = exports.InvalidArnExpressionError = exports.InvalidArnError = undefined;

var _es6Error = require('es6-error');

var _es6Error2 = _interopRequireDefault(_es6Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidArnError = exports.InvalidArnError = function (_ExtendableError) {
  _inherits(InvalidArnError, _ExtendableError);

  function InvalidArnError() {
    var msg = arguments.length <= 0 || arguments[0] === undefined ? 'Invalid Arn.' : arguments[0];

    _classCallCheck(this, InvalidArnError);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InvalidArnError).call(this, msg));
  }

  return InvalidArnError;
}(_es6Error2.default);

var InvalidArnExpressionError = exports.InvalidArnExpressionError = function (_ExtendableError2) {
  _inherits(InvalidArnExpressionError, _ExtendableError2);

  function InvalidArnExpressionError() {
    var msg = arguments.length <= 0 || arguments[0] === undefined ? 'Invalid Arn Expression.' : arguments[0];

    _classCallCheck(this, InvalidArnExpressionError);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InvalidArnExpressionError).call(this, msg));
  }

  return InvalidArnExpressionError;
}(_es6Error2.default);

var InvalidStatmentError = exports.InvalidStatmentError = function (_ExtendableError3) {
  _inherits(InvalidStatmentError, _ExtendableError3);

  function InvalidStatmentError() {
    var msg = arguments.length <= 0 || arguments[0] === undefined ? 'Invalid Statement.' : arguments[0];

    _classCallCheck(this, InvalidStatmentError);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InvalidStatmentError).call(this, msg));
  }

  return InvalidStatmentError;
}(_es6Error2.default);

var InvalidActionExpressionError = exports.InvalidActionExpressionError = function (_ExtendableError4) {
  _inherits(InvalidActionExpressionError, _ExtendableError4);

  function InvalidActionExpressionError() {
    var msg = arguments.length <= 0 || arguments[0] === undefined ? 'Invalid Action Expression.' : arguments[0];

    _classCallCheck(this, InvalidActionExpressionError);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InvalidActionExpressionError).call(this, msg));
  }

  return InvalidActionExpressionError;
}(_es6Error2.default);