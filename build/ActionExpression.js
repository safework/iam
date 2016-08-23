'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isMatch = require('is-match');

var _isMatch2 = _interopRequireDefault(_isMatch);

var _errors = require('./errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActionExpression = function () {
  function ActionExpression(actionExpression) {
    _classCallCheck(this, ActionExpression);

    Object.assign(this, {
      actionExpression: this.processActionExpression(actionExpression)
    });
  }

  _createClass(ActionExpression, [{
    key: 'processActionExpression',
    value: function processActionExpression(actionExpression) {
      return (0, _isMatch2.default)(actionExpression);
    }
  }, {
    key: 'matches',
    value: function matches(action) {
      return this.actionExpression(action);
    }
  }]);

  return ActionExpression;
}();

exports.default = ActionExpression;