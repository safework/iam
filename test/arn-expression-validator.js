
import {arnExpressionValidator} from '../src/arn-validator'

import {validArnExpressions} from './arns'

describe('Arn expression Validator', () => {

  validArnExpressions.forEach((arnExpression) => {

    it(`return true for arn expression: ${arnExpression}`, () => {
      arnExpressionValidator(arnExpression).should.be.true()
    })

  })

})
