'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

var _arnParser = require('./arn-parser');

var _arnParser2 = _interopRequireDefault(_arnParser);

var _arnValidator = require('./arn-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Arn = function () {
  _createClass(Arn, null, [{
    key: 'parse',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(arnString) {
        var arn;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _arnValidator.arnValidator)(arnString);

              case 2:
                if (_context.sent) {
                  _context.next = 4;
                  break;
                }

                throw new Error('invalid arn');

              case 4:
                arn = (0, _arnParser2.default)(arnString);
                return _context.abrupt('return', new Arn(arn));

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function parse(_x) {
        return _ref.apply(this, arguments);
      }

      return parse;
    }()
  }]);

  function Arn(arn) {
    _classCallCheck(this, Arn);

    Object.assign(this, arn);
  }

  return Arn;
}();

exports.default = Arn;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

var _arnParser = require('./arn-parser');

var _arnParser2 = _interopRequireDefault(_arnParser);

var _arnValidator = require('./arn-validator');

var _Arn = require('./Arn');

var _Arn2 = _interopRequireDefault(_Arn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArnExpression = function () {
  _createClass(ArnExpression, null, [{
    key: 'parse',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(arnExpressionString) {
        var arn;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _arnValidator.arnExpressionValidator)(arnExpressionString);

              case 2:
                if (_context.sent) {
                  _context.next = 4;
                  break;
                }

                throw new Error('invalid arn');

              case 4:
                arn = (0, _arnParser2.default)(arnExpressionString);
                return _context.abrupt('return', new ArnExpression(arn));

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function parse(_x) {
        return _ref.apply(this, arguments);
      }

      return parse;
    }()
  }]);

  function ArnExpression(arnExpression) {
    _classCallCheck(this, ArnExpression);

    Object.assign(this, arnExpression);
  }

  _createClass(ArnExpression, [{
    key: 'test',
    value: function test(arn) {
      if (typeof arn === 'string') {
        arn = _Arn2.default.parse(arn);
      }
    }
  }]);

  return ArnExpression;
}();

exports.default = ArnExpression;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = parseArn;

var _constants = require('./constants');

function parseArn(arnString) {

  var arn = {},
      segmentExtract = /([\w\-\.]+)\:(.*)/,
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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arnValidator = arnValidator;
exports.arnExpressionValidator = arnExpressionValidator;
// Allowable formats, region and tenant may be omitted
// arn:<partition>:<service>:<region>:<tenant>:<resource>
// arn:<partition>:<service>:<region>:<tenant>:<resourcetype>/<resource>
// arn:<partition>:<service>:<region>:<tenant>:<resourcetype>:<resource>

var arnRegex = new RegExp(['^', 'arn', // arn literal
':', '[\\w\\-\\.]+', // partition - optional with separator
':', '[\\w\\-\\.]+', // service - optional  with separator
':', '[\\w\\-\\.]*', // region
':', '[\\w\\-\\.]*', // tenant
':', '[\\w\\-\\.]*', // resourcetype - optional without separator
'[:\\/]?', '[\\w\\-\\.\\/\\:]+', // resource
'$'].join(''));

function arnValidator(arnString) {
  return arnRegex.test(arnString);
}

var arnExpressionRegex = new RegExp(['^', 'arn', // arn literal
':', '[\\w\\-\\*]+', // partition - optional with separator
':', '[\\w\\-\\*]+', // service - optional  with separator
':', '[\\w\\-\\*]*', // region
':', '[\\w\\-\\*]*', // tenant
':', '[\\w\\-\\.\\*]*', // resourcetype - optional without separator
'[:\\/]?', '[\\w\\-\\.\\/\\:\\*]+', // resource
'$'].join(''));

function arnExpressionValidator(arnExpressionString) {
  return arnExpressionRegex.test(arnExpressionString);
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var components = exports.components = ['arn', 'partition', 'service', 'region', 'tenant', 'resource'];
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArnExpression = exports.Arn = undefined;

var _Arn2 = require('./Arn');

var _Arn3 = _interopRequireDefault(_Arn2);

var _ArnExpression2 = require('./ArnExpression');

var _ArnExpression3 = _interopRequireDefault(_ArnExpression2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Arn = _Arn3.default;
exports.ArnExpression = _ArnExpression3.default;
