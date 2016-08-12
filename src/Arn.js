
import {components} from './constants'

import parseArn from './arn-parser'
import {arnValidator} from './arn-validator'

export default class Arn {

  static async parse(arnString) {
    if (!await arnValidator(arnString)) {
      throw new Error('invalid arn')
    }

    let arn = parseArn(arnString)
    return new Arn(arn)
  }

  constructor(arn) {
    Object.assign(this, arn)
  }
}
