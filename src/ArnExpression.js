
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
    this.regexifyComponents()
  }

  regexifyComponents() {
    for (let component of components) {
      this[component] = regexify(this[component])
    }
  }

  testArn(arn) {
    if (typeof arn === 'string') {
      arn = Arn.parse(arn)
    }

    return components.every(component => {
      this[component].test(arn[component])
    })
  }
}

function regexify(string) {
  string = string.replace('*', '.*')
  return new RegExp(`^${string}$`)
}
