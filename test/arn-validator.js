
import {arnValidator} from '../src/arn-validator'

import {validArns, invalidArns} from './arns'

describe('Arn validator', () => {

  validArns.forEach((arn) => {

    it(`return true for arn: ${arn}`, () => {
      arnValidator(arn).should.be.true()
    })

  })

  invalidArns.forEach((arn) => {

    it(`return false for arn: ${arn}`, () => {
      arnValidator(arn).should.be.false()
    })

  })

})
