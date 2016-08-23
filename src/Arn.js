import {
  InvalidArnError
} from './errors'
import {components} from './constants'

import parseArn from './arn-parser'
import {arnValidator} from './arn-validator'

export default class Arn {

  static parse(arnString) {
    if (!arnValidator(arnString)) {
      throw new InvalidArnError()
    }

    let arn = parseArn(arnString)
    return new Arn(arn)
  }

  constructor(arn) {
    Object.assign(this, arn)
  }
}
