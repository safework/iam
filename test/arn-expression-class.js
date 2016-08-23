
import ArnExpression from '../src/ArnExpression'

describe('ArnExpression', () => {

  describe('#matches', () => {

    const arnExpression = new ArnExpression({
      arn: 'arn',
      partition: 'aws',
      service: 'events',
      region: 'us-east-1',
      tenant: '*',
      resource: '*',
      resourceArr: [
        '*'
      ]
    });

    [ // matching arns
      'arn:aws:events:us-east-1:975392878:some/resource',
      'arn:aws:events:us-east-1:42fq5235232:some/resource',
      'arn:aws:events:us-east-1:42fq5235232:some/other:resource',
      'arn:aws:events:us-east-1:a-different-tenant:some/resource',
      'arn:aws:events:us-east-1:a-different-tenant:some/other:resource'
    ].forEach(arn => {

      it('should match the arn', async () => {

        (await arnExpression.matches(arn)).should.be.true()

      })

    });

    [ // not matchingArns
      'arn:aws:events:us-east-2:975392878:some/resource',
      'arn:aws:not-events:us-east-1:42fq5235232:some/resource',
      'arn:not-aws:events:us-east-1:42fq5235232:some/other:resource'
    ].forEach(arn => {

      it('should not match the arn', async () => {

        (await arnExpression.matches(arn)).should.be.false()

      })

    })

  })

})
