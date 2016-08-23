
import Role from '../src/Role'

describe('Role', () => {

  describe('#isAuthorized', () => {

    const role = new Role({
      name: 'Test Role',
      Statement: [{
        Effect: 'Allow',
        Action: 'CanUpdate',
        Resource: 'arn:aws:events:us-east-1:*:*'
      }]
    });

    [ // matching arns
      'arn:aws:events:us-east-1:975392878:some/resource',
      'arn:aws:events:us-east-1:42fq5235232:some/resource',
      'arn:aws:events:us-east-1:42fq5235232:some/other:resource',
      'arn:aws:events:us-east-1:a-different-tenant:some/resource',
      'arn:aws:events:us-east-1:a-different-tenant:some/other:resource'
    ].forEach(arn => {

      it('should match the arn', () => {

        role.isAuthorized('CanUpdate', arn).should.be.true()

      })

    });

    [ // not matchingArns
      'arn:aws:events:us-east-2:975392878:some/resource',
      'arn:aws:not-events:us-east-1:42fq5235232:some/resource',
      'arn:not-aws:events:us-east-1:42fq5235232:some/other:resource'
    ].forEach(arn => {

      it('should not match the arn', () => {

        role.isAuthorized('CanUpdate', arn).should.be.false()

      })

    })

  })

})
