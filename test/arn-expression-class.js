
import ArnExpression from '../src/ArnExpression'

describe('ArnExpression', () => {

  describe('#testArn', async (done) => {

    const arnExpression = await ArnExpression.parse('arn:aws:events:us-east-1:*:*')

    [
      'arn:aws:events:us-east-1:975392878:some/resource',
      'arn:aws:events:us-east-1:42fq5235232:some/resource',
      'arn:aws:events:us-east-1:42fq5235232:some/other:resource',
      'arn:aws:events:us-east-1:a-different-tenant:some/resource',
      'arn:aws:events:us-east-1:a-different-tenant:some/other:resource'
    ].forEach(arn => {

      it('should match the arn', () => {

        arnExpression.testArn(arn).should.be.true()

      })

    })

    done()

  })

})
