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