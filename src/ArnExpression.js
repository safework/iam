
import {components} from './constants'
import parseArn from './arn-parser'
import {arnExpressionValidator} from './arn-validator'

import Arn from './Arn'

export default class ArnExpression {

  static async parse(arnExpressionString) {
    if (!await arnExpressionValidator(arnExpressionString)) {
      throw new Error('invalid arn')
    }

    let arn = parseArn(arnExpressionString)
    return new ArnExpression(arn)
  }

  constructor(arnExpression) {
    Object.assign(this, arnExpression)
  }

  test(arn) {
    if (typeof arn === 'string') {
      arn = Arn.parse(arn)
    }

  }
}
