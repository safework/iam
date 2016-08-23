'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _errors = require('./errors');

var _ActionExpression = require('./ActionExpression');

var _ActionExpression2 = _interopRequireDefault(_ActionExpression);

var _ArnExpression = require('./ArnExpression');

var _ArnExpression2 = _interopRequireDefault(_ArnExpression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Role = function () {
  function Role(_ref) {
    var name = _ref.name;
    var Statement = _ref.Statement;

    _classCallCheck(this, Role);

    Object.assign(this, {
      name: name,
      Statement: this.processStatement(Statement)
    });
  }

  _createClass(Role, [{
    key: 'processStatement',
    value: function processStatement(Statement) {
      var statement = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Statement[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _step.value;
          var Effect = _step$value.Effect;
          var Action = _step$value.Action;
          var Resource = _step$value.Resource;

          if (!['Allow', 'Deny'].includes(Effect)) {
            throw (0, _errors.InvalidStatmentError)('Effect must be \'Allow\' or \'Deny\', supplied: ' + Effect);
          }
          statement.push({
            Effect: Effect,
            Action: new _ActionExpression2.default(Action),
            Resource: _ArnExpression2.default.parse(Resource)
          });
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

      return statement;
    }
  }, {
    key: 'isAuthorized',
    value: function isAuthorized(action, resource) {
      var isAuthorized = false;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.Statement[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = _step2.value;
          var Effect = _step2$value.Effect;
          var Action = _step2$value.Action;
          var Resource = _step2$value.Resource;

          if (Action.matches(action) && Resource.matches(resource)) {
            if (Effect === 'Deny') return false;
            isAuthorized = true;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return isAuthorized;
    }
  }]);

  return Role;
}();

exports.default = Role;