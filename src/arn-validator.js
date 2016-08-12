// Allowable formats, region and tenant may be omitted
// arn:<partition>:<service>:<region>:<tenant>:<resource>
// arn:<partition>:<service>:<region>:<tenant>:<resourcetype>/<resource>
// arn:<partition>:<service>:<region>:<tenant>:<resourcetype>:<resource>

const arnRegex = new RegExp([
  '^',
  'arn', // arn literal
  ':',
  '[\\w\\-\\.]+', // partition - optional with separator
  ':',
  '[\\w\\-\\.]+', // service - optional  with separator
  ':',
  '[\\w\\-\\.]*', // region
  ':',
  '[\\w\\-\\.]*', // tenant
  ':',
  '[\\w\\-\\.]*', // resourcetype - optional without separator
  '[:\\/]?',
  '[\\w\\-\\.\\/\\:]+', // resource
  '$'
].join(''))

export function arnValidator(arnString) {
  return arnRegex.test(arnString)
}

const arnExpressionRegex = new RegExp([
  '^',
  'arn', // arn literal
  ':',
  '[\\w\\-\\*]+', // partition - optional with separator
  ':',
  '[\\w\\-\\*]+', // service - optional  with separator
  ':',
  '[\\w\\-\\*]*', // region
  ':',
  '[\\w\\-\\*]*', // tenant
  ':',
  '[\\w\\-\\.\\*]*', // resourcetype - optional without separator
  '[:\\/]?',
  '[\\w\\-\\.\\/\\:\\*]+', // resource
  '$'
].join(''))

export function arnExpressionValidator(arnExpressionString) {
  return arnExpressionRegex.test(arnExpressionString)
}
